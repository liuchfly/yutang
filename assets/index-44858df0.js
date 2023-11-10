var T_=Object.defineProperty;var E_=(r,e,t)=>e in r?T_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var yl=(r,e,t)=>(E_(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function gu(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function _u(r){if(Fe(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=Lt(n)?P_(n):_u(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Lt(r))return r;if(ft(r))return r}}const A_=/;(?![^(]*\))/g,C_=/:([^]+)/,R_=/\/\*.*?\*\//gs;function P_(r){const e={};return r.replace(R_,"").split(A_).forEach(t=>{if(t){const n=t.split(C_);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function xu(r){let e="";if(Lt(r))e=r;else if(Fe(r))for(let t=0;t<r.length;t++){const n=xu(r[t]);n&&(e+=n+" ")}else if(ft(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const L_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",D_=gu(L_);function vp(r){return!!r||r===""}const st={},rs=[],Un=()=>{},I_=()=>!1,O_=/^on[^a-z]/,Za=r=>O_.test(r),vu=r=>r.startsWith("onUpdate:"),Kt=Object.assign,yu=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},N_=Object.prototype.hasOwnProperty,qe=(r,e)=>N_.call(r,e),Fe=Array.isArray,ho=r=>Qa(r)==="[object Map]",F_=r=>Qa(r)==="[object Set]",Be=r=>typeof r=="function",Lt=r=>typeof r=="string",bu=r=>typeof r=="symbol",ft=r=>r!==null&&typeof r=="object",yp=r=>ft(r)&&Be(r.then)&&Be(r.catch),U_=Object.prototype.toString,Qa=r=>U_.call(r),k_=r=>Qa(r).slice(8,-1),B_=r=>Qa(r)==="[object Object]",Mu=r=>Lt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Ea=gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ja=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},z_=/-(\w)/g,ms=Ja(r=>r.replace(z_,(e,t)=>t?t.toUpperCase():"")),V_=/\B([A-Z])/g,Fs=Ja(r=>r.replace(V_,"-$1").toLowerCase()),bp=Ja(r=>r.charAt(0).toUpperCase()+r.slice(1)),bl=Ja(r=>r?`on${bp(r)}`:""),Mo=(r,e)=>!Object.is(r,e),Ml=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Fa=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},G_=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let wh;const H_=()=>wh||(wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let In;class W_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=In,!e&&In&&(this.index=(In.scopes||(In.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=In;try{return In=this,e()}finally{In=t}}}on(){In=this}off(){In=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function j_(r,e=In){e&&e.active&&e.effects.push(r)}function X_(){return In}const Su=r=>{const e=new Set(r);return e.w=0,e.n=0,e},Mp=r=>(r.w&Ki)>0,Sp=r=>(r.n&Ki)>0,q_=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=Ki},Y_=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];Mp(i)&&!Sp(i)?i.delete(r):e[t++]=i,i.w&=~Ki,i.n&=~Ki}e.length=t}},Ec=new WeakMap;let oo=0,Ki=1;const Ac=30;let On;const Mr=Symbol(""),Cc=Symbol("");class wu{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,j_(this,n)}run(){if(!this.active)return this.fn();let e=On,t=ji;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=On,On=this,ji=!0,Ki=1<<++oo,oo<=Ac?q_(this):Th(this),this.fn()}finally{oo<=Ac&&Y_(this),Ki=1<<--oo,On=this.parent,ji=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){On===this?this.deferStop=!0:this.active&&(Th(this),this.onStop&&this.onStop(),this.active=!1)}}function Th(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let ji=!0;const wp=[];function Us(){wp.push(ji),ji=!1}function ks(){const r=wp.pop();ji=r===void 0?!0:r}function rn(r,e,t){if(ji&&On){let n=Ec.get(r);n||Ec.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=Su()),Tp(i)}}function Tp(r,e){let t=!1;oo<=Ac?Sp(r)||(r.n|=Ki,t=!Mp(r)):t=!r.has(On),t&&(r.add(On),On.deps.push(r))}function wi(r,e,t,n,i,s){const o=Ec.get(r);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(r)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(r)?Mu(t)&&a.push(o.get("length")):(a.push(o.get(Mr)),ho(r)&&a.push(o.get(Cc)));break;case"delete":Fe(r)||(a.push(o.get(Mr)),ho(r)&&a.push(o.get(Cc)));break;case"set":ho(r)&&a.push(o.get(Mr));break}if(a.length===1)a[0]&&Rc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Rc(Su(l))}}function Rc(r,e){const t=Fe(r)?r:[...r];for(const n of t)n.computed&&Eh(n);for(const n of t)n.computed||Eh(n)}function Eh(r,e){(r!==On||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const K_=gu("__proto__,__v_isRef,__isVue"),Ep=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(bu)),$_=Tu(),Z_=Tu(!1,!0),Q_=Tu(!0),Ah=J_();function J_(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=Ke(this);for(let s=0,o=this.length;s<o;s++)rn(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(Ke)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){Us();const n=Ke(this)[e].apply(this,t);return ks(),n}}),r}function e0(r){const e=Ke(this);return rn(e,"has",r),e.hasOwnProperty(r)}function Tu(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?g0:Lp:e?Pp:Rp).get(n))return n;const o=Fe(n);if(!r){if(o&&qe(Ah,i))return Reflect.get(Ah,i,s);if(i==="hasOwnProperty")return e0}const a=Reflect.get(n,i,s);return(bu(i)?Ep.has(i):K_(i))||(r||rn(n,"get",i),e)?a:Ft(a)?o&&Mu(i)?a:a.value:ft(a)?r?Dp(a):Wo(a):a}}const t0=Ap(),n0=Ap(!0);function Ap(r=!1){return function(t,n,i,s){let o=t[n];if(gs(o)&&Ft(o)&&!Ft(i))return!1;if(!r&&(!Ua(i)&&!gs(i)&&(o=Ke(o),i=Ke(i)),!Fe(t)&&Ft(o)&&!Ft(i)))return o.value=i,!0;const a=Fe(t)&&Mu(n)?Number(n)<t.length:qe(t,n),l=Reflect.set(t,n,i,s);return t===Ke(s)&&(a?Mo(i,o)&&wi(t,"set",n,i):wi(t,"add",n,i)),l}}function i0(r,e){const t=qe(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&wi(r,"delete",e,void 0),n}function r0(r,e){const t=Reflect.has(r,e);return(!bu(e)||!Ep.has(e))&&rn(r,"has",e),t}function s0(r){return rn(r,"iterate",Fe(r)?"length":Mr),Reflect.ownKeys(r)}const Cp={get:$_,set:t0,deleteProperty:i0,has:r0,ownKeys:s0},o0={get:Q_,set(r,e){return!0},deleteProperty(r,e){return!0}},a0=Kt({},Cp,{get:Z_,set:n0}),Eu=r=>r,el=r=>Reflect.getPrototypeOf(r);function Yo(r,e,t=!1,n=!1){r=r.__v_raw;const i=Ke(r),s=Ke(e);t||(e!==s&&rn(i,"get",e),rn(i,"get",s));const{has:o}=el(i),a=n?Eu:t?Ru:So;if(o.call(i,e))return a(r.get(e));if(o.call(i,s))return a(r.get(s));r!==i&&r.get(e)}function Ko(r,e=!1){const t=this.__v_raw,n=Ke(t),i=Ke(r);return e||(r!==i&&rn(n,"has",r),rn(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function $o(r,e=!1){return r=r.__v_raw,!e&&rn(Ke(r),"iterate",Mr),Reflect.get(r,"size",r)}function Ch(r){r=Ke(r);const e=Ke(this);return el(e).has.call(e,r)||(e.add(r),wi(e,"add",r,r)),this}function Rh(r,e){e=Ke(e);const t=Ke(this),{has:n,get:i}=el(t);let s=n.call(t,r);s||(r=Ke(r),s=n.call(t,r));const o=i.call(t,r);return t.set(r,e),s?Mo(e,o)&&wi(t,"set",r,e):wi(t,"add",r,e),this}function Ph(r){const e=Ke(this),{has:t,get:n}=el(e);let i=t.call(e,r);i||(r=Ke(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&wi(e,"delete",r,void 0),s}function Lh(){const r=Ke(this),e=r.size!==0,t=r.clear();return e&&wi(r,"clear",void 0,void 0),t}function Zo(r,e){return function(n,i){const s=this,o=s.__v_raw,a=Ke(o),l=e?Eu:r?Ru:So;return!r&&rn(a,"iterate",Mr),o.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function Qo(r,e,t){return function(...n){const i=this.__v_raw,s=Ke(i),o=ho(s),a=r==="entries"||r===Symbol.iterator&&o,l=r==="keys"&&o,c=i[r](...n),u=t?Eu:e?Ru:So;return!e&&rn(s,"iterate",l?Cc:Mr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ri(r){return function(...e){return r==="delete"?!1:this}}function l0(){const r={get(s){return Yo(this,s)},get size(){return $o(this)},has:Ko,add:Ch,set:Rh,delete:Ph,clear:Lh,forEach:Zo(!1,!1)},e={get(s){return Yo(this,s,!1,!0)},get size(){return $o(this)},has:Ko,add:Ch,set:Rh,delete:Ph,clear:Lh,forEach:Zo(!1,!0)},t={get(s){return Yo(this,s,!0)},get size(){return $o(this,!0)},has(s){return Ko.call(this,s,!0)},add:Ri("add"),set:Ri("set"),delete:Ri("delete"),clear:Ri("clear"),forEach:Zo(!0,!1)},n={get(s){return Yo(this,s,!0,!0)},get size(){return $o(this,!0)},has(s){return Ko.call(this,s,!0)},add:Ri("add"),set:Ri("set"),delete:Ri("delete"),clear:Ri("clear"),forEach:Zo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Qo(s,!1,!1),t[s]=Qo(s,!0,!1),e[s]=Qo(s,!1,!0),n[s]=Qo(s,!0,!0)}),[r,t,e,n]}const[c0,u0,h0,f0]=l0();function Au(r,e){const t=e?r?f0:h0:r?u0:c0;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(qe(t,i)&&i in n?t:n,i,s)}const d0={get:Au(!1,!1)},p0={get:Au(!1,!0)},m0={get:Au(!0,!1)},Rp=new WeakMap,Pp=new WeakMap,Lp=new WeakMap,g0=new WeakMap;function _0(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x0(r){return r.__v_skip||!Object.isExtensible(r)?0:_0(k_(r))}function Wo(r){return gs(r)?r:Cu(r,!1,Cp,d0,Rp)}function v0(r){return Cu(r,!1,a0,p0,Pp)}function Dp(r){return Cu(r,!0,o0,m0,Lp)}function Cu(r,e,t,n,i){if(!ft(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const o=x0(r);if(o===0)return r;const a=new Proxy(r,o===2?n:t);return i.set(r,a),a}function ss(r){return gs(r)?ss(r.__v_raw):!!(r&&r.__v_isReactive)}function gs(r){return!!(r&&r.__v_isReadonly)}function Ua(r){return!!(r&&r.__v_isShallow)}function Ip(r){return ss(r)||gs(r)}function Ke(r){const e=r&&r.__v_raw;return e?Ke(e):r}function Op(r){return Fa(r,"__v_skip",!0),r}const So=r=>ft(r)?Wo(r):r,Ru=r=>ft(r)?Dp(r):r;function Np(r){ji&&On&&(r=Ke(r),Tp(r.dep||(r.dep=Su())))}function Fp(r,e){r=Ke(r);const t=r.dep;t&&Rc(t)}function Ft(r){return!!(r&&r.__v_isRef===!0)}function Up(r){return kp(r,!1)}function y0(r){return kp(r,!0)}function kp(r,e){return Ft(r)?r:new b0(r,e)}class b0{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:So(e)}get value(){return Np(this),this._value}set value(e){const t=this.__v_isShallow||Ua(e)||gs(e);e=t?e:Ke(e),Mo(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:So(e),Fp(this))}}function Sr(r){return Ft(r)?r.value:r}const M0={get:(r,e,t)=>Sr(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return Ft(i)&&!Ft(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function Bp(r){return ss(r)?r:new Proxy(r,M0)}var zp;class S0{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[zp]=!1,this._dirty=!0,this.effect=new wu(e,()=>{this._dirty||(this._dirty=!0,Fp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=Ke(this);return Np(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}zp="__v_isReadonly";function w0(r,e,t=!1){let n,i;const s=Be(r);return s?(n=r,i=Un):(n=r.get,i=r.set),new S0(n,i,s||!i,t)}function Xi(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){tl(s,e,t)}return i}function kn(r,e,t,n){if(Be(r)){const s=Xi(r,e,t,n);return s&&yp(s)&&s.catch(o=>{tl(o,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(kn(r[s],e,t,n));return i}function tl(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Xi(l,null,10,[r,o,a]);return}}T0(r,t,i,n)}function T0(r,e,t,n=!0){console.error(r)}let wo=!1,Pc=!1;const Ot=[];let Kn=0;const os=[];let di=null,gr=0;const Vp=Promise.resolve();let Pu=null;function Gp(r){const e=Pu||Vp;return r?e.then(this?r.bind(this):r):e}function E0(r){let e=Kn+1,t=Ot.length;for(;e<t;){const n=e+t>>>1;To(Ot[n])<r?e=n+1:t=n}return e}function Lu(r){(!Ot.length||!Ot.includes(r,wo&&r.allowRecurse?Kn+1:Kn))&&(r.id==null?Ot.push(r):Ot.splice(E0(r.id),0,r),Hp())}function Hp(){!wo&&!Pc&&(Pc=!0,Pu=Vp.then(jp))}function A0(r){const e=Ot.indexOf(r);e>Kn&&Ot.splice(e,1)}function C0(r){Fe(r)?os.push(...r):(!di||!di.includes(r,r.allowRecurse?gr+1:gr))&&os.push(r),Hp()}function Dh(r,e=wo?Kn+1:0){for(;e<Ot.length;e++){const t=Ot[e];t&&t.pre&&(Ot.splice(e,1),e--,t())}}function Wp(r){if(os.length){const e=[...new Set(os)];if(os.length=0,di){di.push(...e);return}for(di=e,di.sort((t,n)=>To(t)-To(n)),gr=0;gr<di.length;gr++)di[gr]();di=null,gr=0}}const To=r=>r.id==null?1/0:r.id,R0=(r,e)=>{const t=To(r)-To(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function jp(r){Pc=!1,wo=!0,Ot.sort(R0);const e=Un;try{for(Kn=0;Kn<Ot.length;Kn++){const t=Ot[Kn];t&&t.active!==!1&&Xi(t,null,14)}}finally{Kn=0,Ot.length=0,Wp(),wo=!1,Pu=null,(Ot.length||os.length)&&jp()}}function P0(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||st;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||st;f&&(i=t.map(d=>Lt(d)?d.trim():d)),h&&(i=t.map(G_))}let a,l=n[a=bl(e)]||n[a=bl(ms(e))];!l&&s&&(l=n[a=bl(Fs(e))]),l&&kn(l,r,6,i);const c=n[a+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,kn(c,r,6,i)}}function Xp(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let o={},a=!1;if(!Be(r)){const l=c=>{const u=Xp(c,e,!0);u&&(a=!0,Kt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!a?(ft(r)&&n.set(r,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Kt(o,s),ft(r)&&n.set(r,o),o)}function nl(r,e){return!r||!Za(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(r,e[0].toLowerCase()+e.slice(1))||qe(r,Fs(e))||qe(r,e))}let Zn=null,qp=null;function ka(r){const e=Zn;return Zn=r,qp=r&&r.type.__scopeId||null,e}function L0(r,e=Zn,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&zh(-1);const s=ka(e);let o;try{o=r(...i)}finally{ka(s),n._d&&zh(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Sl(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:p}=r;let m,x;const y=ka(r);try{if(t.shapeFlag&4){const b=i||n;m=qn(u.call(b,b,h,s,d,f,g)),x=l}else{const b=e;m=qn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),x=e.props?l:D0(l)}}catch(b){po.length=0,tl(b,r,1),m=fn(Eo)}let _=m;if(x&&p!==!1){const b=Object.keys(x),{shapeFlag:M}=_;b.length&&M&7&&(o&&b.some(vu)&&(x=I0(x,o)),_=_s(_,x))}return t.dirs&&(_=_s(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),m=_,ka(y),m}const D0=r=>{let e;for(const t in r)(t==="class"||t==="style"||Za(t))&&((e||(e={}))[t]=r[t]);return e},I0=(r,e)=>{const t={};for(const n in r)(!vu(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function O0(r,e,t){const{props:n,children:i,component:s}=r,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Ih(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!nl(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Ih(n,o,c):!0:!!o;return!1}function Ih(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!nl(t,s))return!0}return!1}function N0({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const F0=r=>r.__isSuspense;function U0(r,e){e&&e.pendingBranch?Fe(r)?e.effects.push(...r):e.effects.push(r):C0(r)}function Aa(r,e){if(yt){let t=yt.provides;const n=yt.parent&&yt.parent.provides;n===t&&(t=yt.provides=Object.create(n)),t[r]=e}}function Mi(r,e,t=!1){const n=yt||Zn;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Be(e)?e.call(n.proxy):e}}const Jo={};function Ca(r,e,t){return Yp(r,e,t)}function Yp(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:o}=st){const a=X_()===(yt==null?void 0:yt.scope)?yt:null;let l,c=!1,u=!1;if(Ft(r)?(l=()=>r.value,c=Ua(r)):ss(r)?(l=()=>r,n=!0):Fe(r)?(u=!0,c=r.some(_=>ss(_)||Ua(_)),l=()=>r.map(_=>{if(Ft(_))return _.value;if(ss(_))return es(_);if(Be(_))return Xi(_,a,2)})):Be(r)?e?l=()=>Xi(r,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),kn(r,a,3,[f])}:l=Un,e&&n){const _=l;l=()=>es(_())}let h,f=_=>{h=x.onStop=()=>{Xi(_,a,4)}},d;if(Co)if(f=Un,e?t&&kn(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const _=Rx();d=_.__watcherHandles||(_.__watcherHandles=[])}else return Un;let g=u?new Array(r.length).fill(Jo):Jo;const p=()=>{if(x.active)if(e){const _=x.run();(n||c||(u?_.some((b,M)=>Mo(b,g[M])):Mo(_,g)))&&(h&&h(),kn(e,a,3,[_,g===Jo?void 0:u&&g[0]===Jo?[]:g,f]),g=_)}else x.run()};p.allowRecurse=!!e;let m;i==="sync"?m=p:i==="post"?m=()=>$t(p,a&&a.suspense):(p.pre=!0,a&&(p.id=a.uid),m=()=>Lu(p));const x=new wu(l,m);e?t?p():g=x.run():i==="post"?$t(x.run.bind(x),a&&a.suspense):x.run();const y=()=>{x.stop(),a&&a.scope&&yu(a.scope.effects,x)};return d&&d.push(y),y}function k0(r,e,t){const n=this.proxy,i=Lt(r)?r.includes(".")?Kp(n,r):()=>n[r]:r.bind(n,n);let s;Be(e)?s=e:(s=e.handler,t=e);const o=yt;xs(this);const a=Yp(i,s.bind(n),t);return o?xs(o):wr(),a}function Kp(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function es(r,e){if(!ft(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),Ft(r))es(r.value,e);else if(Fe(r))for(let t=0;t<r.length;t++)es(r[t],e);else if(F_(r)||ho(r))r.forEach(t=>{es(t,e)});else if(B_(r))for(const t in r)es(r[t],e);return r}function $p(r){return Be(r)?{setup:r,name:r.name}:r}const Ra=r=>!!r.type.__asyncLoader,Zp=r=>r.type.__isKeepAlive;function B0(r,e){Qp(r,"a",e)}function z0(r,e){Qp(r,"da",e)}function Qp(r,e,t=yt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(il(e,n,t),t){let i=t.parent;for(;i&&i.parent;)Zp(i.parent.vnode)&&V0(n,e,t,i),i=i.parent}}function V0(r,e,t,n){const i=il(e,r,n,!0);em(()=>{yu(n[e],i)},t)}function il(r,e,t=yt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Us(),xs(t);const a=kn(e,t,r,o);return wr(),ks(),a});return n?i.unshift(s):i.push(s),s}}const Ci=r=>(e,t=yt)=>(!Co||r==="sp")&&il(r,(...n)=>e(...n),t),G0=Ci("bm"),Jp=Ci("m"),H0=Ci("bu"),W0=Ci("u"),j0=Ci("bum"),em=Ci("um"),X0=Ci("sp"),q0=Ci("rtg"),Y0=Ci("rtc");function K0(r,e=yt){il("ec",r,e)}function sr(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Us(),kn(l,t,8,[r.el,a,r,e]),ks())}}const $0=Symbol(),Lc=r=>r?dm(r)?Fu(r)||r.proxy:Lc(r.parent):null,fo=Kt(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Lc(r.parent),$root:r=>Lc(r.root),$emit:r=>r.emit,$options:r=>Du(r),$forceUpdate:r=>r.f||(r.f=()=>Lu(r.update)),$nextTick:r=>r.n||(r.n=Gp.bind(r.proxy)),$watch:r=>k0.bind(r)}),wl=(r,e)=>r!==st&&!r.__isScriptSetup&&qe(r,e),Z0={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:l}=r;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(wl(n,e))return o[e]=1,n[e];if(i!==st&&qe(i,e))return o[e]=2,i[e];if((c=r.propsOptions[0])&&qe(c,e))return o[e]=3,s[e];if(t!==st&&qe(t,e))return o[e]=4,t[e];Dc&&(o[e]=0)}}const u=fo[e];let h,f;if(u)return e==="$attrs"&&rn(r,"get",e),u(r);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==st&&qe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,qe(f,e))return f[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return wl(i,e)?(i[e]=t,!0):n!==st&&qe(n,e)?(n[e]=t,!0):qe(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!t[o]||r!==st&&qe(r,o)||wl(e,o)||(a=s[0])&&qe(a,o)||qe(n,o)||qe(fo,o)||qe(i.config.globalProperties,o)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:qe(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let Dc=!0;function Q0(r){const e=Du(r),t=r.proxy,n=r.ctx;Dc=!1,e.beforeCreate&&Oh(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:p,deactivated:m,beforeDestroy:x,beforeUnmount:y,destroyed:_,unmounted:b,render:M,renderTracked:A,renderTriggered:R,errorCaptured:v,serverPrefetch:w,expose:I,inheritAttrs:F,components:Y,directives:k,filters:O}=e;if(c&&J0(c,n,null,r.appContext.config.unwrapInjectedRef),o)for(const q in o){const z=o[q];Be(z)&&(n[q]=z.bind(t))}if(i){const q=i.call(t,t);ft(q)&&(r.data=Wo(q))}if(Dc=!0,s)for(const q in s){const z=s[q],re=Be(z)?z.bind(t,t):Be(z.get)?z.get.bind(t,t):Un,ce=!Be(z)&&Be(z.set)?z.set.bind(t):Un,be=Sn({get:re,set:ce});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>be.value,set:W=>be.value=W})}if(a)for(const q in a)tm(a[q],n,t,q);if(l){const q=Be(l)?l.call(t):l;Reflect.ownKeys(q).forEach(z=>{Aa(z,q[z])})}u&&Oh(u,r,"c");function K(q,z){Fe(z)?z.forEach(re=>q(re.bind(t))):z&&q(z.bind(t))}if(K(G0,h),K(Jp,f),K(H0,d),K(W0,g),K(B0,p),K(z0,m),K(K0,v),K(Y0,A),K(q0,R),K(j0,y),K(em,b),K(X0,w),Fe(I))if(I.length){const q=r.exposed||(r.exposed={});I.forEach(z=>{Object.defineProperty(q,z,{get:()=>t[z],set:re=>t[z]=re})})}else r.exposed||(r.exposed={});M&&r.render===Un&&(r.render=M),F!=null&&(r.inheritAttrs=F),Y&&(r.components=Y),k&&(r.directives=k)}function J0(r,e,t=Un,n=!1){Fe(r)&&(r=Ic(r));for(const i in r){const s=r[i];let o;ft(s)?"default"in s?o=Mi(s.from||i,s.default,!0):o=Mi(s.from||i):o=Mi(s),Ft(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Oh(r,e,t){kn(Fe(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function tm(r,e,t,n){const i=n.includes(".")?Kp(t,n):()=>t[n];if(Lt(r)){const s=e[r];Be(s)&&Ca(i,s)}else if(Be(r))Ca(i,r.bind(t));else if(ft(r))if(Fe(r))r.forEach(s=>tm(s,e,t,n));else{const s=Be(r.handler)?r.handler.bind(t):e[r.handler];Be(s)&&Ca(i,s,r)}}function Du(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=r.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>Ba(l,c,o,!0)),Ba(l,e,o)),ft(e)&&s.set(e,l),l}function Ba(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&Ba(r,s,t,!0),i&&i.forEach(o=>Ba(r,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=ex[o]||t&&t[o];r[o]=a?a(r[o],e[o]):e[o]}return r}const ex={data:Nh,props:fr,emits:fr,methods:fr,computed:fr,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:fr,directives:fr,watch:nx,provide:Nh,inject:tx};function Nh(r,e){return e?r?function(){return Kt(Be(r)?r.call(this,this):r,Be(e)?e.call(this,this):e)}:e:r}function tx(r,e){return fr(Ic(r),Ic(e))}function Ic(r){if(Fe(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function Ht(r,e){return r?[...new Set([].concat(r,e))]:e}function fr(r,e){return r?Kt(Kt(Object.create(null),r),e):e}function nx(r,e){if(!r)return e;if(!e)return r;const t=Kt(Object.create(null),r);for(const n in e)t[n]=Ht(r[n],e[n]);return t}function ix(r,e,t,n=!1){const i={},s={};Fa(s,sl,1),r.propsDefaults=Object.create(null),nm(r,e,i,s);for(const o in r.propsOptions[0])o in i||(i[o]=void 0);t?r.props=n?i:v0(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function rx(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=r,a=Ke(i),[l]=r.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=r.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(nl(r.emitsOptions,f))continue;const d=e[f];if(l)if(qe(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=ms(f);i[g]=Oc(l,a,g,d,r,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{nm(r,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!qe(e,h)&&((u=Fs(h))===h||!qe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=Oc(l,a,h,void 0,r,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!qe(e,h))&&(delete s[h],c=!0)}c&&wi(r,"set","$attrs")}function nm(r,e,t,n){const[i,s]=r.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ea(l))continue;const c=e[l];let u;i&&qe(i,u=ms(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:nl(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Ke(t),c=a||st;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Oc(i,l,h,c[h],r,!qe(c,h))}}return o}function Oc(r,e,t,n,i,s){const o=r[t];if(o!=null){const a=qe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Be(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(xs(i),n=c[t]=l.call(null,e),wr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Fs(t))&&(n=!0))}return n}function im(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,o={},a=[];let l=!1;if(!Be(r)){const u=h=>{l=!0;const[f,d]=im(h,e,!0);Kt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return ft(r)&&n.set(r,rs),rs;if(Fe(s))for(let u=0;u<s.length;u++){const h=ms(s[u]);Fh(h)&&(o[h]=st)}else if(s)for(const u in s){const h=ms(u);if(Fh(h)){const f=s[u],d=o[h]=Fe(f)||Be(f)?{type:f}:Object.assign({},f);if(d){const g=Bh(Boolean,d.type),p=Bh(String,d.type);d[0]=g>-1,d[1]=p<0||g<p,(g>-1||qe(d,"default"))&&a.push(h)}}}const c=[o,a];return ft(r)&&n.set(r,c),c}function Fh(r){return r[0]!=="$"}function Uh(r){const e=r&&r.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:r===null?"null":""}function kh(r,e){return Uh(r)===Uh(e)}function Bh(r,e){return Fe(e)?e.findIndex(t=>kh(t,r)):Be(e)&&kh(e,r)?0:-1}const rm=r=>r[0]==="_"||r==="$stable",Iu=r=>Fe(r)?r.map(qn):[qn(r)],sx=(r,e,t)=>{if(e._n)return e;const n=L0((...i)=>Iu(e(...i)),t);return n._c=!1,n},sm=(r,e,t)=>{const n=r._ctx;for(const i in r){if(rm(i))continue;const s=r[i];if(Be(s))e[i]=sx(i,s,n);else if(s!=null){const o=Iu(s);e[i]=()=>o}}},om=(r,e)=>{const t=Iu(e);r.slots.default=()=>t},ox=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=Ke(e),Fa(e,"_",t)):sm(e,r.slots={})}else r.slots={},e&&om(r,e);Fa(r.slots,sl,1)},ax=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,o=st;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Kt(i,e),!t&&a===1&&delete i._):(s=!e.$stable,sm(e,i)),o=e}else e&&(om(r,e),o={default:1});if(s)for(const a in i)!rm(a)&&!(a in o)&&delete i[a]};function am(){return{app:null,config:{isNativeTag:I_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lx=0;function cx(r,e){return function(n,i=null){Be(n)||(n=Object.assign({},n)),i!=null&&!ft(i)&&(i=null);const s=am(),o=new Set;let a=!1;const l=s.app={_uid:lx++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Px,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Be(c.install)?(o.add(c),c.install(l,...u)):Be(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=fn(n,i);return f.appContext=s,u&&e?e(f,c):r(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Fu(f.component)||f.component.proxy}},unmount(){a&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Nc(r,e,t,n,i=!1){if(Fe(r)){r.forEach((f,d)=>Nc(f,e&&(Fe(e)?e[d]:e),t,n,i));return}if(Ra(n)&&!i)return;const s=n.shapeFlag&4?Fu(n.component)||n.component.proxy:n.el,o=i?null:s,{i:a,r:l}=r,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Lt(c)?(u[c]=null,qe(h,c)&&(h[c]=null)):Ft(c)&&(c.value=null)),Be(l))Xi(l,a,12,[o,u]);else{const f=Lt(l),d=Ft(l);if(f||d){const g=()=>{if(r.f){const p=f?qe(h,l)?h[l]:u[l]:l.value;i?Fe(p)&&yu(p,s):Fe(p)?p.includes(s)||p.push(s):f?(u[l]=[s],qe(h,l)&&(h[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else f?(u[l]=o,qe(h,l)&&(h[l]=o)):d&&(l.value=o,r.k&&(u[r.k]=o))};o?(g.id=-1,$t(g,t)):g()}}}const $t=U0;function ux(r){return hx(r)}function hx(r,e){const t=H_();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Un,insertStaticContent:g}=r,p=(E,D,j,Z=null,te=null,he=null,pe=!1,ae=null,ge=!!D.dynamicChildren)=>{if(E===D)return;E&&!Xs(E,D)&&(Z=$(E),W(E,te,he,!0),E=null),D.patchFlag===-2&&(ge=!1,D.dynamicChildren=null);const{type:le,ref:T,shapeFlag:S}=D;switch(le){case rl:m(E,D,j,Z);break;case Eo:x(E,D,j,Z);break;case Tl:E==null&&y(D,j,Z,pe);break;case mi:Y(E,D,j,Z,te,he,pe,ae,ge);break;default:S&1?M(E,D,j,Z,te,he,pe,ae,ge):S&6?k(E,D,j,Z,te,he,pe,ae,ge):(S&64||S&128)&&le.process(E,D,j,Z,te,he,pe,ae,ge,de)}T!=null&&te&&Nc(T,E&&E.ref,he,D||E,!D)},m=(E,D,j,Z)=>{if(E==null)n(D.el=a(D.children),j,Z);else{const te=D.el=E.el;D.children!==E.children&&c(te,D.children)}},x=(E,D,j,Z)=>{E==null?n(D.el=l(D.children||""),j,Z):D.el=E.el},y=(E,D,j,Z)=>{[E.el,E.anchor]=g(E.children,D,j,Z,E.el,E.anchor)},_=({el:E,anchor:D},j,Z)=>{let te;for(;E&&E!==D;)te=f(E),n(E,j,Z),E=te;n(D,j,Z)},b=({el:E,anchor:D})=>{let j;for(;E&&E!==D;)j=f(E),i(E),E=j;i(D)},M=(E,D,j,Z,te,he,pe,ae,ge)=>{pe=pe||D.type==="svg",E==null?A(D,j,Z,te,he,pe,ae,ge):w(E,D,te,he,pe,ae,ge)},A=(E,D,j,Z,te,he,pe,ae)=>{let ge,le;const{type:T,props:S,shapeFlag:B,transition:J,dirs:ne}=E;if(ge=E.el=o(E.type,he,S&&S.is,S),B&8?u(ge,E.children):B&16&&v(E.children,ge,null,Z,te,he&&T!=="foreignObject",pe,ae),ne&&sr(E,null,Z,"created"),R(ge,E,E.scopeId,pe,Z),S){for(const xe in S)xe!=="value"&&!Ea(xe)&&s(ge,xe,null,S[xe],he,E.children,Z,te,Q);"value"in S&&s(ge,"value",null,S.value),(le=S.onVnodeBeforeMount)&&jn(le,Z,E)}ne&&sr(E,null,Z,"beforeMount");const fe=(!te||te&&!te.pendingBranch)&&J&&!J.persisted;fe&&J.beforeEnter(ge),n(ge,D,j),((le=S&&S.onVnodeMounted)||fe||ne)&&$t(()=>{le&&jn(le,Z,E),fe&&J.enter(ge),ne&&sr(E,null,Z,"mounted")},te)},R=(E,D,j,Z,te)=>{if(j&&d(E,j),Z)for(let he=0;he<Z.length;he++)d(E,Z[he]);if(te){let he=te.subTree;if(D===he){const pe=te.vnode;R(E,pe,pe.scopeId,pe.slotScopeIds,te.parent)}}},v=(E,D,j,Z,te,he,pe,ae,ge=0)=>{for(let le=ge;le<E.length;le++){const T=E[le]=ae?Ui(E[le]):qn(E[le]);p(null,T,D,j,Z,te,he,pe,ae)}},w=(E,D,j,Z,te,he,pe)=>{const ae=D.el=E.el;let{patchFlag:ge,dynamicChildren:le,dirs:T}=D;ge|=E.patchFlag&16;const S=E.props||st,B=D.props||st;let J;j&&or(j,!1),(J=B.onVnodeBeforeUpdate)&&jn(J,j,D,E),T&&sr(D,E,j,"beforeUpdate"),j&&or(j,!0);const ne=te&&D.type!=="foreignObject";if(le?I(E.dynamicChildren,le,ae,j,Z,ne,he):pe||z(E,D,ae,null,j,Z,ne,he,!1),ge>0){if(ge&16)F(ae,D,S,B,j,Z,te);else if(ge&2&&S.class!==B.class&&s(ae,"class",null,B.class,te),ge&4&&s(ae,"style",S.style,B.style,te),ge&8){const fe=D.dynamicProps;for(let xe=0;xe<fe.length;xe++){const L=fe[xe],V=S[L],we=B[L];(we!==V||L==="value")&&s(ae,L,V,we,te,E.children,j,Z,Q)}}ge&1&&E.children!==D.children&&u(ae,D.children)}else!pe&&le==null&&F(ae,D,S,B,j,Z,te);((J=B.onVnodeUpdated)||T)&&$t(()=>{J&&jn(J,j,D,E),T&&sr(D,E,j,"updated")},Z)},I=(E,D,j,Z,te,he,pe)=>{for(let ae=0;ae<D.length;ae++){const ge=E[ae],le=D[ae],T=ge.el&&(ge.type===mi||!Xs(ge,le)||ge.shapeFlag&70)?h(ge.el):j;p(ge,le,T,null,Z,te,he,pe,!0)}},F=(E,D,j,Z,te,he,pe)=>{if(j!==Z){if(j!==st)for(const ae in j)!Ea(ae)&&!(ae in Z)&&s(E,ae,j[ae],null,pe,D.children,te,he,Q);for(const ae in Z){if(Ea(ae))continue;const ge=Z[ae],le=j[ae];ge!==le&&ae!=="value"&&s(E,ae,le,ge,pe,D.children,te,he,Q)}"value"in Z&&s(E,"value",j.value,Z.value)}},Y=(E,D,j,Z,te,he,pe,ae,ge)=>{const le=D.el=E?E.el:a(""),T=D.anchor=E?E.anchor:a("");let{patchFlag:S,dynamicChildren:B,slotScopeIds:J}=D;J&&(ae=ae?ae.concat(J):J),E==null?(n(le,j,Z),n(T,j,Z),v(D.children,j,T,te,he,pe,ae,ge)):S>0&&S&64&&B&&E.dynamicChildren?(I(E.dynamicChildren,B,j,te,he,pe,ae),(D.key!=null||te&&D===te.subTree)&&lm(E,D,!0)):z(E,D,j,T,te,he,pe,ae,ge)},k=(E,D,j,Z,te,he,pe,ae,ge)=>{D.slotScopeIds=ae,E==null?D.shapeFlag&512?te.ctx.activate(D,j,Z,pe,ge):O(D,j,Z,te,he,pe,ge):G(E,D,ge)},O=(E,D,j,Z,te,he,pe)=>{const ae=E.component=Mx(E,Z,te);if(Zp(E)&&(ae.ctx.renderer=de),Sx(ae),ae.asyncDep){if(te&&te.registerDep(ae,K),!E.el){const ge=ae.subTree=fn(Eo);x(null,ge,D,j)}return}K(ae,E,D,j,te,he,pe)},G=(E,D,j)=>{const Z=D.component=E.component;if(O0(E,D,j))if(Z.asyncDep&&!Z.asyncResolved){q(Z,D,j);return}else Z.next=D,A0(Z.update),Z.update();else D.el=E.el,Z.vnode=D},K=(E,D,j,Z,te,he,pe)=>{const ae=()=>{if(E.isMounted){let{next:T,bu:S,u:B,parent:J,vnode:ne}=E,fe=T,xe;or(E,!1),T?(T.el=ne.el,q(E,T,pe)):T=ne,S&&Ml(S),(xe=T.props&&T.props.onVnodeBeforeUpdate)&&jn(xe,J,T,ne),or(E,!0);const L=Sl(E),V=E.subTree;E.subTree=L,p(V,L,h(V.el),$(V),E,te,he),T.el=L.el,fe===null&&N0(E,L.el),B&&$t(B,te),(xe=T.props&&T.props.onVnodeUpdated)&&$t(()=>jn(xe,J,T,ne),te)}else{let T;const{el:S,props:B}=D,{bm:J,m:ne,parent:fe}=E,xe=Ra(D);if(or(E,!1),J&&Ml(J),!xe&&(T=B&&B.onVnodeBeforeMount)&&jn(T,fe,D),or(E,!0),S&&ve){const L=()=>{E.subTree=Sl(E),ve(S,E.subTree,E,te,null)};xe?D.type.__asyncLoader().then(()=>!E.isUnmounted&&L()):L()}else{const L=E.subTree=Sl(E);p(null,L,j,Z,E,te,he),D.el=L.el}if(ne&&$t(ne,te),!xe&&(T=B&&B.onVnodeMounted)){const L=D;$t(()=>jn(T,fe,L),te)}(D.shapeFlag&256||fe&&Ra(fe.vnode)&&fe.vnode.shapeFlag&256)&&E.a&&$t(E.a,te),E.isMounted=!0,D=j=Z=null}},ge=E.effect=new wu(ae,()=>Lu(le),E.scope),le=E.update=()=>ge.run();le.id=E.uid,or(E,!0),le()},q=(E,D,j)=>{D.component=E;const Z=E.vnode.props;E.vnode=D,E.next=null,rx(E,D.props,Z,j),ax(E,D.children,j),Us(),Dh(),ks()},z=(E,D,j,Z,te,he,pe,ae,ge=!1)=>{const le=E&&E.children,T=E?E.shapeFlag:0,S=D.children,{patchFlag:B,shapeFlag:J}=D;if(B>0){if(B&128){ce(le,S,j,Z,te,he,pe,ae,ge);return}else if(B&256){re(le,S,j,Z,te,he,pe,ae,ge);return}}J&8?(T&16&&Q(le,te,he),S!==le&&u(j,S)):T&16?J&16?ce(le,S,j,Z,te,he,pe,ae,ge):Q(le,te,he,!0):(T&8&&u(j,""),J&16&&v(S,j,Z,te,he,pe,ae,ge))},re=(E,D,j,Z,te,he,pe,ae,ge)=>{E=E||rs,D=D||rs;const le=E.length,T=D.length,S=Math.min(le,T);let B;for(B=0;B<S;B++){const J=D[B]=ge?Ui(D[B]):qn(D[B]);p(E[B],J,j,null,te,he,pe,ae,ge)}le>T?Q(E,te,he,!0,!1,S):v(D,j,Z,te,he,pe,ae,ge,S)},ce=(E,D,j,Z,te,he,pe,ae,ge)=>{let le=0;const T=D.length;let S=E.length-1,B=T-1;for(;le<=S&&le<=B;){const J=E[le],ne=D[le]=ge?Ui(D[le]):qn(D[le]);if(Xs(J,ne))p(J,ne,j,null,te,he,pe,ae,ge);else break;le++}for(;le<=S&&le<=B;){const J=E[S],ne=D[B]=ge?Ui(D[B]):qn(D[B]);if(Xs(J,ne))p(J,ne,j,null,te,he,pe,ae,ge);else break;S--,B--}if(le>S){if(le<=B){const J=B+1,ne=J<T?D[J].el:Z;for(;le<=B;)p(null,D[le]=ge?Ui(D[le]):qn(D[le]),j,ne,te,he,pe,ae,ge),le++}}else if(le>B)for(;le<=S;)W(E[le],te,he,!0),le++;else{const J=le,ne=le,fe=new Map;for(le=ne;le<=B;le++){const Te=D[le]=ge?Ui(D[le]):qn(D[le]);Te.key!=null&&fe.set(Te.key,le)}let xe,L=0;const V=B-ne+1;let we=!1,ye=0;const Ae=new Array(V);for(le=0;le<V;le++)Ae[le]=0;for(le=J;le<=S;le++){const Te=E[le];if(L>=V){W(Te,te,he,!0);continue}let Ie;if(Te.key!=null)Ie=fe.get(Te.key);else for(xe=ne;xe<=B;xe++)if(Ae[xe-ne]===0&&Xs(Te,D[xe])){Ie=xe;break}Ie===void 0?W(Te,te,he,!0):(Ae[Ie-ne]=le+1,Ie>=ye?ye=Ie:we=!0,p(Te,D[Ie],j,null,te,he,pe,ae,ge),L++)}const Re=we?fx(Ae):rs;for(xe=Re.length-1,le=V-1;le>=0;le--){const Te=ne+le,Ie=D[Te],Ve=Te+1<T?D[Te+1].el:Z;Ae[le]===0?p(null,Ie,j,Ve,te,he,pe,ae,ge):we&&(xe<0||le!==Re[xe]?be(Ie,j,Ve,2):xe--)}}},be=(E,D,j,Z,te=null)=>{const{el:he,type:pe,transition:ae,children:ge,shapeFlag:le}=E;if(le&6){be(E.component.subTree,D,j,Z);return}if(le&128){E.suspense.move(D,j,Z);return}if(le&64){pe.move(E,D,j,de);return}if(pe===mi){n(he,D,j);for(let S=0;S<ge.length;S++)be(ge[S],D,j,Z);n(E.anchor,D,j);return}if(pe===Tl){_(E,D,j);return}if(Z!==2&&le&1&&ae)if(Z===0)ae.beforeEnter(he),n(he,D,j),$t(()=>ae.enter(he),te);else{const{leave:S,delayLeave:B,afterLeave:J}=ae,ne=()=>n(he,D,j),fe=()=>{S(he,()=>{ne(),J&&J()})};B?B(he,ne,fe):fe()}else n(he,D,j)},W=(E,D,j,Z=!1,te=!1)=>{const{type:he,props:pe,ref:ae,children:ge,dynamicChildren:le,shapeFlag:T,patchFlag:S,dirs:B}=E;if(ae!=null&&Nc(ae,null,j,E,!0),T&256){D.ctx.deactivate(E);return}const J=T&1&&B,ne=!Ra(E);let fe;if(ne&&(fe=pe&&pe.onVnodeBeforeUnmount)&&jn(fe,D,E),T&6)P(E.component,j,Z);else{if(T&128){E.suspense.unmount(j,Z);return}J&&sr(E,null,D,"beforeUnmount"),T&64?E.type.remove(E,D,j,te,de,Z):le&&(he!==mi||S>0&&S&64)?Q(le,D,j,!1,!0):(he===mi&&S&384||!te&&T&16)&&Q(ge,D,j),Z&&ue(E)}(ne&&(fe=pe&&pe.onVnodeUnmounted)||J)&&$t(()=>{fe&&jn(fe,D,E),J&&sr(E,null,D,"unmounted")},j)},ue=E=>{const{type:D,el:j,anchor:Z,transition:te}=E;if(D===mi){me(j,Z);return}if(D===Tl){b(E);return}const he=()=>{i(j),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(E.shapeFlag&1&&te&&!te.persisted){const{leave:pe,delayLeave:ae}=te,ge=()=>pe(j,he);ae?ae(E.el,he,ge):ge()}else he()},me=(E,D)=>{let j;for(;E!==D;)j=f(E),i(E),E=j;i(D)},P=(E,D,j)=>{const{bum:Z,scope:te,update:he,subTree:pe,um:ae}=E;Z&&Ml(Z),te.stop(),he&&(he.active=!1,W(pe,E,D,j)),ae&&$t(ae,D),$t(()=>{E.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},Q=(E,D,j,Z=!1,te=!1,he=0)=>{for(let pe=he;pe<E.length;pe++)W(E[pe],D,j,Z,te)},$=E=>E.shapeFlag&6?$(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el),oe=(E,D,j)=>{E==null?D._vnode&&W(D._vnode,null,null,!0):p(D._vnode||null,E,D,null,null,null,j),Dh(),Wp(),D._vnode=E},de={p,um:W,m:be,r:ue,mt:O,mc:v,pc:z,pbc:I,n:$,o:r};let Se,ve;return e&&([Se,ve]=e(de)),{render:oe,hydrate:Se,createApp:cx(oe,Se)}}function or({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function lm(r,e,t=!1){const n=r.children,i=e.children;if(Fe(n)&&Fe(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Ui(i[s]),a.el=o.el),t||lm(o,a)),a.type===rl&&(a.el=o.el)}}function fx(r){const e=r.slice(),t=[0];let n,i,s,o,a;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,r[t[a]]<c?s=a+1:o=a;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const dx=r=>r.__isTeleport,mi=Symbol(void 0),rl=Symbol(void 0),Eo=Symbol(void 0),Tl=Symbol(void 0),po=[];let Nn=null;function Ou(r=!1){po.push(Nn=r?null:[])}function px(){po.pop(),Nn=po[po.length-1]||null}let Ao=1;function zh(r){Ao+=r}function cm(r){return r.dynamicChildren=Ao>0?Nn||rs:null,px(),Ao>0&&Nn&&Nn.push(r),r}function um(r,e,t,n,i,s){return cm(fm(r,e,t,n,i,s,!0))}function mx(r,e,t,n,i){return cm(fn(r,e,t,n,i,!0))}function Fc(r){return r?r.__v_isVNode===!0:!1}function Xs(r,e){return r.type===e.type&&r.key===e.key}const sl="__vInternal",hm=({key:r})=>r??null,Pa=({ref:r,ref_key:e,ref_for:t})=>r!=null?Lt(r)||Ft(r)||Be(r)?{i:Zn,r,k:e,f:!!t}:r:null;function fm(r,e=null,t=null,n=0,i=null,s=r===mi?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&hm(e),ref:e&&Pa(e),scopeId:qp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Zn};return a?(Nu(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),Ao>0&&!o&&Nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Nn.push(l),l}const fn=gx;function gx(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===$0)&&(r=Eo),Fc(r)){const a=_s(r,e,!0);return t&&Nu(a,t),Ao>0&&!s&&Nn&&(a.shapeFlag&6?Nn[Nn.indexOf(r)]=a:Nn.push(a)),a.patchFlag|=-2,a}if(Ax(r)&&(r=r.__vccOpts),e){e=_x(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=xu(a)),ft(l)&&(Ip(l)&&!Fe(l)&&(l=Kt({},l)),e.style=_u(l))}const o=Lt(r)?1:F0(r)?128:dx(r)?64:ft(r)?4:Be(r)?2:0;return fm(r,e,t,n,i,o,s,!0)}function _x(r){return r?Ip(r)||sl in r?Kt({},r):r:null}function _s(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:o}=r,a=e?vx(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:a,key:a&&hm(a),ref:e&&e.ref?t&&i?Fe(i)?i.concat(Pa(e)):[i,Pa(e)]:Pa(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:o,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==mi?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&_s(r.ssContent),ssFallback:r.ssFallback&&_s(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function xx(r=" ",e=0){return fn(rl,null,r,e)}function qn(r){return r==null||typeof r=="boolean"?fn(Eo):Fe(r)?fn(mi,null,r.slice()):typeof r=="object"?Ui(r):fn(rl,null,String(r))}function Ui(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:_s(r)}function Nu(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Nu(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(sl in e)?e._ctx=Zn:i===3&&Zn&&(Zn.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:Zn},t=32):(e=String(e),n&64?(t=16,e=[xx(e)]):t=8);r.children=e,r.shapeFlag|=t}function vx(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=xu([e.class,n.class]));else if(i==="style")e.style=_u([e.style,n.style]);else if(Za(i)){const s=e[i],o=n[i];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function jn(r,e,t,n=null){kn(r,e,7,[t,n])}const yx=am();let bx=0;function Mx(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||yx,s={uid:bx++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new W_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:im(n,i),emitsOptions:Xp(n,i),emit:null,emitted:null,propsDefaults:st,inheritAttrs:n.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=P0.bind(null,s),r.ce&&r.ce(s),s}let yt=null;const xs=r=>{yt=r,r.scope.on()},wr=()=>{yt&&yt.scope.off(),yt=null};function dm(r){return r.vnode.shapeFlag&4}let Co=!1;function Sx(r,e=!1){Co=e;const{props:t,children:n}=r.vnode,i=dm(r);ix(r,t,i,e),ox(r,n);const s=i?wx(r,e):void 0;return Co=!1,s}function wx(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=Op(new Proxy(r.ctx,Z0));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?Ex(r):null;xs(r),Us();const s=Xi(n,r,0,[r.props,i]);if(ks(),wr(),yp(s)){if(s.then(wr,wr),e)return s.then(o=>{Vh(r,o,e)}).catch(o=>{tl(o,r,0)});r.asyncDep=s}else Vh(r,s,e)}else pm(r,e)}function Vh(r,e,t){Be(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:ft(e)&&(r.setupState=Bp(e)),pm(r,t)}let Gh;function pm(r,e,t){const n=r.type;if(!r.render){if(!e&&Gh&&!n.render){const i=n.template||Du(r).template;if(i){const{isCustomElement:s,compilerOptions:o}=r.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Kt(Kt({isCustomElement:s,delimiters:a},o),l);n.render=Gh(i,c)}}r.render=n.render||Un}xs(r),Us(),Q0(r),ks(),wr()}function Tx(r){return new Proxy(r.attrs,{get(e,t){return rn(r,"get","$attrs"),e[t]}})}function Ex(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=Tx(r))},slots:r.slots,emit:r.emit,expose:e}}function Fu(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(Bp(Op(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in fo)return fo[t](r)},has(e,t){return t in e||t in fo}}))}function Ax(r){return Be(r)&&"__vccOpts"in r}const Sn=(r,e)=>w0(r,e,Co);function mm(r,e,t){const n=arguments.length;return n===2?ft(e)&&!Fe(e)?Fc(e)?fn(r,null,[e]):fn(r,e):fn(r,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Fc(t)&&(t=[t]),fn(r,e,t))}const Cx=Symbol(""),Rx=()=>Mi(Cx),Px="3.2.47",Lx="http://www.w3.org/2000/svg",_r=typeof document<"u"?document:null,Hh=_r&&_r.createElement("template"),Dx={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?_r.createElementNS(Lx,r):_r.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>_r.createTextNode(r),createComment:r=>_r.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>_r.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Hh.innerHTML=n?`<svg>${r}</svg>`:r;const a=Hh.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Ix(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function Ox(r,e,t){const n=r.style,i=Lt(t);if(t&&!i){if(e&&!Lt(e))for(const s in e)t[s]==null&&Uc(n,s,"");for(const s in t)Uc(n,s,t[s])}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const Wh=/\s*!important$/;function Uc(r,e,t){if(Fe(t))t.forEach(n=>Uc(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=Nx(r,e);Wh.test(t)?r.setProperty(Fs(n),t.replace(Wh,""),"important"):r[n]=t}}const jh=["Webkit","Moz","ms"],El={};function Nx(r,e){const t=El[e];if(t)return t;let n=ms(e);if(n!=="filter"&&n in r)return El[e]=n;n=bp(n);for(let i=0;i<jh.length;i++){const s=jh[i]+n;if(s in r)return El[e]=s}return e}const Xh="http://www.w3.org/1999/xlink";function Fx(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(Xh,e.slice(6,e.length)):r.setAttributeNS(Xh,e,t);else{const s=D_(e);t==null||s&&!vp(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function Ux(r,e,t,n,i,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,s),r[e]=t??"";return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t??"";(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=vp(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{r[e]=t}catch{}a&&r.removeAttribute(e)}function kx(r,e,t,n){r.addEventListener(e,t,n)}function Bx(r,e,t,n){r.removeEventListener(e,t,n)}function zx(r,e,t,n,i=null){const s=r._vei||(r._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Vx(e);if(n){const c=s[e]=Wx(n,i);kx(r,a,c,l)}else o&&(Bx(r,a,o,l),s[e]=void 0)}}const qh=/(?:Once|Passive|Capture)$/;function Vx(r){let e;if(qh.test(r)){e={};let n;for(;n=r.match(qh);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Fs(r.slice(2)),e]}let Al=0;const Gx=Promise.resolve(),Hx=()=>Al||(Gx.then(()=>Al=0),Al=Date.now());function Wx(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;kn(jx(n,t.value),e,5,[n])};return t.value=r,t.attached=Hx(),t}function jx(r,e){if(Fe(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const Yh=/^on[a-z]/,Xx=(r,e,t,n,i=!1,s,o,a,l)=>{e==="class"?Ix(r,n,i):e==="style"?Ox(r,t,n):Za(e)?vu(e)||zx(r,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qx(r,e,n,i))?Ux(r,e,n,s,o,a,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),Fx(r,e,n,i))};function qx(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&Yh.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||Yh.test(e)&&Lt(t)?!1:e in r}const Yx=Kt({patchProp:Xx},Dx);let Kh;function Kx(){return Kh||(Kh=ux(Yx))}const $x=(...r)=>{const e=Kx().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=Zx(n);if(!i)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Zx(r){return Lt(r)?document.querySelector(r):r}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qr=typeof window<"u";function Qx(r){return r.__esModule||r[Symbol.toStringTag]==="Module"}const Ze=Object.assign;function Cl(r,e){const t={};for(const n in e){const i=e[n];t[n]=Gn(i)?i.map(r):r(i)}return t}const mo=()=>{},Gn=Array.isArray,Jx=/\/$/,ev=r=>r.replace(Jx,"");function Rl(r,e,t="/"){let n,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=r(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=rv(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:i,hash:o}}function tv(r,e){const t=e.query?r(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function $h(r,e){return!e||!r.toLowerCase().startsWith(e.toLowerCase())?r:r.slice(e.length)||"/"}function nv(r,e,t){const n=e.matched.length-1,i=t.matched.length-1;return n>-1&&n===i&&vs(e.matched[n],t.matched[i])&&gm(e.params,t.params)&&r(e.query)===r(t.query)&&e.hash===t.hash}function vs(r,e){return(r.aliasOf||r)===(e.aliasOf||e)}function gm(r,e){if(Object.keys(r).length!==Object.keys(e).length)return!1;for(const t in r)if(!iv(r[t],e[t]))return!1;return!0}function iv(r,e){return Gn(r)?Zh(r,e):Gn(e)?Zh(e,r):r===e}function Zh(r,e){return Gn(e)?r.length===e.length&&r.every((t,n)=>t===e[n]):r.length===1&&r[0]===e}function rv(r,e){if(r.startsWith("/"))return r;if(!r)return e;const t=e.split("/"),n=r.split("/");let i=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],o!==".")if(o==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var Ro;(function(r){r.pop="pop",r.push="push"})(Ro||(Ro={}));var go;(function(r){r.back="back",r.forward="forward",r.unknown=""})(go||(go={}));function sv(r){if(!r)if(Qr){const e=document.querySelector("base");r=e&&e.getAttribute("href")||"/",r=r.replace(/^\w+:\/\/[^\/]+/,"")}else r="/";return r[0]!=="/"&&r[0]!=="#"&&(r="/"+r),ev(r)}const ov=/^[^#]+#/;function av(r,e){return r.replace(ov,"#")+e}function lv(r,e){const t=document.documentElement.getBoundingClientRect(),n=r.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const ol=()=>({left:window.pageXOffset,top:window.pageYOffset});function cv(r){let e;if("el"in r){const t=r.el,n=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=lv(i,r)}else e=r;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qh(r,e){return(history.state?history.state.position-e:-1)+r}const kc=new Map;function uv(r,e){kc.set(r,e)}function hv(r){const e=kc.get(r);return kc.delete(r),e}let fv=()=>location.protocol+"//"+location.host;function _m(r,e){const{pathname:t,search:n,hash:i}=e,s=r.indexOf("#");if(s>-1){let a=i.includes(r.slice(s))?r.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),$h(l,"")}return $h(t,r)+n+i}function dv(r,e,t,n){let i=[],s=[],o=null;const a=({state:f})=>{const d=_m(r,location),g=t.value,p=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=p?f.position-p.position:0}else n(d);i.forEach(x=>{x(t.value,g,{delta:m,type:Ro.pop,direction:m?m>0?go.forward:go.back:go.unknown})})};function l(){o=t.value}function c(f){i.push(f);const d=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ze({},f.state,{scroll:ol()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Jh(r,e,t,n=!1,i=!1){return{back:r,current:e,forward:t,replaced:n,position:window.history.length,scroll:i?ol():null}}function pv(r){const{history:e,location:t}=window,n={value:_m(r,t)},i={value:e.state};i.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=r.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?r:r.slice(h))+l:fv()+r+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=Ze({},e.state,Jh(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=Ze({},i.value,e.state,{forward:l,scroll:ol()});s(u.current,u,!0);const h=Ze({},Jh(n.value,l,null),{position:u.position+1},c);s(l,h,!1),n.value=l}return{location:n,state:i,push:a,replace:o}}function mv(r){r=sv(r);const e=pv(r),t=dv(r,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=Ze({location:"",base:r,go:n,createHref:av.bind(null,r)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function gv(r){return typeof r=="string"||r&&typeof r=="object"}function xm(r){return typeof r=="string"||typeof r=="symbol"}const Pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vm=Symbol("");var ef;(function(r){r[r.aborted=4]="aborted",r[r.cancelled=8]="cancelled",r[r.duplicated=16]="duplicated"})(ef||(ef={}));function ys(r,e){return Ze(new Error,{type:r,[vm]:!0},e)}function oi(r,e){return r instanceof Error&&vm in r&&(e==null||!!(r.type&e))}const tf="[^/]+?",_v={sensitive:!1,strict:!1,start:!0,end:!0},xv=/[.+*?^${}()[\]/\\]/g;function vv(r,e){const t=Ze({},_v,e),n=[];let i=t.start?"^":"";const s=[];for(const c of r){const u=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(xv,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:p,optional:m,regexp:x}=f;s.push({name:g,repeatable:p,optional:m});const y=x||tf;if(y!==tf){d+=10;try{new RegExp(`(${y})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+b.message)}}let _=p?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),i+=_,d+=20,m&&(d+=-8),p&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=s[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of r){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:p,optional:m}=d,x=g in c?c[g]:"";if(Gn(x)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Gn(x)?x.join("/"):x;if(!y)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function yv(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=e[t]-r[t];if(n)return n;t++}return r.length<e.length?r.length===1&&r[0]===40+40?-1:1:r.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function bv(r,e){let t=0;const n=r.score,i=e.score;for(;t<n.length&&t<i.length;){const s=yv(n[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-n.length)===1){if(nf(n))return 1;if(nf(i))return-1}return i.length-n.length}function nf(r){const e=r[r.length-1];return r.length>0&&e[e.length-1]<0}const Mv={type:0,value:""},Sv=/[a-zA-Z0-9_]/;function wv(r){if(!r)return[[]];if(r==="/")return[[Mv]];if(!r.startsWith("/"))throw new Error(`Invalid path "${r}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<r.length;){if(l=r[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:Sv.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Tv(r,e,t){const n=vv(wv(r.path),t),i=Ze(n,{record:r,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Ev(r,e){const t=[],n=new Map;e=of({strict:!1,end:!0,sensitive:!1},e);function i(u){return n.get(u)}function s(u,h,f){const d=!f,g=Av(u);g.aliasOf=f&&f.record;const p=of(e,u),m=[g];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of _)m.push(Ze({},g,{components:f?f.record.components:g.components,path:b,aliasOf:f?f.record:g}))}let x,y;for(const _ of m){const{path:b}=_;if(h&&b[0]!=="/"){const M=h.record.path,A=M[M.length-1]==="/"?"":"/";_.path=h.record.path+(b&&A+b)}if(x=Tv(_,h,p),f?f.alias.push(x):(y=y||x,y!==x&&y.alias.push(x),d&&u.name&&!sf(x)&&o(u.name)),g.children){const M=g.children;for(let A=0;A<M.length;A++)s(M[A],x,f&&f.children[A])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return y?()=>{o(y)}:mo}function o(u){if(xm(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&bv(u,t[h])>=0&&(u.record.path!==t[h].record.path||!ym(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!sf(u)&&n.set(u.record.name,u)}function c(u,h){let f,d={},g,p;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw ys(1,{location:u});p=f.record.name,d=Ze(rf(h.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&rf(u.params,f.keys.map(y=>y.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=t.find(y=>y.re.test(g)),f&&(d=f.parse(g),p=f.record.name);else{if(f=h.name?n.get(h.name):t.find(y=>y.re.test(h.path)),!f)throw ys(1,{location:u,currentLocation:h});p=f.record.name,d=Ze({},h.params,u.params),g=f.stringify(d)}const m=[];let x=f;for(;x;)m.unshift(x.record),x=x.parent;return{name:p,path:g,params:d,matched:m,meta:Rv(m)}}return r.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function rf(r,e){const t={};for(const n of e)n in r&&(t[n]=r[n]);return t}function Av(r){return{path:r.path,redirect:r.redirect,name:r.name,meta:r.meta||{},aliasOf:void 0,beforeEnter:r.beforeEnter,props:Cv(r),children:r.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in r?r.components||null:r.component&&{default:r.component}}}function Cv(r){const e={},t=r.props||!1;if("component"in r)e.default=t;else for(const n in r.components)e[n]=typeof t=="boolean"?t:t[n];return e}function sf(r){for(;r;){if(r.record.aliasOf)return!0;r=r.parent}return!1}function Rv(r){return r.reduce((e,t)=>Ze(e,t.meta),{})}function of(r,e){const t={};for(const n in r)t[n]=n in e?e[n]:r[n];return t}function ym(r,e){return e.children.some(t=>t===r||ym(r,t))}const bm=/#/g,Pv=/&/g,Lv=/\//g,Dv=/=/g,Iv=/\?/g,Mm=/\+/g,Ov=/%5B/g,Nv=/%5D/g,Sm=/%5E/g,Fv=/%60/g,wm=/%7B/g,Uv=/%7C/g,Tm=/%7D/g,kv=/%20/g;function Uu(r){return encodeURI(""+r).replace(Uv,"|").replace(Ov,"[").replace(Nv,"]")}function Bv(r){return Uu(r).replace(wm,"{").replace(Tm,"}").replace(Sm,"^")}function Bc(r){return Uu(r).replace(Mm,"%2B").replace(kv,"+").replace(bm,"%23").replace(Pv,"%26").replace(Fv,"`").replace(wm,"{").replace(Tm,"}").replace(Sm,"^")}function zv(r){return Bc(r).replace(Dv,"%3D")}function Vv(r){return Uu(r).replace(bm,"%23").replace(Iv,"%3F")}function Gv(r){return r==null?"":Vv(r).replace(Lv,"%2F")}function za(r){try{return decodeURIComponent(""+r)}catch{}return""+r}function Hv(r){const e={};if(r===""||r==="?")return e;const n=(r[0]==="?"?r.slice(1):r).split("&");for(let i=0;i<n.length;++i){const s=n[i].replace(Mm," "),o=s.indexOf("="),a=za(o<0?s:s.slice(0,o)),l=o<0?null:za(s.slice(o+1));if(a in e){let c=e[a];Gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function af(r){let e="";for(let t in r){const n=r[t];if(t=zv(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Gn(n)?n.map(s=>s&&Bc(s)):[n&&Bc(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Wv(r){const e={};for(const t in r){const n=r[t];n!==void 0&&(e[t]=Gn(n)?n.map(i=>i==null?null:""+i):n==null?n:""+n)}return e}const jv=Symbol(""),lf=Symbol(""),ku=Symbol(""),Em=Symbol(""),zc=Symbol("");function qs(){let r=[];function e(n){return r.push(n),()=>{const i=r.indexOf(n);i>-1&&r.splice(i,1)}}function t(){r=[]}return{add:e,list:()=>r,reset:t}}function ki(r,e,t,n,i){const s=n&&(n.enterCallbacks[i]=n.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ys(4,{from:t,to:e})):h instanceof Error?a(h):gv(h)?a(ys(2,{from:e,to:h})):(s&&n.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},c=r.call(n&&n.instances[i],e,t,l);let u=Promise.resolve(c);r.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Pl(r,e,t,n){const i=[];for(const s of r)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Xv(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ki(c,t,n,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Qx(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ki(f,t,n,s,o)()}))}}return i}function Xv(r){return typeof r=="object"||"displayName"in r||"props"in r||"__vccOpts"in r}function cf(r){const e=Mi(ku),t=Mi(Em),n=Sn(()=>e.resolve(Sr(r.to))),i=Sn(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(vs.bind(null,u));if(f>-1)return f;const d=uf(l[c-2]);return c>1&&uf(u)===d&&h[h.length-1].path!==d?h.findIndex(vs.bind(null,l[c-2])):f}),s=Sn(()=>i.value>-1&&$v(t.params,n.value.params)),o=Sn(()=>i.value>-1&&i.value===t.matched.length-1&&gm(t.params,n.value.params));function a(l={}){return Kv(l)?e[Sr(r.replace)?"replace":"push"](Sr(r.to)).catch(mo):Promise.resolve()}return{route:n,href:Sn(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const qv=$p({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cf,setup(r,{slots:e}){const t=Wo(cf(r)),{options:n}=Mi(ku),i=Sn(()=>({[hf(r.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[hf(r.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return r.custom?s:mm("a",{"aria-current":t.isExactActive?r.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),Yv=qv;function Kv(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const e=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return r.preventDefault&&r.preventDefault(),!0}}function $v(r,e){for(const t in e){const n=e[t],i=r[t];if(typeof n=="string"){if(n!==i)return!1}else if(!Gn(i)||i.length!==n.length||n.some((s,o)=>s!==i[o]))return!1}return!0}function uf(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const hf=(r,e,t)=>r??e??t,Zv=$p({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(r,{attrs:e,slots:t}){const n=Mi(zc),i=Sn(()=>r.route||n.value),s=Mi(lf,0),o=Sn(()=>{let c=Sr(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Sn(()=>i.value.matched[o.value]);Aa(lf,Sn(()=>o.value+1)),Aa(jv,a),Aa(zc,i);const l=Up();return Ca(()=>[l.value,a.value,r.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!vs(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=i.value,u=r.name,h=a.value,f=h&&h.components[u];if(!f)return ff(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=mm(f,Ze({},g,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return ff(t.default,{Component:m,route:c})||m}}});function ff(r,e){if(!r)return null;const t=r(e);return t.length===1?t[0]:t}const Am=Zv;function Qv(r){const e=Ev(r.routes,r),t=r.parseQuery||Hv,n=r.stringifyQuery||af,i=r.history,s=qs(),o=qs(),a=qs(),l=y0(Pi);let c=Pi;Qr&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cl.bind(null,P=>""+P),h=Cl.bind(null,Gv),f=Cl.bind(null,za);function d(P,Q){let $,oe;return xm(P)?($=e.getRecordMatcher(P),oe=Q):oe=P,e.addRoute(oe,$)}function g(P){const Q=e.getRecordMatcher(P);Q&&e.removeRoute(Q)}function p(){return e.getRoutes().map(P=>P.record)}function m(P){return!!e.getRecordMatcher(P)}function x(P,Q){if(Q=Ze({},Q||l.value),typeof P=="string"){const E=Rl(t,P,Q.path),D=e.resolve({path:E.path},Q),j=i.createHref(E.fullPath);return Ze(E,D,{params:f(D.params),hash:za(E.hash),redirectedFrom:void 0,href:j})}let $;if("path"in P)$=Ze({},P,{path:Rl(t,P.path,Q.path).path});else{const E=Ze({},P.params);for(const D in E)E[D]==null&&delete E[D];$=Ze({},P,{params:h(P.params)}),Q.params=h(Q.params)}const oe=e.resolve($,Q),de=P.hash||"";oe.params=u(f(oe.params));const Se=tv(n,Ze({},P,{hash:Bv(de),path:oe.path})),ve=i.createHref(Se);return Ze({fullPath:Se,hash:de,query:n===af?Wv(P.query):P.query||{}},oe,{redirectedFrom:void 0,href:ve})}function y(P){return typeof P=="string"?Rl(t,P,l.value.path):Ze({},P)}function _(P,Q){if(c!==P)return ys(8,{from:Q,to:P})}function b(P){return R(P)}function M(P){return b(Ze(y(P),{replace:!0}))}function A(P){const Q=P.matched[P.matched.length-1];if(Q&&Q.redirect){const{redirect:$}=Q;let oe=typeof $=="function"?$(P):$;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=y(oe):{path:oe},oe.params={}),Ze({query:P.query,hash:P.hash,params:"path"in oe?{}:P.params},oe)}}function R(P,Q){const $=c=x(P),oe=l.value,de=P.state,Se=P.force,ve=P.replace===!0,E=A($);if(E)return R(Ze(y(E),{state:typeof E=="object"?Ze({},de,E.state):de,force:Se,replace:ve}),Q||$);const D=$;D.redirectedFrom=Q;let j;return!Se&&nv(n,oe,$)&&(j=ys(16,{to:D,from:oe}),ce(oe,oe,!0,!1)),(j?Promise.resolve(j):w(D,oe)).catch(Z=>oi(Z)?oi(Z,2)?Z:re(Z):q(Z,D,oe)).then(Z=>{if(Z){if(oi(Z,2))return R(Ze({replace:ve},y(Z.to),{state:typeof Z.to=="object"?Ze({},de,Z.to.state):de,force:Se}),Q||D)}else Z=F(D,oe,!0,ve,de);return I(D,oe,Z),Z})}function v(P,Q){const $=_(P,Q);return $?Promise.reject($):Promise.resolve()}function w(P,Q){let $;const[oe,de,Se]=Jv(P,Q);$=Pl(oe.reverse(),"beforeRouteLeave",P,Q);for(const E of oe)E.leaveGuards.forEach(D=>{$.push(ki(D,P,Q))});const ve=v.bind(null,P,Q);return $.push(ve),Nr($).then(()=>{$=[];for(const E of s.list())$.push(ki(E,P,Q));return $.push(ve),Nr($)}).then(()=>{$=Pl(de,"beforeRouteUpdate",P,Q);for(const E of de)E.updateGuards.forEach(D=>{$.push(ki(D,P,Q))});return $.push(ve),Nr($)}).then(()=>{$=[];for(const E of P.matched)if(E.beforeEnter&&!Q.matched.includes(E))if(Gn(E.beforeEnter))for(const D of E.beforeEnter)$.push(ki(D,P,Q));else $.push(ki(E.beforeEnter,P,Q));return $.push(ve),Nr($)}).then(()=>(P.matched.forEach(E=>E.enterCallbacks={}),$=Pl(Se,"beforeRouteEnter",P,Q),$.push(ve),Nr($))).then(()=>{$=[];for(const E of o.list())$.push(ki(E,P,Q));return $.push(ve),Nr($)}).catch(E=>oi(E,8)?E:Promise.reject(E))}function I(P,Q,$){for(const oe of a.list())oe(P,Q,$)}function F(P,Q,$,oe,de){const Se=_(P,Q);if(Se)return Se;const ve=Q===Pi,E=Qr?history.state:{};$&&(oe||ve?i.replace(P.fullPath,Ze({scroll:ve&&E&&E.scroll},de)):i.push(P.fullPath,de)),l.value=P,ce(P,Q,$,ve),re()}let Y;function k(){Y||(Y=i.listen((P,Q,$)=>{if(!me.listening)return;const oe=x(P),de=A(oe);if(de){R(Ze(de,{replace:!0}),oe).catch(mo);return}c=oe;const Se=l.value;Qr&&uv(Qh(Se.fullPath,$.delta),ol()),w(oe,Se).catch(ve=>oi(ve,12)?ve:oi(ve,2)?(R(ve.to,oe).then(E=>{oi(E,20)&&!$.delta&&$.type===Ro.pop&&i.go(-1,!1)}).catch(mo),Promise.reject()):($.delta&&i.go(-$.delta,!1),q(ve,oe,Se))).then(ve=>{ve=ve||F(oe,Se,!1),ve&&($.delta&&!oi(ve,8)?i.go(-$.delta,!1):$.type===Ro.pop&&oi(ve,20)&&i.go(-1,!1)),I(oe,Se,ve)}).catch(mo)}))}let O=qs(),G=qs(),K;function q(P,Q,$){re(P);const oe=G.list();return oe.length?oe.forEach(de=>de(P,Q,$)):console.error(P),Promise.reject(P)}function z(){return K&&l.value!==Pi?Promise.resolve():new Promise((P,Q)=>{O.add([P,Q])})}function re(P){return K||(K=!P,k(),O.list().forEach(([Q,$])=>P?$(P):Q()),O.reset()),P}function ce(P,Q,$,oe){const{scrollBehavior:de}=r;if(!Qr||!de)return Promise.resolve();const Se=!$&&hv(Qh(P.fullPath,0))||(oe||!$)&&history.state&&history.state.scroll||null;return Gp().then(()=>de(P,Q,Se)).then(ve=>ve&&cv(ve)).catch(ve=>q(ve,P,Q))}const be=P=>i.go(P);let W;const ue=new Set,me={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:p,resolve:x,options:r,push:b,replace:M,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:z,install(P){const Q=this;P.component("RouterLink",Yv),P.component("RouterView",Am),P.config.globalProperties.$router=Q,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Sr(l)}),Qr&&!W&&l.value===Pi&&(W=!0,b(i.location).catch(de=>{}));const $={};for(const de in Pi)$[de]=Sn(()=>l.value[de]);P.provide(ku,Q),P.provide(Em,Wo($)),P.provide(zc,l);const oe=P.unmount;ue.add(P),P.unmount=function(){ue.delete(P),ue.size<1&&(c=Pi,Y&&Y(),Y=null,l.value=Pi,W=!1,K=!1),oe()}}};return me}function Nr(r){return r.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Jv(r,e){const t=[],n=[],i=[],s=Math.max(e.matched.length,r.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(r.matched.find(c=>vs(c,a))?n.push(a):t.push(a));const l=r.matched[o];l&&(e.matched.find(c=>vs(c,l))||i.push(l))}return[t,n,i]}const Cm=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},ey={__name:"App",setup(r){return(e,t)=>(Ou(),mx(Sr(Am)))}},ty=Cm(ey,[["__scopeId","data-v-a64cdae0"]]),ny="modulepreload",iy=function(r){return"/"+r},df={},ry=function(e,t,n){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=iy(s),s in df)return;df[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ny,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bu="150",Fr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sy=0,pf=1,oy=2,Rm=1,ay=2,ao=3,Ti=0,dn=1,Tn=2,Jn=0,as=1,Vc=2,mf=3,gf=4,ly=5,Jr=100,cy=101,uy=102,_f=103,xf=104,hy=200,fy=201,dy=202,py=203,Pm=204,Lm=205,my=206,gy=207,_y=208,xy=209,vy=210,yy=0,by=1,My=2,Gc=3,Sy=4,wy=5,Ty=6,Ey=7,Dm=0,Ay=1,Cy=2,Si=0,Ry=1,Py=2,Ly=3,Im=4,Dy=5,Om=300,bs=301,Ms=302,Po=303,Hc=304,al=306,Ss=1e3,Zt=1001,Va=1002,Et=1003,Wc=1004,La=1005,xt=1006,Nm=1007,$i=1008,Rr=1009,Iy=1010,Oy=1011,Fm=1012,Ny=1013,vr=1014,Fn=1015,vi=1016,Fy=1017,Uy=1018,ls=1020,ky=1021,wn=1023,By=1024,zy=1025,Tr=1026,ws=1027,Vy=1028,Gy=1029,Hy=1030,Wy=1031,jy=1033,Ll=33776,Dl=33777,Il=33778,Ol=33779,vf=35840,yf=35841,bf=35842,Mf=35843,Xy=36196,Sf=37492,wf=37496,Tf=37808,Ef=37809,Af=37810,Cf=37811,Rf=37812,Pf=37813,Lf=37814,Df=37815,If=37816,Of=37817,Nf=37818,Ff=37819,Uf=37820,kf=37821,Nl=36492,qy=36283,Bf=36284,zf=36285,Vf=36286,Lo=2300,Ts=2301,Fl=2302,Gf=2400,Hf=2401,Wf=2402,Yy=2500,Ky=0,Um=1,jc=2,Zi=3e3,$e=3001,$y=3200,km=3201,Bm=0,Zy=1,Mn="srgb",Es="srgb-linear",zm="display-p3",Ul=7680,Qy=519,Xc=35044,jf="300 es",qc=1035;class Dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xf=1234567;const _o=Math.PI/180,Do=180/Math.PI;function Bn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function zu(r,e){return(r%e+e)%e}function Jy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function eb(r,e,t){return r!==e?(t-r)/(e-r):0}function xo(r,e,t){return(1-t)*r+t*e}function tb(r,e,t,n){return xo(r,e,1-Math.exp(-t*n))}function nb(r,e=1){return e-Math.abs(zu(r,e*2)-e)}function ib(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function rb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function sb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ob(r,e){return r+Math.random()*(e-r)}function ab(r){return r*(.5-Math.random())}function lb(r){r!==void 0&&(Xf=r);let e=Xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cb(r){return r*_o}function ub(r){return r*Do}function Yc(r){return(r&r-1)===0&&r!==0}function Vm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Gm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hb(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fb={DEG2RAD:_o,RAD2DEG:Do,generateUUID:Bn,clamp:vt,euclideanModulo:zu,mapLinear:Jy,inverseLerp:eb,lerp:xo,damp:tb,pingpong:nb,smoothstep:ib,smootherstep:rb,randInt:sb,randFloat:ob,randFloatSpread:ab,seededRandom:lb,degToRad:cb,radToDeg:ub,isPowerOfTwo:Yc,ceilPowerOfTwo:Vm,floorPowerOfTwo:Gm,setQuaternionFromProperEuler:hb,normalize:tt,denormalize:yi};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],p=i[0],m=i[3],x=i[6],y=i[1],_=i[4],b=i[7],M=i[2],A=i[5],R=i[8];return s[0]=o*p+a*y+l*M,s[3]=o*m+a*_+l*A,s[6]=o*x+a*b+l*R,s[1]=c*p+u*y+h*M,s[4]=c*m+u*_+h*A,s[7]=c*x+u*b+h*R,s[2]=f*p+d*y+g*M,s[5]=f*m+d*_+g*A,s[8]=f*x+d*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new Yt;function Hm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Io(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class ni{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==g){let m=1-a;const x=l*f+c*d+u*g+h*p,y=x>=0?1:-1,_=1-x*x;if(_>Number.EPSILON){const M=Math.sqrt(_),A=Math.atan2(M,x*y);m=Math.sin(m*A)/M,a=Math.sin(a*A)/M}const b=a*y;if(l=l*m+f*b,c=c*m+d*b,u=u*m+g*b,h=h*m+p*b,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new N,qf=new ni;function cs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const db=new Yt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),pb=new Yt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),zi=new N;function mb(r){return r.convertSRGBToLinear(),zi.set(r.r,r.g,r.b).applyMatrix3(pb),r.setRGB(zi.x,zi.y,zi.z)}function gb(r){return zi.set(r.r,r.g,r.b).applyMatrix3(db),r.setRGB(zi.x,zi.y,zi.z).convertLinearToSRGB()}const _b={[Es]:r=>r,[Mn]:r=>r.convertSRGBToLinear(),[zm]:mb},xb={[Es]:r=>r,[Mn]:r=>r.convertLinearToSRGB(),[zm]:gb},Vt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Es},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=_b[e],i=xb[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let kr;class Wm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kr===void 0&&(kr=Io("canvas")),kr.width=e.width,kr.height=e.height;const n=kr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jm{constructor(e=null){this.isSource=!0,this.uuid=Bn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vl(i[o].image)):s.push(Vl(i[o]))}else s=Vl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vb=0;class Pt extends Dr{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Zt,i=Zt,s=xt,o=$i,a=wn,l=Rr,c=Pt.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Bn(),this.name="",this.source=new jm(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Om)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Om;Pt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,b=(d+1)/2,M=(x+1)/2,A=(u+f)/4,R=(h+p)/4,v=(g+m)/4;return _>b&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=A/n,s=R/n):b>M?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=R/s,i=v/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-p)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jt extends Dr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xm extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yb extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ar.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ar)}else n.boundingBox===null&&n.computeBoundingBox(),Gl.copy(n.boundingBox),Gl.applyMatrix4(e.matrixWorld),this.union(Gl);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),ea.subVectors(this.max,Ys),Br.subVectors(e.a,Ys),zr.subVectors(e.b,Ys),Vr.subVectors(e.c,Ys),Li.subVectors(zr,Br),Di.subVectors(Vr,zr),lr.subVectors(Br,Vr);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-lr.z,lr.y,Li.z,0,-Li.x,Di.z,0,-Di.x,lr.z,0,-lr.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-lr.y,lr.x,0];return!Hl(t,Br,zr,Vr,ea)||(t=[1,0,0,0,1,0,0,0,1],!Hl(t,Br,zr,Vr,ea))?!1:(ta.crossVectors(Li,Di),t=[ta.x,ta.y,ta.z],Hl(t,Br,zr,Vr,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new N,new N,new N,new N,new N,new N,new N,new N],ar=new N,Gl=new Bs,Br=new N,zr=new N,Vr=new N,Li=new N,Di=new N,lr=new N,Ys=new N,ea=new N,ta=new N,cr=new N;function Hl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){cr.fromArray(r,s);const a=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),u=n.dot(cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bb=new Bs,Ks=new N,Wl=new N;class zs{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bb.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(Wl)),this.expandByPoint(Ks.copy(e.center).sub(Wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new N,jl=new N,na=new N,Ii=new N,Xl=new N,ia=new N,ql=new N;class ll{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jl.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(jl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(na),a=Ii.dot(this.direction),l=-Ii.dot(na),c=Ii.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(jl).addScaledVector(na,f),d}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),i=li.dot(li)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,i,s){Xl.subVectors(t,e),ia.subVectors(n,e),ql.crossVectors(Xl,ia);let o=this.direction.dot(ql),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(ia.crossVectors(Ii,ia));if(l<0)return null;const c=a*this.direction.dot(Xl.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(ql);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,p,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=d,x[7]=g,x[11]=p,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mb,e,Sb)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Oi.crossVectors(n,ln),Oi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Oi.crossVectors(n,ln)),Oi.normalize(),ra.crossVectors(ln,Oi),i[0]=Oi.x,i[4]=ra.x,i[8]=ln.x,i[1]=Oi.y,i[5]=ra.y,i[9]=ln.y,i[2]=Oi.z,i[6]=ra.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],p=n[6],m=n[10],x=n[14],y=n[3],_=n[7],b=n[11],M=n[15],A=i[0],R=i[4],v=i[8],w=i[12],I=i[1],F=i[5],Y=i[9],k=i[13],O=i[2],G=i[6],K=i[10],q=i[14],z=i[3],re=i[7],ce=i[11],be=i[15];return s[0]=o*A+a*I+l*O+c*z,s[4]=o*R+a*F+l*G+c*re,s[8]=o*v+a*Y+l*K+c*ce,s[12]=o*w+a*k+l*q+c*be,s[1]=u*A+h*I+f*O+d*z,s[5]=u*R+h*F+f*G+d*re,s[9]=u*v+h*Y+f*K+d*ce,s[13]=u*w+h*k+f*q+d*be,s[2]=g*A+p*I+m*O+x*z,s[6]=g*R+p*F+m*G+x*re,s[10]=g*v+p*Y+m*K+x*ce,s[14]=g*w+p*k+m*q+x*be,s[3]=y*A+_*I+b*O+M*z,s[7]=y*R+_*F+b*G+M*re,s[11]=y*v+_*Y+b*K+M*ce,s[15]=y*w+_*k+b*q+M*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],x=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+p*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+x*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],x=e[15],y=h*m*c-p*f*c+p*l*d-a*m*d-h*l*x+a*f*x,_=g*f*c-u*m*c-g*l*d+o*m*d+u*l*x-o*f*x,b=u*p*c-g*h*c+g*a*d-o*p*d-u*a*x+o*h*x,M=g*h*l-u*p*l-g*a*f+o*p*f+u*a*m-o*h*m,A=t*y+n*_+i*b+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(p*f*s-h*m*s-p*i*d+n*m*d+h*i*x-n*f*x)*R,e[2]=(a*m*s-p*l*s+p*i*c-n*m*c-a*i*x+n*l*x)*R,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*R,e[4]=_*R,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*x+t*f*x)*R,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*x-t*l*x)*R,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*R,e[8]=b*R,e[9]=(g*h*s-u*p*s-g*n*d+t*p*d+u*n*x-t*h*x)*R,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*x+t*a*x)*R,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*R,e[12]=M*R,e[13]=(u*p*i-g*h*i+g*n*f-t*p*f-u*n*m+t*h*m)*R,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*m-t*a*m)*R,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,p=o*u,m=o*h,x=a*h,y=l*c,_=l*u,b=l*h,M=n.x,A=n.y,R=n.z;return i[0]=(1-(p+x))*M,i[1]=(d+b)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(d-b)*A,i[5]=(1-(f+x))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+_)*R,i[9]=(m-y)*R,i[10]=(1-(f+p))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gr.set(i[0],i[1],i[2]).length();const o=Gr.set(i[4],i[5],i[6]).length(),a=Gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);const c=1/s,u=1/o,h=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,f=(n+i)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gr=new N,Pn=new Ue,Mb=new N(0,0,0),Sb=new N(1,1,1),Oi=new N,ra=new N,ln=new N,Yf=new Ue,Kf=new ni;class cl{constructor(e=0,t=0,n=0,i=cl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kf.setFromEuler(this),this.setFromQuaternion(Kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cl.DEFAULT_ORDER="XYZ";class Vu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wb=0;const $f=new N,Hr=new ni,ci=new Ue,sa=new N,$s=new N,Tb=new N,Eb=new ni,Zf=new N(1,0,0),Qf=new N(0,1,0),Jf=new N(0,0,1),Ab={type:"added"},ed={type:"removed"};class ot extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new N,t=new cl,n=new ni,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Yt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis(Qf,e)}rotateZ(e){return this.rotateOnAxis(Jf,e)}translateOnAxis(e,t){return $f.copy(e).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis(Qf,e)}translateZ(e){return this.translateOnAxis(Jf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt($s,sa,this.up):ci.lookAt(sa,$s,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Hr.setFromRotationMatrix(ci),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ab)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ed)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ed)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Eb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new N(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new N,ui=new N,Yl=new N,hi=new N,Wr=new N,jr=new N,td=new N,Kl=new N,$l=new N,Zl=new N;class _i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ln.subVectors(i,t),ui.subVectors(n,t),Yl.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot(ui),l=Ln.dot(Yl),c=ui.dot(ui),u=ui.dot(Yl),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,hi),l.set(0,0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),ui.subVectors(e,t),Ln.cross(ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Ln.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return _i.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Wr.subVectors(i,n),jr.subVectors(s,n),Kl.subVectors(e,n);const l=Wr.dot(Kl),c=jr.dot(Kl);if(l<=0&&c<=0)return t.copy(n);$l.subVectors(e,i);const u=Wr.dot($l),h=jr.dot($l);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Wr,o);Zl.subVectors(e,s);const d=Wr.dot(Zl),g=jr.dot(Zl);if(g>=0&&d<=g)return t.copy(s);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(jr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return td.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(td,a);const x=1/(m+p+f);return o=p*x,a=f*x,t.copy(n).addScaledVector(Wr,o).addScaledVector(jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cb=0;class ei extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=as,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Pm,this.blendDst=Lm,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ul,this.stencilZFail=Ul,this.stencilZPass=Ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Ql(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Vt.workingColorSpace){if(e=zu(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ql(o,s,e+1/3),this.g=Ql(o,s,e),this.b=Ql(o,s,e-1/3)}return Vt.toWorkingColorSpace(this,i),this}setStyle(e,t=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Vt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Vt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Vt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Vt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=qm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=zl(e.r),this.g=zl(e.g),this.b=zl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Vt.fromWorkingColorSpace(It.copy(this),e),vt(It.r*255,0,255)<<16^vt(It.g*255,0,255)<<8^vt(It.b*255,0,255)<<0}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,s=It.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Mn){Vt.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Dn),Dn.h+=e,Dn.s+=t,Dn.l+=n,this.setHSL(Dn.h,Dn.s,Dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(oa);const n=xo(Dn.h,oa.h,t),i=xo(Dn.s,oa.s,t),s=xo(Dn.l,oa.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new De;De.NAMES=qm;class bi extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new N,aa=new Pe;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ym extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Km extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zn extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rb=0;const xn=new Ue,Jl=new ot,Xr=new N,cn=new Bs,Zs=new Bs,Tt=new N;class gn extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hm(e)?Km:Ym)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Jl.lookAt(e),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(cn.min,Zs.min),cn.expandByPoint(Tt),Tt.addVectors(cn.max,Zs.max),cn.expandByPoint(Tt)):(cn.expandByPoint(Zs.min),cn.expandByPoint(Zs.max))}cn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(e,c),Tt.add(Xr)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new N,u[I]=new N;const h=new N,f=new N,d=new N,g=new Pe,p=new Pe,m=new Pe,x=new N,y=new N;function _(I,F,Y){h.fromArray(i,I*3),f.fromArray(i,F*3),d.fromArray(i,Y*3),g.fromArray(o,I*2),p.fromArray(o,F*2),m.fromArray(o,Y*2),f.sub(h),d.sub(h),p.sub(g),m.sub(g);const k=1/(p.x*m.y-m.x*p.y);isFinite(k)&&(x.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(k),y.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(k),c[I].add(x),c[F].add(x),c[Y].add(x),u[I].add(y),u[F].add(y),u[Y].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let I=0,F=b.length;I<F;++I){const Y=b[I],k=Y.start,O=Y.count;for(let G=k,K=k+O;G<K;G+=3)_(n[G+0],n[G+1],n[G+2])}const M=new N,A=new N,R=new N,v=new N;function w(I){R.fromArray(s,I*3),v.copy(R);const F=c[I];M.copy(F),M.sub(R.multiplyScalar(R.dot(F))).normalize(),A.crossVectors(v,F);const k=A.dot(u[I])<0?-1:1;l[I*4]=M.x,l[I*4+1]=M.y,l[I*4+2]=M.z,l[I*4+3]=k}for(let I=0,F=b.length;I<F;++I){const Y=b[I],k=Y.start,O=Y.count;for(let G=k,K=k+O;G<K;G+=3)w(n[G+0]),w(n[G+1]),w(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let x=0;x<u;x++)f[g++]=c[d++]}return new At(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new Ue,Xn=new ll,la=new zs,id=new N,Qs=new N,Js=new N,eo=new N,ec=new N,ca=new N,ua=new Pe,ha=new Pe,fa=new Pe,tc=new N,da=new N;class Jt extends ot{constructor(e=new gn,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ec.fromBufferAttribute(h,e),o?ca.addScaledVector(ec,u):ca.addScaledVector(ec.sub(t),u))}t.add(ca)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),Xn.copy(e.ray).recast(e.near),la.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(la,id)===null||Xn.origin.distanceToSquared(id)>(e.far-e.near)**2))||(nd.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(nd),n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=i[p.materialIndex],x=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=x,b=y;_<b;_+=3){const M=a.getX(_),A=a.getX(_+1),R=a.getX(_+2);o=pa(this,m,e,Xn,c,u,M,A,R),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const x=a.getX(p),y=a.getX(p+1),_=a.getX(p+2);o=pa(this,i,e,Xn,c,u,x,y,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=i[p.materialIndex],x=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=x,b=y;_<b;_+=3){const M=_,A=_+1,R=_+2;o=pa(this,m,e,Xn,c,u,M,A,R),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const x=p,y=p+1,_=p+2;o=pa(this,i,e,Xn,c,u,x,y,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Pb(r,e,t,n,i,s,o,a){let l;if(e.side===dn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ti,a),l===null)return null;da.copy(a),da.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:r}}function pa(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Qs),r.getVertexPosition(a,Js),r.getVertexPosition(l,eo);const c=Pb(r,e,t,n,Qs,Js,eo,tc);if(c){i&&(ua.fromBufferAttribute(i,o),ha.fromBufferAttribute(i,a),fa.fromBufferAttribute(i,l),c.uv=_i.getUV(tc,Qs,Js,eo,ua,ha,fa,new Pe)),s&&(ua.fromBufferAttribute(s,o),ha.fromBufferAttribute(s,a),fa.fromBufferAttribute(s,l),c.uv2=_i.getUV(tc,Qs,Js,eo,ua,ha,fa,new Pe));const u={a:o,b:a,c:l,normal:new N,materialIndex:0};_i.getNormal(Qs,Js,eo,u.normal),c.face=u}return c}class Vs extends gn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(h,2));function g(p,m,x,y,_,b,M,A,R,v,w){const I=b/R,F=M/v,Y=b/2,k=M/2,O=A/2,G=R+1,K=v+1;let q=0,z=0;const re=new N;for(let ce=0;ce<K;ce++){const be=ce*F-k;for(let W=0;W<G;W++){const ue=W*I-Y;re[p]=ue*y,re[m]=be*_,re[x]=O,c.push(re.x,re.y,re.z),re[p]=0,re[m]=0,re[x]=A>0?1:-1,u.push(re.x,re.y,re.z),h.push(W/R),h.push(1-ce/v),q+=1}}for(let ce=0;ce<v;ce++)for(let be=0;be<R;be++){const W=f+be+G*ce,ue=f+be+G*(ce+1),me=f+(be+1)+G*(ce+1),P=f+(be+1)+G*ce;l.push(W,ue,P),l.push(ue,me,P),z+=6}a.addGroup(d,z,w),d+=z,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(r){const e={};for(let t=0;t<r.length;t++){const n=As(r[t]);for(const i in n)e[i]=n[i]}return e}function Lb(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $m(r){return r.getRenderTarget()===null&&r.outputEncoding===$e?Mn:Es}const Gu={clone:As,merge:Wt};var Db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ib=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Db,this.fragmentShader=Ib,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=Lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zm extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends Zm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,Yr=1;class Ob extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Xt(qr,Yr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Xt(qr,Yr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Xt(qr,Yr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Xt(qr,Yr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Xt(qr,Yr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Xt(qr,Yr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Si,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Hu extends Pt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nb extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vs(5,5,5),s=new qt({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Jn});s.uniforms.tEquirect.value=t;const o=new Jt(i,s),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=xt),new Ob(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const nc=new N,Fb=new N,Ub=new Yt;class dr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=nc.subVectors(n,t).cross(Fb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(nc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ub.getNormalMatrix(e),i=this.coplanarPoint(nc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new zs,ma=new N;class Wu{constructor(e=new dr,t=new dr,n=new dr,i=new dr,s=new dr,o=new dr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],p=n[11],m=n[12],x=n[13],y=n[14],_=n[15];return t[0].setComponents(a-i,h-l,p-f,_-m).normalize(),t[1].setComponents(a+i,h+l,p+f,_+m).normalize(),t[2].setComponents(a+s,h+c,p+d,_+x).normalize(),t[3].setComponents(a-s,h-c,p-d,_-x).normalize(),t[4].setComponents(a-o,h-u,p-g,_-y).normalize(),t[5].setComponents(a+o,h+u,p+g,_+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ma.x=i.normal.x>0?e.max.x:e.min.x,ma.y=i.normal.y>0?e.max.y:e.min.y,ma.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function kb(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;r.bindBuffer(h,c),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class ju extends gn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],p=[],m=[];for(let x=0;x<u;x++){const y=x*f-o;for(let _=0;_<c;_++){const b=_*h-s;g.push(b,-y,0),p.push(0,0,1),m.push(_/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<a;y++){const _=y+c*x,b=y+c*(x+1),M=y+1+c*(x+1),A=y+1+c*x;d.push(_,b,A),d.push(b,M,A)}this.setIndex(d),this.setAttribute("position",new zn(g,3)),this.setAttribute("normal",new zn(p,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jb="vec3 transformed = vec3( position );",Xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Yb=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Kb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rM=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,sM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,oM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hM="gl_FragColor = linearToOutputTexel( gl_FragColor );",fM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MM=`#ifdef USE_GRADIENTMAP
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
}`,SM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,CM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,OM=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,NM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,kM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KM=`#ifdef USE_MORPHNORMALS
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
#endif`,$M=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`#ifdef USE_MORPHTARGETS
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
#endif`,QM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,JM=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,oS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,aS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,uS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vS=`float getShadowMask() {
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
}`,yS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,MS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SS=`#ifdef USE_SKINNING
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
#endif`,wS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ES=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,RS=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,PS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,LS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,DS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,IS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,OS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,NS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,FS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const US=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,HS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,WS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,XS=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$S=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ew=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,nw=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,sw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ow=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,lw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,uw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,fw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,pw=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,mw=`uniform float rotation;
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
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:Bb,alphamap_pars_fragment:zb,alphatest_fragment:Vb,alphatest_pars_fragment:Gb,aomap_fragment:Hb,aomap_pars_fragment:Wb,begin_vertex:jb,beginnormal_vertex:Xb,bsdfs:qb,iridescence_fragment:Yb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:$b,clipping_planes_pars_fragment:Zb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:Jb,color_fragment:eM,color_pars_fragment:tM,color_pars_vertex:nM,color_vertex:iM,common:rM,cube_uv_reflection_fragment:sM,defaultnormal_vertex:oM,displacementmap_pars_vertex:aM,displacementmap_vertex:lM,emissivemap_fragment:cM,emissivemap_pars_fragment:uM,encodings_fragment:hM,encodings_pars_fragment:fM,envmap_fragment:dM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:CM,envmap_vertex:_M,fog_vertex:xM,fog_pars_vertex:vM,fog_fragment:yM,fog_pars_fragment:bM,gradientmap_pars_fragment:MM,lightmap_fragment:SM,lightmap_pars_fragment:wM,lights_lambert_fragment:TM,lights_lambert_pars_fragment:EM,lights_pars_begin:AM,lights_toon_fragment:RM,lights_toon_pars_fragment:PM,lights_phong_fragment:LM,lights_phong_pars_fragment:DM,lights_physical_fragment:IM,lights_physical_pars_fragment:OM,lights_fragment_begin:NM,lights_fragment_maps:FM,lights_fragment_end:UM,logdepthbuf_fragment:kM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:VM,map_fragment:GM,map_pars_fragment:HM,map_particle_fragment:WM,map_particle_pars_fragment:jM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:qM,morphcolor_vertex:YM,morphnormal_vertex:KM,morphtarget_pars_vertex:$M,morphtarget_vertex:ZM,normal_fragment_begin:QM,normal_fragment_maps:JM,normal_pars_fragment:eS,normal_pars_vertex:tS,normal_vertex:nS,normalmap_pars_fragment:iS,clearcoat_normal_fragment_begin:rS,clearcoat_normal_fragment_maps:sS,clearcoat_pars_fragment:oS,iridescence_pars_fragment:aS,output_fragment:lS,packing:cS,premultiplied_alpha_fragment:uS,project_vertex:hS,dithering_fragment:fS,dithering_pars_fragment:dS,roughnessmap_fragment:pS,roughnessmap_pars_fragment:mS,shadowmap_pars_fragment:gS,shadowmap_pars_vertex:_S,shadowmap_vertex:xS,shadowmask_pars_fragment:vS,skinbase_vertex:yS,skinning_pars_vertex:bS,skinning_vertex:MS,skinnormal_vertex:SS,specularmap_fragment:wS,specularmap_pars_fragment:TS,tonemapping_fragment:ES,tonemapping_pars_fragment:AS,transmission_fragment:CS,transmission_pars_fragment:RS,uv_pars_fragment:PS,uv_pars_vertex:LS,uv_vertex:DS,uv2_pars_fragment:IS,uv2_pars_vertex:OS,uv2_vertex:NS,worldpos_vertex:FS,background_vert:US,background_frag:kS,backgroundCube_vert:BS,backgroundCube_frag:zS,cube_vert:VS,cube_frag:GS,depth_vert:HS,depth_frag:WS,distanceRGBA_vert:jS,distanceRGBA_frag:XS,equirect_vert:qS,equirect_frag:YS,linedashed_vert:KS,linedashed_frag:$S,meshbasic_vert:ZS,meshbasic_frag:QS,meshlambert_vert:JS,meshlambert_frag:ew,meshmatcap_vert:tw,meshmatcap_frag:nw,meshnormal_vert:iw,meshnormal_frag:rw,meshphong_vert:sw,meshphong_frag:ow,meshphysical_vert:aw,meshphysical_frag:lw,meshtoon_vert:cw,meshtoon_frag:uw,points_vert:hw,points_frag:fw,shadow_vert:dw,shadow_frag:pw,sprite_vert:mw,sprite_frag:gw},Me={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Yt},uv2Transform:{value:new Yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}}},Yn={basic:{uniforms:Wt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Wt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new De(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Wt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Wt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Wt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new De(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Wt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Wt([Me.points,Me.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Wt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Wt([Me.common,Me.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Wt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Wt([Me.sprite,Me.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Wt([Me.common,Me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Wt([Me.lights,Me.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Yn.physical={uniforms:Wt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ga={r:0,b:0,g:0};function _w(r,e,t,n,i,s,o){const a=new De(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(m,x){let y=!1,_=x.isScene===!0?x.background:null;_&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_));const b=r.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===al)?(u===void 0&&(u=new Jt(new Vs(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:As(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_.encoding!==$e,(h!==_||f!==_.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Jt(new ju(2,2),new qt({name:"BackgroundMaterial",uniforms:As(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=_.encoding!==$e,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,x){m.getRGB(ga,$m(r)),n.buffers.color.setClear(ga.r,ga.g,ga.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function xw(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(O,G,K,q,z){let re=!1;if(o){const ce=p(q,K,G);c!==ce&&(c=ce,d(c.object)),re=x(O,q,K,z),re&&y(O,q,K,z)}else{const ce=G.wireframe===!0;(c.geometry!==q.id||c.program!==K.id||c.wireframe!==ce)&&(c.geometry=q.id,c.program=K.id,c.wireframe=ce,re=!0)}z!==null&&t.update(z,34963),(re||u)&&(u=!1,v(O,G,K,q),z!==null&&r.bindBuffer(34963,t.get(z).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,G,K){const q=K.wireframe===!0;let z=a[O.id];z===void 0&&(z={},a[O.id]=z);let re=z[G.id];re===void 0&&(re={},z[G.id]=re);let ce=re[q];return ce===void 0&&(ce=m(f()),re[q]=ce),ce}function m(O){const G=[],K=[],q=[];for(let z=0;z<i;z++)G[z]=0,K[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:q,object:O,attributes:{},index:null}}function x(O,G,K,q){const z=c.attributes,re=G.attributes;let ce=0;const be=K.getAttributes();for(const W in be)if(be[W].location>=0){const me=z[W];let P=re[W];if(P===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(P=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(P=O.instanceColor)),me===void 0||me.attribute!==P||P&&me.data!==P.data)return!0;ce++}return c.attributesNum!==ce||c.index!==q}function y(O,G,K,q){const z={},re=G.attributes;let ce=0;const be=K.getAttributes();for(const W in be)if(be[W].location>=0){let me=re[W];me===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(me=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(me=O.instanceColor));const P={};P.attribute=me,me&&me.data&&(P.data=me.data),z[W]=P,ce++}c.attributes=z,c.attributesNum=ce,c.index=q}function _(){const O=c.newAttributes;for(let G=0,K=O.length;G<K;G++)O[G]=0}function b(O){M(O,0)}function M(O,G){const K=c.newAttributes,q=c.enabledAttributes,z=c.attributeDivisors;K[O]=1,q[O]===0&&(r.enableVertexAttribArray(O),q[O]=1),z[O]!==G&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,G),z[O]=G)}function A(){const O=c.newAttributes,G=c.enabledAttributes;for(let K=0,q=G.length;K<q;K++)G[K]!==O[K]&&(r.disableVertexAttribArray(K),G[K]=0)}function R(O,G,K,q,z,re){n.isWebGL2===!0&&(K===5124||K===5125)?r.vertexAttribIPointer(O,G,K,z,re):r.vertexAttribPointer(O,G,K,q,z,re)}function v(O,G,K,q){if(n.isWebGL2===!1&&(O.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const z=q.attributes,re=K.getAttributes(),ce=G.defaultAttributeValues;for(const be in re){const W=re[be];if(W.location>=0){let ue=z[be];if(ue===void 0&&(be==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),be==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ue!==void 0){const me=ue.normalized,P=ue.itemSize,Q=t.get(ue);if(Q===void 0)continue;const $=Q.buffer,oe=Q.type,de=Q.bytesPerElement;if(ue.isInterleavedBufferAttribute){const Se=ue.data,ve=Se.stride,E=ue.offset;if(Se.isInstancedInterleavedBuffer){for(let D=0;D<W.locationSize;D++)M(W.location+D,Se.meshPerAttribute);O.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let D=0;D<W.locationSize;D++)b(W.location+D);r.bindBuffer(34962,$);for(let D=0;D<W.locationSize;D++)R(W.location+D,P/W.locationSize,oe,me,ve*de,(E+P/W.locationSize*D)*de)}else{if(ue.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)M(W.location+Se,ue.meshPerAttribute);O.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Se=0;Se<W.locationSize;Se++)b(W.location+Se);r.bindBuffer(34962,$);for(let Se=0;Se<W.locationSize;Se++)R(W.location+Se,P/W.locationSize,oe,me,P*de,P/W.locationSize*Se*de)}}else if(ce!==void 0){const me=ce[be];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(W.location,me);break;case 3:r.vertexAttrib3fv(W.location,me);break;case 4:r.vertexAttrib4fv(W.location,me);break;default:r.vertexAttrib1fv(W.location,me)}}}}A()}function w(){Y();for(const O in a){const G=a[O];for(const K in G){const q=G[K];for(const z in q)g(q[z].object),delete q[z];delete G[K]}delete a[O]}}function I(O){if(a[O.id]===void 0)return;const G=a[O.id];for(const K in G){const q=G[K];for(const z in q)g(q[z].object),delete q[z];delete G[K]}delete a[O.id]}function F(O){for(const G in a){const K=a[G];if(K[O.id]===void 0)continue;const q=K[O.id];for(const z in q)g(q[z].object),delete q[z];delete K[O.id]}}function Y(){k(),u=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:k,dispose:w,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:b,disableUnusedAttributes:A}}function vw(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function yw(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),d=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),m=r.getParameter(36347),x=r.getParameter(36348),y=r.getParameter(36349),_=f>0,b=o||e.has("OES_texture_float"),M=_&&b,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:A}}function bw(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new dr,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,x=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,_=y*4;let b=x.clippingState||null;l.value=b,b=u(g,f,_,d);for(let M=0;M!==_;++M)b[M]=t[M];x.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const x=d+p*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<x)&&(m=new Float32Array(x));for(let _=0,b=d;_!==p;++_,b+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Mw(r){let e=new WeakMap;function t(o,a){return a===Po?o.mapping=bs:a===Hc&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Po||a===Hc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nb(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ul extends Zm{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,rd=[.125,.215,.35,.446,.526,.582],xr=20,ic=new ul,sd=new De;let rc=null;const pr=(1+Math.sqrt(5))/2,$r=1/pr,od=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,pr,$r),new N(0,pr,-$r),new N($r,0,pr),new N(-$r,0,pr),new N(pr,$r,0),new N(-pr,$r,0)];class ad{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){rc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rc),e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:vi,format:wn,encoding:Zi,depthBuffer:!1},i=ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sw(s)),this._blurMaterial=ww(s,e,t)}return i}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,ic)}_sceneToCubeUV(e,t,n,i){const a=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(sd),u.toneMapping=Si,u.autoClear=!1;const d=new bi({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new Jt(new Vs,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(sd),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):y===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const _=this._cubeSize;_a(i,y*_,x>2?_:0,_,_),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bs||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_a(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ic)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=od[(i-1)%od.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*xr-1),p=s/g,m=isFinite(s)?1+Math.floor(u*p):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const x=[];let y=0;for(let R=0;R<xr;++R){const v=R/p,w=Math.exp(-v*v/2);x.push(w),R===0?y+=w:R<m&&(y+=2*w)}for(let R=0;R<x.length;R++)x[R]=x[R]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const b=this._sizeLods[i],M=3*b*(i>_-ts?i-_+ts:0),A=4*(this._cubeSize-b);_a(t,M,A,3*b,2*b),l.setRenderTarget(t),l.render(h,ic)}}function Sw(r){const e=[],t=[],n=[];let i=r;const s=r-ts+1+rd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ts?l=rd[o-r+ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,p=3,m=2,x=1,y=new Float32Array(p*g*d),_=new Float32Array(m*g*d),b=new Float32Array(x*g*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,v=A>2?0:-1,w=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];y.set(w,p*g*A),_.set(f,m*g*A);const I=[A,A,A,A,A,A];b.set(I,x*g*A)}const M=new gn;M.setAttribute("position",new At(y,p)),M.setAttribute("uv",new At(_,m)),M.setAttribute("faceIndex",new At(b,x)),e.push(M),i>ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ld(r,e,t){const n=new jt(r,e,t);return n.texture.mapping=al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ww(r,e,t){const n=new Float32Array(xr),i=new N(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function cd(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ud(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Xu(){return`

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
	`}function Tw(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Po||l===Hc,u=l===bs||l===Ms;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ad(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ad(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ew(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Aw(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,x=p.length;m<x;m++)e.update(p[m],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const y=d.array;p=d.version;for(let _=0,b=y.length;_<b;_+=3){const M=y[_+0],A=y[_+1],R=y[_+2];f.push(M,A,A,R,R,M)}}else{const y=g.array;p=g.version;for(let _=0,b=y.length/3-1;_<b;_+=3){const M=_+0,A=_+1,R=_+2;f.push(M,A,A,R,R,M)}}const m=new(Hm(f)?Km:Ym)(f,1);m.version=p;const x=s.get(h);x&&e.remove(x),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Cw(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){r.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Rw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pw(r,e){return r[0]-e[0]}function Lw(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Dw(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new it,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let O=function(){Y.dispose(),s.delete(u),u.removeEventListener("dispose",O)};p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let v=0;y===!0&&(v=1),_===!0&&(v=2),b===!0&&(v=3);let w=u.attributes.position.count*v,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const F=new Float32Array(w*I*4*g),Y=new Xm(F,w,I,g);Y.type=Fn,Y.needsUpdate=!0;const k=v*4;for(let G=0;G<g;G++){const K=M[G],q=A[G],z=R[G],re=w*I*4*G;for(let ce=0;ce<K.count;ce++){const be=ce*k;y===!0&&(o.fromBufferAttribute(K,ce),F[re+be+0]=o.x,F[re+be+1]=o.y,F[re+be+2]=o.z,F[re+be+3]=0),_===!0&&(o.fromBufferAttribute(q,ce),F[re+be+4]=o.x,F[re+be+5]=o.y,F[re+be+6]=o.z,F[re+be+7]=0),b===!0&&(o.fromBufferAttribute(z,ce),F[re+be+8]=o.x,F[re+be+9]=o.y,F[re+be+10]=o.z,F[re+be+11]=z.itemSize===4?o.w:1)}}p={count:g,texture:Y,size:new Pe(w,I)},s.set(u,p),u.addEventListener("dispose",O)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];const x=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const d=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<d;_++){const b=g[_];b[0]=_,b[1]=f[_]}g.sort(Lw);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Pw);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const b=a[_],M=b[0],A=b[1];M!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+_)!==p[M]&&u.setAttribute("morphTarget"+_,p[M]),m&&u.getAttribute("morphNormal"+_)!==m[M]&&u.setAttribute("morphNormal"+_,m[M]),i[_]=A,x+=A):(p&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const y=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Iw(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Jm=new Pt,eg=new Xm,tg=new yb,ng=new Hu,hd=[],fd=[],dd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function Gs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=hd[i];if(s===void 0&&(s=new Float32Array(i),hd[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function hl(r,e){let t=fd[e];t===void 0&&(t=new Int32Array(e),fd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ow(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Nw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function Fw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function Uw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function kw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;md.set(n),r.uniformMatrix2fv(this.addr,!1,md),Mt(t,n)}}function Bw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;pd.set(n),r.uniformMatrix3fv(this.addr,!1,pd),Mt(t,n)}}function zw(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;dd.set(n),r.uniformMatrix4fv(this.addr,!1,dd),Mt(t,n)}}function Vw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Gw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function Hw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function Ww(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function jw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Xw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function qw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function Yw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function Kw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Jm,i)}function $w(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tg,i)}function Zw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ng,i)}function Qw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||eg,i)}function Jw(r){switch(r){case 5126:return Ow;case 35664:return Nw;case 35665:return Fw;case 35666:return Uw;case 35674:return kw;case 35675:return Bw;case 35676:return zw;case 5124:case 35670:return Vw;case 35667:case 35671:return Gw;case 35668:case 35672:return Hw;case 35669:case 35673:return Ww;case 5125:return jw;case 36294:return Xw;case 36295:return qw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return $w;case 35680:case 36300:case 36308:case 36293:return Zw;case 36289:case 36303:case 36311:case 36292:return Qw}}function eT(r,e){r.uniform1fv(this.addr,e)}function tT(r,e){const t=Gs(e,this.size,2);r.uniform2fv(this.addr,t)}function nT(r,e){const t=Gs(e,this.size,3);r.uniform3fv(this.addr,t)}function iT(r,e){const t=Gs(e,this.size,4);r.uniform4fv(this.addr,t)}function rT(r,e){const t=Gs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sT(r,e){const t=Gs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function oT(r,e){const t=Gs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function aT(r,e){r.uniform1iv(this.addr,e)}function lT(r,e){r.uniform2iv(this.addr,e)}function cT(r,e){r.uniform3iv(this.addr,e)}function uT(r,e){r.uniform4iv(this.addr,e)}function hT(r,e){r.uniform1uiv(this.addr,e)}function fT(r,e){r.uniform2uiv(this.addr,e)}function dT(r,e){r.uniform3uiv(this.addr,e)}function pT(r,e){r.uniform4uiv(this.addr,e)}function mT(r,e,t){const n=this.cache,i=e.length,s=hl(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Jm,s[o])}function gT(r,e,t){const n=this.cache,i=e.length,s=hl(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||tg,s[o])}function _T(r,e,t){const n=this.cache,i=e.length,s=hl(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ng,s[o])}function xT(r,e,t){const n=this.cache,i=e.length,s=hl(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||eg,s[o])}function vT(r){switch(r){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return sT;case 35676:return oT;case 5124:case 35670:return aT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return hT;case 36294:return fT;case 36295:return dT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return xT}}class yT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Jw(t.type)}}class bT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=vT(t.type)}}class MT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function gd(r,e){r.seq.push(e),r.map[e.id]=e}function ST(r,e,t){const n=r.name,i=n.length;for(sc.lastIndex=0;;){const s=sc.exec(n),o=sc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){gd(t,c===void 0?new yT(a,r,e):new bT(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new MT(a),gd(t,h)),t=h}}}class Da{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);ST(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function _d(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let wT=0;function TT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ET(r){switch(r){case Zi:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function xd(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+TT(r.getShaderSource(e),o)}else return i}function AT(r,e){const t=ET(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function CT(r,e){let t;switch(e){case Ry:t="Linear";break;case Py:t="Reinhard";break;case Ly:t="OptimizedCineon";break;case Im:t="ACESFilmic";break;case Dy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function RT(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lo).join(`
`)}function PT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LT(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function lo(r){return r!==""}function vd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(r){return r.replace(DT,IT)}function IT(r,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Kc(t)}const OT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(r){return r.replace(OT,NT)}function NT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Md(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ay?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ao&&(e="SHADOWMAP_TYPE_VSM"),e}function UT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bs:case Ms:e="ENVMAP_TYPE_CUBE";break;case al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function BT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dm:e="ENVMAP_BLENDING_MULTIPLY";break;case Ay:e="ENVMAP_BLENDING_MIX";break;case Cy:e="ENVMAP_BLENDING_ADD";break}return e}function zT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function VT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=FT(t),c=UT(t),u=kT(t),h=BT(t),f=zT(t),d=t.isWebGL2?"":RT(t),g=PT(s),p=i.createProgram();let m,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(lo).join(`
`),m.length>0&&(m+=`
`),x=[d,g].filter(lo).join(`
`),x.length>0&&(x+=`
`)):(m=[Md(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),x=[d,Md(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Si?CT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,AT("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),o=Kc(o),o=vd(o,t),o=yd(o,t),a=Kc(a),a=vd(a,t),a=yd(a,t),o=bd(o),a=bd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",t.glslVersion===jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=y+m+o,b=y+x+a,M=_d(i,35633,_),A=_d(i,35632,b);if(i.attachShader(p,M),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(M).trim(),F=i.getShaderInfoLog(A).trim();let Y=!0,k=!0;if(i.getProgramParameter(p,35714)===!1){Y=!1;const O=xd(i,M,"vertex"),G=xd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+O+`
`+G)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(I===""||F==="")&&(k=!1);k&&(this.diagnostics={runnable:Y,programLog:w,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:x}})}i.deleteShader(M),i.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new Da(i,p)),R};let v;return this.getAttributes=function(){return v===void 0&&(v=LT(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=wT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=A,this}let GT=0;class HT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new WT(e),t.set(e,n)),n}}class WT{constructor(e){this.id=GT++,this.code=e,this.usedTimes=0}}function jT(r,e,t,n,i,s,o){const a=new Vu,l=new HT,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,w,I,F,Y){const k=F.fog,O=Y.geometry,G=v.isMeshStandardMaterial?F.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),q=K&&K.mapping===al?K.image.height:null,z=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ce=re!==void 0?re.length:0;let be=0;O.morphAttributes.position!==void 0&&(be=1),O.morphAttributes.normal!==void 0&&(be=2),O.morphAttributes.color!==void 0&&(be=3);let W,ue,me,P;if(z){const ve=Yn[z];W=ve.vertexShader,ue=ve.fragmentShader}else W=v.vertexShader,ue=v.fragmentShader,l.update(v),me=l.getVertexShaderID(v),P=l.getFragmentShaderID(v);const Q=r.getRenderTarget(),$=v.alphaTest>0,oe=v.clearcoat>0,de=v.iridescence>0;return{isWebGL2:u,shaderID:z,shaderName:v.type,vertexShader:W,fragmentShader:ue,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:P,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Q===null?r.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:Zi,map:!!v.map,matcap:!!v.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Zy,tangentSpaceNormalMap:v.normalMapType===Bm,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===$e,clearcoat:oe,clearcoatMap:oe&&!!v.clearcoatMap,clearcoatRoughnessMap:oe&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!v.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!v.iridescenceMap,iridescenceThicknessMap:de&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===as,alphaMap:!!v.alphaMap,alphaTest:$,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!O.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!k,useFog:v.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:be,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Si,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Tn,flipSided:v.side===dn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)w.push(I),w.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(w,v),y(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),v.push(a.mask)}function _(v){const w=g[v.type];let I;if(w){const F=Yn[w];I=Gu.clone(F.uniforms)}else I=v.uniforms;return I}function b(v,w){let I;for(let F=0,Y=c.length;F<Y;F++){const k=c[F];if(k.cacheKey===w){I=k,++I.usedTimes;break}}return I===void 0&&(I=new VT(r,w,v,s),c.push(I)),I}function M(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:b,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:R}}function XT(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function qT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Sd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,p,m){let x=r[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},r[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=d,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=p,x.group=m),e++,x}function a(h,f,d,g,p,m){const x=o(h,f,d,g,p,m);d.transmission>0?n.push(x):d.transparent===!0?i.push(x):t.push(x)}function l(h,f,d,g,p,m){const x=o(h,f,d,g,p,m);d.transmission>0?n.unshift(x):d.transparent===!0?i.unshift(x):t.unshift(x)}function c(h,f){t.length>1&&t.sort(h||qT),n.length>1&&n.sort(f||Sd),i.length>1&&i.sort(f||Sd)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function YT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new wd,r.set(n,[o])):i>=s.length?(o=new wd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function KT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new De};break;case"SpotLight":t={position:new N,direction:new N,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function $T(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ZT=0;function QT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function JT(r,e){const t=new KT,n=$T(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,o=new Ue,a=new Ue;function l(u,h){let f=0,d=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,m=0,x=0,y=0,_=0,b=0,M=0,A=0,R=0,v=0;u.sort(QT);const w=h===!0?Math.PI:1;for(let F=0,Y=u.length;F<Y;F++){const k=u[F],O=k.color,G=k.intensity,K=k.distance,q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=O.r*G*w,d+=O.g*G*w,g+=O.b*G*w;else if(k.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(k.sh.coefficients[z],G);else if(k.isDirectionalLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity*w),k.castShadow){const re=k.shadow,ce=n.get(k);ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,i.directionalShadow[p]=ce,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=k.shadow.matrix,b++}i.directional[p]=z,p++}else if(k.isSpotLight){const z=t.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(O).multiplyScalar(G*w),z.distance=K,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,i.spot[x]=z;const re=k.shadow;if(k.map&&(i.spotLightMap[R]=k.map,R++,re.updateMatrices(k),k.castShadow&&v++),i.spotLightMatrix[x]=re.matrix,k.castShadow){const ce=n.get(k);ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,i.spotShadow[x]=ce,i.spotShadowMap[x]=q,A++}x++}else if(k.isRectAreaLight){const z=t.get(k);z.color.copy(O).multiplyScalar(G),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),i.rectArea[y]=z,y++}else if(k.isPointLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity*w),z.distance=k.distance,z.decay=k.decay,k.castShadow){const re=k.shadow,ce=n.get(k);ce.shadowBias=re.bias,ce.shadowNormalBias=re.normalBias,ce.shadowRadius=re.radius,ce.shadowMapSize=re.mapSize,ce.shadowCameraNear=re.camera.near,ce.shadowCameraFar=re.camera.far,i.pointShadow[m]=ce,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=k.shadow.matrix,M++}i.point[m]=z,m++}else if(k.isHemisphereLight){const z=t.get(k);z.skyColor.copy(k.color).multiplyScalar(G*w),z.groundColor.copy(k.groundColor).multiplyScalar(G*w),i.hemi[_]=z,_++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==y||I.hemiLength!==_||I.numDirectionalShadows!==b||I.numPointShadows!==M||I.numSpotShadows!==A||I.numSpotMaps!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=y,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+R-v,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=v,I.directionalLength=p,I.pointLength=m,I.spotLength=x,I.rectAreaLength=y,I.hemiLength=_,I.numDirectionalShadows=b,I.numPointShadows=M,I.numSpotShadows=A,I.numSpotMaps=R,i.version=ZT++)}function c(u,h){let f=0,d=0,g=0,p=0,m=0;const x=h.matrixWorldInverse;for(let y=0,_=u.length;y<_;y++){const b=u[y];if(b.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(b.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),g++}else if(b.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),a.identity(),o.copy(b.matrixWorld),o.premultiply(x),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(x),d++}else if(b.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(x),m++}}}return{setup:l,setupView:c,state:i}}function Td(r,e){const t=new JT(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function e1(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Td(r,e),t.set(s,[l])):o>=a.length?(l=new Td(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ig extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t1 extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i1=`uniform sampler2D shadow_pass;
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
}`;function r1(r,e,t){let n=new Wu;const i=new Pe,s=new Pe,o=new it,a=new ig({depthPacking:km}),l=new t1,c={},u=t.maxTextureSize,h={[Ti]:dn,[dn]:Ti,[Tn]:Tn},f=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:n1,fragmentShader:i1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new gn;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm,this.render=function(b,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const R=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Jn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let F=0,Y=b.length;F<Y;F++){const k=b[F],O=k.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const G=O.getFrameExtents();if(i.multiply(G),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/G.x),i.x=s.x*G.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/G.y),i.y=s.y*G.y,O.mapSize.y=s.y)),O.map===null){const q=this.type!==ao?{minFilter:Et,magFilter:Et}:{};O.map=new jt(i.x,i.y,q),O.map.texture.name=k.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const K=O.getViewportCount();for(let q=0;q<K;q++){const z=O.getViewport(q);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),I.viewport(o),O.updateMatrices(k,q),n=O.getFrustum(),_(M,A,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===ao&&x(O,A),O.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(R,v,w)};function x(b,M){const A=e.update(p);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new jt(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(M,null,A,f,p,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(M,null,A,d,p,null)}function y(b,M,A,R,v,w){let I=null;const F=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)I=F;else if(I=A.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Y=I.uuid,k=M.uuid;let O=c[Y];O===void 0&&(O={},c[Y]=O);let G=O[k];G===void 0&&(G=I.clone(),O[k]=G),I=G}return I.visible=M.visible,I.wireframe=M.wireframe,w===ao?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:h[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.map=M.map,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=R,I.farDistance=v),I}function _(b,M,A,R,v){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===ao)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const F=e.update(b),Y=b.material;if(Array.isArray(Y)){const k=F.groups;for(let O=0,G=k.length;O<G;O++){const K=k[O],q=Y[K.materialIndex];if(q&&q.visible){const z=y(b,q,R,A.near,A.far,v);r.renderBufferDirect(A,null,F,z,b,K)}}}else if(Y.visible){const k=y(b,Y,R,A.near,A.far,v);r.renderBufferDirect(A,null,F,k,b,null)}}const I=b.children;for(let F=0,Y=I.length;F<Y;F++)_(I[F],M,A,R,v)}}function s1(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const ie=new it;let _e=null;const Ee=new it(0,0,0,0);return{setMask:function(Ce){_e!==Ce&&!U&&(r.colorMask(Ce,Ce,Ce,Ce),_e=Ce)},setLocked:function(Ce){U=Ce},setClear:function(Ce,rt,St,Bt,Hn){Hn===!0&&(Ce*=Bt,rt*=Bt,St*=Bt),ie.set(Ce,rt,St,Bt),Ee.equals(ie)===!1&&(r.clearColor(Ce,rt,St,Bt),Ee.copy(ie))},reset:function(){U=!1,_e=null,Ee.set(-1,0,0,0)}}}function s(){let U=!1,ie=null,_e=null,Ee=null;return{setTest:function(Ce){Ce?$(2929):oe(2929)},setMask:function(Ce){ie!==Ce&&!U&&(r.depthMask(Ce),ie=Ce)},setFunc:function(Ce){if(_e!==Ce){switch(Ce){case yy:r.depthFunc(512);break;case by:r.depthFunc(519);break;case My:r.depthFunc(513);break;case Gc:r.depthFunc(515);break;case Sy:r.depthFunc(514);break;case wy:r.depthFunc(518);break;case Ty:r.depthFunc(516);break;case Ey:r.depthFunc(517);break;default:r.depthFunc(515)}_e=Ce}},setLocked:function(Ce){U=Ce},setClear:function(Ce){Ee!==Ce&&(r.clearDepth(Ce),Ee=Ce)},reset:function(){U=!1,ie=null,_e=null,Ee=null}}}function o(){let U=!1,ie=null,_e=null,Ee=null,Ce=null,rt=null,St=null,Bt=null,Hn=null;return{setTest:function(ut){U||(ut?$(2960):oe(2960))},setMask:function(ut){ie!==ut&&!U&&(r.stencilMask(ut),ie=ut)},setFunc:function(ut,_n,Wn){(_e!==ut||Ee!==_n||Ce!==Wn)&&(r.stencilFunc(ut,_n,Wn),_e=ut,Ee=_n,Ce=Wn)},setOp:function(ut,_n,Wn){(rt!==ut||St!==_n||Bt!==Wn)&&(r.stencilOp(ut,_n,Wn),rt=ut,St=_n,Bt=Wn)},setLocked:function(ut){U=ut},setClear:function(ut){Hn!==ut&&(r.clearStencil(ut),Hn=ut)},reset:function(){U=!1,ie=null,_e=null,Ee=null,Ce=null,rt=null,St=null,Bt=null,Hn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,p=[],m=null,x=!1,y=null,_=null,b=null,M=null,A=null,R=null,v=null,w=!1,I=null,F=null,Y=null,k=null,O=null;const G=r.getParameter(35661);let K=!1,q=0;const z=r.getParameter(7938);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=q>=2);let re=null,ce={};const be=r.getParameter(3088),W=r.getParameter(2978),ue=new it().fromArray(be),me=new it().fromArray(W);function P(U,ie,_e){const Ee=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(U,Ce),r.texParameteri(U,10241,9728),r.texParameteri(U,10240,9728);for(let rt=0;rt<_e;rt++)r.texImage2D(ie+rt,0,6408,1,1,0,6408,5121,Ee);return Ce}const Q={};Q[3553]=P(3553,3553,1),Q[34067]=P(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(2929),l.setFunc(Gc),te(!1),he(pf),$(2884),j(Jn);function $(U){f[U]!==!0&&(r.enable(U),f[U]=!0)}function oe(U){f[U]!==!1&&(r.disable(U),f[U]=!1)}function de(U,ie){return d[U]!==ie?(r.bindFramebuffer(U,ie),d[U]=ie,n&&(U===36009&&(d[36160]=ie),U===36160&&(d[36009]=ie)),!0):!1}function Se(U,ie){let _e=p,Ee=!1;if(U)if(_e=g.get(ie),_e===void 0&&(_e=[],g.set(ie,_e)),U.isWebGLMultipleRenderTargets){const Ce=U.texture;if(_e.length!==Ce.length||_e[0]!==36064){for(let rt=0,St=Ce.length;rt<St;rt++)_e[rt]=36064+rt;_e.length=Ce.length,Ee=!0}}else _e[0]!==36064&&(_e[0]=36064,Ee=!0);else _e[0]!==1029&&(_e[0]=1029,Ee=!0);Ee&&(t.isWebGL2?r.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function ve(U){return m!==U?(r.useProgram(U),m=U,!0):!1}const E={[Jr]:32774,[cy]:32778,[uy]:32779};if(n)E[_f]=32775,E[xf]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(E[_f]=U.MIN_EXT,E[xf]=U.MAX_EXT)}const D={[hy]:0,[fy]:1,[dy]:768,[Pm]:770,[vy]:776,[_y]:774,[my]:772,[py]:769,[Lm]:771,[xy]:775,[gy]:773};function j(U,ie,_e,Ee,Ce,rt,St,Bt){if(U===Jn){x===!0&&(oe(3042),x=!1);return}if(x===!1&&($(3042),x=!0),U!==ly){if(U!==y||Bt!==w){if((_!==Jr||A!==Jr)&&(r.blendEquation(32774),_=Jr,A=Jr),Bt)switch(U){case as:r.blendFuncSeparate(1,771,1,771);break;case Vc:r.blendFunc(1,1);break;case mf:r.blendFuncSeparate(0,769,0,1);break;case gf:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case as:r.blendFuncSeparate(770,771,1,771);break;case Vc:r.blendFunc(770,1);break;case mf:r.blendFuncSeparate(0,769,0,1);break;case gf:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,M=null,R=null,v=null,y=U,w=Bt}return}Ce=Ce||ie,rt=rt||_e,St=St||Ee,(ie!==_||Ce!==A)&&(r.blendEquationSeparate(E[ie],E[Ce]),_=ie,A=Ce),(_e!==b||Ee!==M||rt!==R||St!==v)&&(r.blendFuncSeparate(D[_e],D[Ee],D[rt],D[St]),b=_e,M=Ee,R=rt,v=St),y=U,w=!1}function Z(U,ie){U.side===Tn?oe(2884):$(2884);let _e=U.side===dn;ie&&(_e=!_e),te(_e),U.blending===as&&U.transparent===!1?j(Jn):j(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Ee=U.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?$(32926):oe(32926)}function te(U){I!==U&&(U?r.frontFace(2304):r.frontFace(2305),I=U)}function he(U){U!==sy?($(2884),U!==F&&(U===pf?r.cullFace(1029):U===oy?r.cullFace(1028):r.cullFace(1032))):oe(2884),F=U}function pe(U){U!==Y&&(K&&r.lineWidth(U),Y=U)}function ae(U,ie,_e){U?($(32823),(k!==ie||O!==_e)&&(r.polygonOffset(ie,_e),k=ie,O=_e)):oe(32823)}function ge(U){U?$(3089):oe(3089)}function le(U){U===void 0&&(U=33984+G-1),re!==U&&(r.activeTexture(U),re=U)}function T(U,ie,_e){_e===void 0&&(re===null?_e=33984+G-1:_e=re);let Ee=ce[_e];Ee===void 0&&(Ee={type:void 0,texture:void 0},ce[_e]=Ee),(Ee.type!==U||Ee.texture!==ie)&&(re!==_e&&(r.activeTexture(_e),re=_e),r.bindTexture(U,ie||Q[U]),Ee.type=U,Ee.texture=ie)}function S(){const U=ce[re];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function B(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){ue.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function Te(U){me.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),me.copy(U))}function Ie(U,ie){let _e=h.get(ie);_e===void 0&&(_e=new WeakMap,h.set(ie,_e));let Ee=_e.get(U);Ee===void 0&&(Ee=r.getUniformBlockIndex(ie,U.name),_e.set(U,Ee))}function Ve(U,ie){const Ee=h.get(ie).get(U);u.get(ie)!==Ee&&(r.uniformBlockBinding(ie,Ee,U.__bindingPointIndex),u.set(ie,Ee))}function Je(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},re=null,ce={},d={},g=new WeakMap,p=[],m=null,x=!1,y=null,_=null,b=null,M=null,A=null,R=null,v=null,w=!1,I=null,F=null,Y=null,k=null,O=null,ue.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:$,disable:oe,bindFramebuffer:de,drawBuffers:Se,useProgram:ve,setBlending:j,setMaterial:Z,setFlipSided:te,setCullFace:he,setLineWidth:pe,setPolygonOffset:ae,setScissorTest:ge,activeTexture:le,bindTexture:T,unbindTexture:S,compressedTexImage2D:B,compressedTexImage3D:J,texImage2D:ye,texImage3D:Ae,updateUBOMapping:Ie,uniformBlockBinding:Ve,texStorage2D:V,texStorage3D:we,texSubImage2D:ne,texSubImage3D:fe,compressedTexSubImage2D:xe,compressedTexSubImage3D:L,scissor:Re,viewport:Te,reset:Je}}function o1(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,S){return x?new OffscreenCanvas(T,S):Io("canvas")}function _(T,S,B,J){let ne=1;if((T.width>J||T.height>J)&&(ne=J/Math.max(T.width,T.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const fe=S?Gm:Math.floor,xe=fe(ne*T.width),L=fe(ne*T.height);p===void 0&&(p=y(xe,L));const V=B?y(xe,L):p;return V.width=xe,V.height=L,V.getContext("2d").drawImage(T,0,0,xe,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+L+")."),V}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return Yc(T.width)&&Yc(T.height)}function M(T){return a?!1:T.wrapS!==Zt||T.wrapT!==Zt||T.minFilter!==Et&&T.minFilter!==xt}function A(T,S){return T.generateMipmaps&&S&&T.minFilter!==Et&&T.minFilter!==xt}function R(T){r.generateMipmap(T)}function v(T,S,B,J,ne=!1){if(a===!1)return S;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let fe=S;return S===6403&&(B===5126&&(fe=33326),B===5131&&(fe=33325),B===5121&&(fe=33321)),S===33319&&(B===5126&&(fe=33328),B===5131&&(fe=33327),B===5121&&(fe=33323)),S===6408&&(B===5126&&(fe=34836),B===5131&&(fe=34842),B===5121&&(fe=J===$e&&ne===!1?35907:32856),B===32819&&(fe=32854),B===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function w(T,S,B){return A(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==xt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function I(T){return T===Et||T===Wc||T===La?9728:9729}function F(T){const S=T.target;S.removeEventListener("dispose",F),k(S),S.isVideoTexture&&g.delete(S)}function Y(T){const S=T.target;S.removeEventListener("dispose",Y),G(S)}function k(T){const S=n.get(T);if(S.__webglInit===void 0)return;const B=T.source,J=m.get(B);if(J){const ne=J[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(T),Object.keys(J).length===0&&m.delete(B)}n.remove(T)}function O(T){const S=n.get(T);r.deleteTexture(S.__webglTexture);const B=T.source,J=m.get(B);delete J[S.__cacheKey],o.memory.textures--}function G(T){const S=T.texture,B=n.get(T),J=n.get(S);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(B.__webglFramebuffer[ne]),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ne=0;ne<B.__webglColorRenderbuffer.length;ne++)B.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[ne]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,fe=S.length;ne<fe;ne++){const xe=n.get(S[ne]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(T)}let K=0;function q(){K=0}function z(){const T=K;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),K+=1,T}function re(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function ce(T,S){const B=n.get(T);if(T.isVideoTexture&&ge(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,T,S);return}}t.bindTexture(3553,B.__webglTexture,33984+S)}function be(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){oe(B,T,S);return}t.bindTexture(35866,B.__webglTexture,33984+S)}function W(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){oe(B,T,S);return}t.bindTexture(32879,B.__webglTexture,33984+S)}function ue(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){de(B,T,S);return}t.bindTexture(34067,B.__webglTexture,33984+S)}const me={[Ss]:10497,[Zt]:33071,[Va]:33648},P={[Et]:9728,[Wc]:9984,[La]:9986,[xt]:9729,[Nm]:9985,[$i]:9987};function Q(T,S,B){if(B?(r.texParameteri(T,10242,me[S.wrapS]),r.texParameteri(T,10243,me[S.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,me[S.wrapR]),r.texParameteri(T,10240,P[S.magFilter]),r.texParameteri(T,10241,P[S.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(S.wrapS!==Zt||S.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,I(S.magFilter)),r.texParameteri(T,10241,I(S.minFilter)),S.minFilter!==Et&&S.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Et||S.minFilter!==La&&S.minFilter!==$i||S.type===Fn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function $(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",F));const J=S.source;let ne=m.get(J);ne===void 0&&(ne={},m.set(J,ne));const fe=re(S);if(fe!==T.__cacheKey){ne[fe]===void 0&&(ne[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[fe].usedTimes++;const xe=ne[T.__cacheKey];xe!==void 0&&(ne[T.__cacheKey].usedTimes--,xe.usedTimes===0&&O(S)),T.__cacheKey=fe,T.__webglTexture=ne[fe].texture}return B}function oe(T,S,B){let J=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=35866),S.isData3DTexture&&(J=32879);const ne=$(T,S),fe=S.source;t.bindTexture(J,T.__webglTexture,33984+B);const xe=n.get(fe);if(fe.version!==xe.__version||ne===!0){t.activeTexture(33984+B),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const L=M(S)&&b(S.image)===!1;let V=_(S.image,L,!1,u);V=le(S,V);const we=b(V)||a,ye=s.convert(S.format,S.encoding);let Ae=s.convert(S.type),Re=v(S.internalFormat,ye,Ae,S.encoding,S.isVideoTexture);Q(J,S,we);let Te;const Ie=S.mipmaps,Ve=a&&S.isVideoTexture!==!0,Je=xe.__version===void 0||ne===!0,U=w(S,V,we);if(S.isDepthTexture)Re=6402,a?S.type===Fn?Re=36012:S.type===vr?Re=33190:S.type===ls?Re=35056:Re=33189:S.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Tr&&Re===6402&&S.type!==Fm&&S.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=vr,Ae=s.convert(S.type)),S.format===ws&&Re===6402&&(Re=34041,S.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ls,Ae=s.convert(S.type))),Je&&(Ve?t.texStorage2D(3553,1,Re,V.width,V.height):t.texImage2D(3553,0,Re,V.width,V.height,0,ye,Ae,null));else if(S.isDataTexture)if(Ie.length>0&&we){Ve&&Je&&t.texStorage2D(3553,U,Re,Ie[0].width,Ie[0].height);for(let ie=0,_e=Ie.length;ie<_e;ie++)Te=Ie[ie],Ve?t.texSubImage2D(3553,ie,0,0,Te.width,Te.height,ye,Ae,Te.data):t.texImage2D(3553,ie,Re,Te.width,Te.height,0,ye,Ae,Te.data);S.generateMipmaps=!1}else Ve?(Je&&t.texStorage2D(3553,U,Re,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,ye,Ae,V.data)):t.texImage2D(3553,0,Re,V.width,V.height,0,ye,Ae,V.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&Je&&t.texStorage3D(35866,U,Re,Ie[0].width,Ie[0].height,V.depth);for(let ie=0,_e=Ie.length;ie<_e;ie++)Te=Ie[ie],S.format!==wn?ye!==null?Ve?t.compressedTexSubImage3D(35866,ie,0,0,0,Te.width,Te.height,V.depth,ye,Te.data,0,0):t.compressedTexImage3D(35866,ie,Re,Te.width,Te.height,V.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,ie,0,0,0,Te.width,Te.height,V.depth,ye,Ae,Te.data):t.texImage3D(35866,ie,Re,Te.width,Te.height,V.depth,0,ye,Ae,Te.data)}else{Ve&&Je&&t.texStorage2D(3553,U,Re,Ie[0].width,Ie[0].height);for(let ie=0,_e=Ie.length;ie<_e;ie++)Te=Ie[ie],S.format!==wn?ye!==null?Ve?t.compressedTexSubImage2D(3553,ie,0,0,Te.width,Te.height,ye,Te.data):t.compressedTexImage2D(3553,ie,Re,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,ie,0,0,Te.width,Te.height,ye,Ae,Te.data):t.texImage2D(3553,ie,Re,Te.width,Te.height,0,ye,Ae,Te.data)}else if(S.isDataArrayTexture)Ve?(Je&&t.texStorage3D(35866,U,Re,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,ye,Ae,V.data)):t.texImage3D(35866,0,Re,V.width,V.height,V.depth,0,ye,Ae,V.data);else if(S.isData3DTexture)Ve?(Je&&t.texStorage3D(32879,U,Re,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,ye,Ae,V.data)):t.texImage3D(32879,0,Re,V.width,V.height,V.depth,0,ye,Ae,V.data);else if(S.isFramebufferTexture){if(Je)if(Ve)t.texStorage2D(3553,U,Re,V.width,V.height);else{let ie=V.width,_e=V.height;for(let Ee=0;Ee<U;Ee++)t.texImage2D(3553,Ee,Re,ie,_e,0,ye,Ae,null),ie>>=1,_e>>=1}}else if(Ie.length>0&&we){Ve&&Je&&t.texStorage2D(3553,U,Re,Ie[0].width,Ie[0].height);for(let ie=0,_e=Ie.length;ie<_e;ie++)Te=Ie[ie],Ve?t.texSubImage2D(3553,ie,0,0,ye,Ae,Te):t.texImage2D(3553,ie,Re,ye,Ae,Te);S.generateMipmaps=!1}else Ve?(Je&&t.texStorage2D(3553,U,Re,V.width,V.height),t.texSubImage2D(3553,0,0,0,ye,Ae,V)):t.texImage2D(3553,0,Re,ye,Ae,V);A(S,we)&&R(J),xe.__version=fe.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function de(T,S,B){if(S.image.length!==6)return;const J=$(T,S),ne=S.source;t.bindTexture(34067,T.__webglTexture,33984+B);const fe=n.get(ne);if(ne.version!==fe.__version||J===!0){t.activeTexture(33984+B),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,V=[];for(let ie=0;ie<6;ie++)!xe&&!L?V[ie]=_(S.image[ie],!1,!0,c):V[ie]=L?S.image[ie].image:S.image[ie],V[ie]=le(S,V[ie]);const we=V[0],ye=b(we)||a,Ae=s.convert(S.format,S.encoding),Re=s.convert(S.type),Te=v(S.internalFormat,Ae,Re,S.encoding),Ie=a&&S.isVideoTexture!==!0,Ve=fe.__version===void 0||J===!0;let Je=w(S,we,ye);Q(34067,S,ye);let U;if(xe){Ie&&Ve&&t.texStorage2D(34067,Je,Te,we.width,we.height);for(let ie=0;ie<6;ie++){U=V[ie].mipmaps;for(let _e=0;_e<U.length;_e++){const Ee=U[_e];S.format!==wn?Ae!==null?Ie?t.compressedTexSubImage2D(34069+ie,_e,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(34069+ie,_e,Te,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+ie,_e,0,0,Ee.width,Ee.height,Ae,Re,Ee.data):t.texImage2D(34069+ie,_e,Te,Ee.width,Ee.height,0,Ae,Re,Ee.data)}}}else{U=S.mipmaps,Ie&&Ve&&(U.length>0&&Je++,t.texStorage2D(34067,Je,Te,V[0].width,V[0].height));for(let ie=0;ie<6;ie++)if(L){Ie?t.texSubImage2D(34069+ie,0,0,0,V[ie].width,V[ie].height,Ae,Re,V[ie].data):t.texImage2D(34069+ie,0,Te,V[ie].width,V[ie].height,0,Ae,Re,V[ie].data);for(let _e=0;_e<U.length;_e++){const Ce=U[_e].image[ie].image;Ie?t.texSubImage2D(34069+ie,_e+1,0,0,Ce.width,Ce.height,Ae,Re,Ce.data):t.texImage2D(34069+ie,_e+1,Te,Ce.width,Ce.height,0,Ae,Re,Ce.data)}}else{Ie?t.texSubImage2D(34069+ie,0,0,0,Ae,Re,V[ie]):t.texImage2D(34069+ie,0,Te,Ae,Re,V[ie]);for(let _e=0;_e<U.length;_e++){const Ee=U[_e];Ie?t.texSubImage2D(34069+ie,_e+1,0,0,Ae,Re,Ee.image[ie]):t.texImage2D(34069+ie,_e+1,Te,Ae,Re,Ee.image[ie])}}}A(S,ye)&&R(34067),fe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Se(T,S,B,J,ne){const fe=s.convert(B.format,B.encoding),xe=s.convert(B.type),L=v(B.internalFormat,fe,xe,B.encoding);n.get(S).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,L,S.width,S.height,S.depth,0,fe,xe,null):t.texImage2D(ne,0,L,S.width,S.height,0,fe,xe,null)),t.bindFramebuffer(36160,T),ae(S)?f.framebufferTexture2DMultisampleEXT(36160,J,ne,n.get(B).__webglTexture,0,pe(S)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,J,ne,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(T,S,B){if(r.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let J=33189;if(B||ae(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Fn?J=36012:ne.type===vr&&(J=33190));const fe=pe(S);ae(S)?f.renderbufferStorageMultisampleEXT(36161,fe,J,S.width,S.height):r.renderbufferStorageMultisample(36161,fe,J,S.width,S.height)}else r.renderbufferStorage(36161,J,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const J=pe(S);B&&ae(S)===!1?r.renderbufferStorageMultisample(36161,J,35056,S.width,S.height):ae(S)?f.renderbufferStorageMultisampleEXT(36161,J,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const J=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<J.length;ne++){const fe=J[ne],xe=s.convert(fe.format,fe.encoding),L=s.convert(fe.type),V=v(fe.internalFormat,xe,L,fe.encoding),we=pe(S);B&&ae(S)===!1?r.renderbufferStorageMultisample(36161,we,V,S.width,S.height):ae(S)?f.renderbufferStorageMultisampleEXT(36161,we,V,S.width,S.height):r.renderbufferStorage(36161,V,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function E(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ce(S.depthTexture,0);const J=n.get(S.depthTexture).__webglTexture,ne=pe(S);if(S.depthTexture.format===Tr)ae(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,ne):r.framebufferTexture2D(36160,36096,3553,J,0);else if(S.depthTexture.format===ws)ae(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,ne):r.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function D(T){const S=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");E(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=r.createRenderbuffer(),ve(S.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),ve(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function j(T,S,B){const J=n.get(T);S!==void 0&&Se(J.__webglFramebuffer,T,T.texture,36064,3553),B!==void 0&&D(T)}function Z(T){const S=T.texture,B=n.get(T),J=n.get(S);T.addEventListener("dispose",Y),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=S.version,o.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,fe=T.isWebGLMultipleRenderTargets===!0,xe=b(T)||a;if(ne){B.__webglFramebuffer=[];for(let L=0;L<6;L++)B.__webglFramebuffer[L]=r.createFramebuffer()}else{if(B.__webglFramebuffer=r.createFramebuffer(),fe)if(i.drawBuffers){const L=T.texture;for(let V=0,we=L.length;V<we;V++){const ye=n.get(L[V]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ae(T)===!1){const L=fe?S:[S];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let V=0;V<L.length;V++){const we=L[V];B.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(36161,B.__webglColorRenderbuffer[V]);const ye=s.convert(we.format,we.encoding),Ae=s.convert(we.type),Re=v(we.internalFormat,ye,Ae,we.encoding,T.isXRRenderTarget===!0),Te=pe(T);r.renderbufferStorageMultisample(36161,Te,Re,T.width,T.height),r.framebufferRenderbuffer(36160,36064+V,36161,B.__webglColorRenderbuffer[V])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,J.__webglTexture),Q(34067,S,xe);for(let L=0;L<6;L++)Se(B.__webglFramebuffer[L],T,S,36064,34069+L);A(S,xe)&&R(34067),t.unbindTexture()}else if(fe){const L=T.texture;for(let V=0,we=L.length;V<we;V++){const ye=L[V],Ae=n.get(ye);t.bindTexture(3553,Ae.__webglTexture),Q(3553,ye,xe),Se(B.__webglFramebuffer,T,ye,36064+V,3553),A(ye,xe)&&R(3553)}t.unbindTexture()}else{let L=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?L=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,J.__webglTexture),Q(L,S,xe),Se(B.__webglFramebuffer,T,S,36064,L),A(S,xe)&&R(L),t.unbindTexture()}T.depthBuffer&&D(T)}function te(T){const S=b(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,ne=B.length;J<ne;J++){const fe=B[J];if(A(fe,S)){const xe=T.isWebGLCubeRenderTarget?34067:3553,L=n.get(fe).__webglTexture;t.bindTexture(xe,L),R(xe),t.unbindTexture()}}}function he(T){if(a&&T.samples>0&&ae(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,J=T.height;let ne=16384;const fe=[],xe=T.stencilBuffer?33306:36096,L=n.get(T),V=T.isWebGLMultipleRenderTargets===!0;if(V)for(let we=0;we<S.length;we++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let we=0;we<S.length;we++){fe.push(36064+we),T.depthBuffer&&fe.push(xe);const ye=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ye===!1&&(T.depthBuffer&&(ne|=256),T.stencilBuffer&&(ne|=1024)),V&&r.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[we]),ye===!0&&(r.invalidateFramebuffer(36008,[xe]),r.invalidateFramebuffer(36009,[xe])),V){const Ae=n.get(S[we]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ae,0)}r.blitFramebuffer(0,0,B,J,0,0,B,J,ne,9728),d&&r.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let we=0;we<S.length;we++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+we,36161,L.__webglColorRenderbuffer[we]);const ye=n.get(S[we]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+we,3553,ye,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function pe(T){return Math.min(h,T.samples)}function ae(T){const S=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ge(T){const S=o.render.frame;g.get(T)!==S&&(g.set(T,S),T.update())}function le(T,S){const B=T.encoding,J=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===qc||B!==Zi&&(B===$e?a===!1?e.has("EXT_sRGB")===!0&&J===wn?(T.format=qc,T.minFilter=xt,T.generateMipmaps=!1):S=Wm.sRGBToLinear(S):(J!==wn||ne!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),S}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=ce,this.setTexture2DArray=be,this.setTexture3D=W,this.setTextureCube=ue,this.rebindTextures=j,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ae}function a1(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Rr)return 5121;if(s===Fy)return 32819;if(s===Uy)return 32820;if(s===Iy)return 5120;if(s===Oy)return 5122;if(s===Fm)return 5123;if(s===Ny)return 5124;if(s===vr)return 5125;if(s===Fn)return 5126;if(s===vi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ky)return 6406;if(s===wn)return 6408;if(s===By)return 6409;if(s===zy)return 6410;if(s===Tr)return 6402;if(s===ws)return 34041;if(s===qc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Vy)return 6403;if(s===Gy)return 36244;if(s===Hy)return 33319;if(s===Wy)return 33320;if(s===jy)return 36249;if(s===Ll||s===Dl||s===Il||s===Ol)if(o===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ll)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ll)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Il)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ol)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vf||s===yf||s===bf||s===Mf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sf||s===wf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sf)return o===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===wf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Tf||s===Ef||s===Af||s===Cf||s===Rf||s===Pf||s===Lf||s===Df||s===If||s===Of||s===Nf||s===Ff||s===Uf||s===kf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Tf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ef)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Af)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Df)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===If)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Of)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ff)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kf)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Nl)return o===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===qy||s===Bf||s===zf||s===Vf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Nl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ls?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class l1 extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yr extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c1={type:"move"};class oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),x=this._getHandJoint(c,p);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=m.radius),x.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class u1 extends Pt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Tr,u!==Tr&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Tr&&(n=vr),n===void 0&&u===ws&&(n=ls),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1}}class h1 extends Dr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const p=t.getContextAttributes();let m=null,x=null;const y=[],_=[],b=new Set,M=new Map,A=new Xt;A.layers.enable(1),A.viewport=new it;const R=new Xt;R.layers.enable(2),R.viewport=new it;const v=[A,R],w=new l1;w.layers.enable(1),w.layers.enable(2);let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ue=y[W];return ue===void 0&&(ue=new oc,y[W]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(W){let ue=y[W];return ue===void 0&&(ue=new oc,y[W]=ue),ue.getGripSpace()},this.getHand=function(W){let ue=y[W];return ue===void 0&&(ue=new oc,y[W]=ue),ue.getHandSpace()};function Y(W){const ue=_.indexOf(W.inputSource);if(ue===-1)return;const me=y[ue];me!==void 0&&me.dispatchEvent({type:W.type,data:W.inputSource})}function k(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",O);for(let W=0;W<y.length;W++){const ue=_[W];ue!==null&&(_[W]=null,y[W].disconnect(ue))}I=null,F=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,x=null,be.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",k),i.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:d}),x=new jt(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Rr,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let ue=null,me=null,P=null;p.depth&&(P=p.stencil?35056:33190,ue=p.stencil?ws:Tr,me=p.stencil?ls:vr);const Q={colorFormat:32856,depthFormat:P,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Q),i.updateRenderState({layers:[f]}),x=new jt(f.textureWidth,f.textureHeight,{format:wn,type:Rr,depthTexture:new u1(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const $=e.properties.get(x);$.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(W){for(let ue=0;ue<W.removed.length;ue++){const me=W.removed[ue],P=_.indexOf(me);P>=0&&(_[P]=null,y[P].disconnect(me))}for(let ue=0;ue<W.added.length;ue++){const me=W.added[ue];let P=_.indexOf(me);if(P===-1){for(let $=0;$<y.length;$++)if($>=_.length){_.push(me),P=$;break}else if(_[$]===null){_[$]=me,P=$;break}if(P===-1)break}const Q=y[P];Q&&Q.connect(me)}}const G=new N,K=new N;function q(W,ue,me){G.setFromMatrixPosition(ue.matrixWorld),K.setFromMatrixPosition(me.matrixWorld);const P=G.distanceTo(K),Q=ue.projectionMatrix.elements,$=me.projectionMatrix.elements,oe=Q[14]/(Q[10]-1),de=Q[14]/(Q[10]+1),Se=(Q[9]+1)/Q[5],ve=(Q[9]-1)/Q[5],E=(Q[8]-1)/Q[0],D=($[8]+1)/$[0],j=oe*E,Z=oe*D,te=P/(-E+D),he=te*-E;ue.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(he),W.translateZ(te),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const pe=oe+te,ae=de+te,ge=j-he,le=Z+(P-he),T=Se*de/ae*pe,S=ve*de/ae*pe;W.projectionMatrix.makePerspective(ge,le,T,S,pe,ae)}function z(W,ue){ue===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ue.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;w.near=R.near=A.near=W.near,w.far=R.far=A.far=W.far,(I!==w.near||F!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,F=w.far);const ue=W.parent,me=w.cameras;z(w,ue);for(let Q=0;Q<me.length;Q++)z(me[Q],ue);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),W.matrix.copy(w.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const P=W.children;for(let Q=0,$=P.length;Q<$;Q++)P[Q].updateMatrixWorld(!0);me.length===2?q(w,A,R):w.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.getPlanes=function(){return b};let re=null;function ce(W,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const me=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let P=!1;me.length!==w.cameras.length&&(w.cameras.length=0,P=!0);for(let Q=0;Q<me.length;Q++){const $=me[Q];let oe=null;if(d!==null)oe=d.getViewport($);else{const Se=h.getViewSubImage(f,$);oe=Se.viewport,Q===0&&(e.setRenderTargetTextures(x,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(x))}let de=v[Q];de===void 0&&(de=new Xt,de.layers.enable(Q),de.viewport=new it,v[Q]=de),de.matrix.fromArray($.transform.matrix),de.projectionMatrix.fromArray($.projectionMatrix),de.viewport.set(oe.x,oe.y,oe.width,oe.height),Q===0&&w.matrix.copy(de.matrix),P===!0&&w.cameras.push(de)}}for(let me=0;me<y.length;me++){const P=_[me],Q=y[me];P!==null&&Q!==void 0&&Q.update(P,ue,c||o)}if(re&&re(W,ue),ue.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let me=null;for(const P of b)ue.detectedPlanes.has(P)||(me===null&&(me=[]),me.push(P));if(me!==null)for(const P of me)b.delete(P),M.delete(P),n.dispatchEvent({type:"planeremoved",data:P});for(const P of ue.detectedPlanes)if(!b.has(P))b.add(P),M.set(P,ue.lastChangedTime),n.dispatchEvent({type:"planeadded",data:P});else{const Q=M.get(P);P.lastChangedTime>Q&&(M.set(P,P.lastChangedTime),n.dispatchEvent({type:"planechanged",data:P}))}}g=null}const be=new Qm;be.setAnimationLoop(ce),this.setAnimationLoop=function(W){re=W},this.dispose=function(){}}}function f1(r,e){function t(p,m){m.color.getRGB(p.fogColor.value,$m(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,x,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,x,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.iridescenceMap?y=m.iridescenceMap:m.iridescenceThicknessMap?y=m.iridescenceThicknessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let _;m.aoMap?_=m.aoMap:m.lightMap&&(_=m.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===dn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function d1(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(y,_){const b=_.program;n.uniformBlockBinding(y,b)}function c(y,_){let b=i[y.id];b===void 0&&(g(y),b=u(y),i[y.id]=b,y.addEventListener("dispose",m));const M=_.program;n.updateUBOMapping(y,M);const A=e.render.frame;s[y.id]!==A&&(f(y),s[y.id]=A)}function u(y){const _=h();y.__bindingPointIndex=_;const b=r.createBuffer(),M=y.__size,A=y.usage;return r.bindBuffer(35345,b),r.bufferData(35345,M,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,b),b}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=i[y.id],b=y.uniforms,M=y.__cache;r.bindBuffer(35345,_);for(let A=0,R=b.length;A<R;A++){const v=b[A];if(d(v,A,M)===!0){const w=v.__offset,I=Array.isArray(v.value)?v.value:[v.value];let F=0;for(let Y=0;Y<I.length;Y++){const k=I[Y],O=p(k);typeof k=="number"?(v.__data[0]=k,r.bufferSubData(35345,w+F,v.__data)):k.isMatrix3?(v.__data[0]=k.elements[0],v.__data[1]=k.elements[1],v.__data[2]=k.elements[2],v.__data[3]=k.elements[0],v.__data[4]=k.elements[3],v.__data[5]=k.elements[4],v.__data[6]=k.elements[5],v.__data[7]=k.elements[0],v.__data[8]=k.elements[6],v.__data[9]=k.elements[7],v.__data[10]=k.elements[8],v.__data[11]=k.elements[0]):(k.toArray(v.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,w,v.__data)}}r.bindBuffer(35345,null)}function d(y,_,b){const M=y.value;if(b[_]===void 0){if(typeof M=="number")b[_]=M;else{const A=Array.isArray(M)?M:[M],R=[];for(let v=0;v<A.length;v++)R.push(A[v].clone());b[_]=R}return!0}else if(typeof M=="number"){if(b[_]!==M)return b[_]=M,!0}else{const A=Array.isArray(b[_])?b[_]:[b[_]],R=Array.isArray(M)?M:[M];for(let v=0;v<A.length;v++){const w=A[v];if(w.equals(R[v])===!1)return w.copy(R[v]),!0}}return!1}function g(y){const _=y.uniforms;let b=0;const M=16;let A=0;for(let R=0,v=_.length;R<v;R++){const w=_[R],I={boundary:0,storage:0},F=Array.isArray(w.value)?w.value:[w.value];for(let Y=0,k=F.length;Y<k;Y++){const O=F[Y],G=p(O);I.boundary+=G.boundary,I.storage+=G.storage}if(w.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,R>0){A=b%M;const Y=M-A;A!==0&&Y-I.boundary<0&&(b+=M-A,w.__offset=b)}b+=I.storage}return A=b%M,A>0&&(b+=M-A),y.__size=b,y.__cache={},this}function p(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function x(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:x}}function p1(){const r=Io("canvas");return r.style.display="block",r}function qu(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:p1(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zi,this.useLegacyLights=!0,this.toneMapping=Si,this.toneMappingExposure=1;const p=this;let m=!1,x=0,y=0,_=null,b=-1,M=null;const A=new it,R=new it;let v=null,w=e.width,I=e.height,F=1,Y=null,k=null;const O=new it(0,0,w,I),G=new it(0,0,w,I);let K=!1;const q=new Wu;let z=!1,re=!1,ce=null;const be=new Ue,W=new N,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return _===null?F:1}let P=t;function Q(C,X){for(let ee=0;ee<C.length;ee++){const H=C[ee],se=e.getContext(H,X);if(se!==null)return se}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bu}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",Te,!1),P===null){const X=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&X.shift(),P=Q(X,C),P===null)throw Q(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let $,oe,de,Se,ve,E,D,j,Z,te,he,pe,ae,ge,le,T,S,B,J,ne,fe,xe,L,V;function we(){$=new Ew(P),oe=new yw(P,$,r),$.init(oe),xe=new a1(P,$,oe),de=new s1(P,$,oe),Se=new Rw,ve=new XT,E=new o1(P,$,de,ve,oe,xe,Se),D=new Mw(p),j=new Tw(p),Z=new kb(P,oe),L=new xw(P,$,Z,oe),te=new Aw(P,Z,Se,L),he=new Iw(P,te,Z,Se),J=new Dw(P,oe,E),T=new bw(ve),pe=new jT(p,D,j,$,oe,L,T),ae=new f1(p,ve),ge=new YT,le=new e1($,oe),B=new _w(p,D,j,de,he,u,o),S=new r1(p,he,oe),V=new d1(P,Se,oe,de),ne=new vw(P,$,Se,oe),fe=new Cw(P,$,Se,oe),Se.programs=pe.programs,p.capabilities=oe,p.extensions=$,p.properties=ve,p.renderLists=ge,p.shadowMap=S,p.state=de,p.info=Se}we();const ye=new h1(p,P);this.xr=ye,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=$.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=$.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(w,I,!1))},this.getSize=function(C){return C.set(w,I)},this.setSize=function(C,X,ee=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,I=X,e.width=Math.floor(C*F),e.height=Math.floor(X*F),ee===!0&&(e.style.width=C+"px",e.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(w*F,I*F).floor()},this.setDrawingBufferSize=function(C,X,ee){w=C,I=X,F=ee,e.width=Math.floor(C*ee),e.height=Math.floor(X*ee),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,X,ee,H){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,X,ee,H),de.viewport(A.copy(O).multiplyScalar(F).floor())},this.getScissor=function(C){return C.copy(G)},this.setScissor=function(C,X,ee,H){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,X,ee,H),de.scissor(R.copy(G).multiplyScalar(F).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){de.setScissorTest(K=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(C=!0,X=!0,ee=!0){let H=0;C&&(H|=16384),X&&(H|=256),ee&&(H|=1024),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Te,!1),ge.dispose(),le.dispose(),ve.dispose(),D.dispose(),j.dispose(),he.dispose(),L.dispose(),V.dispose(),pe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",_e),ye.removeEventListener("sessionend",Ee),ce&&(ce.dispose(),ce=null),Ce.stop()};function Ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Se.autoReset,X=S.enabled,ee=S.autoUpdate,H=S.needsUpdate,se=S.type;we(),Se.autoReset=C,S.enabled=X,S.autoUpdate=ee,S.needsUpdate=H,S.type=se}function Te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ie(C){const X=C.target;X.removeEventListener("dispose",Ie),Ve(X)}function Ve(C){Je(C),ve.remove(C)}function Je(C){const X=ve.get(C).programs;X!==void 0&&(X.forEach(function(ee){pe.releaseProgram(ee)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ee,H,se,Le){X===null&&(X=ue);const Oe=se.isMesh&&se.matrixWorld.determinant()<0,ke=b_(C,X,ee,H,se);de.setMaterial(H,Oe);let ze=ee.index,Ye=1;H.wireframe===!0&&(ze=te.getWireframeAttribute(ee),Ye=2);const He=ee.drawRange,We=ee.attributes.position;let dt=He.start*Ye,on=(He.start+He.count)*Ye;Le!==null&&(dt=Math.max(dt,Le.start*Ye),on=Math.min(on,(Le.start+Le.count)*Ye)),ze!==null?(dt=Math.max(dt,0),on=Math.min(on,ze.count)):We!=null&&(dt=Math.max(dt,0),on=Math.min(on,We.count));const si=on-dt;if(si<0||si===1/0)return;L.setup(se,H,ke,ee,ze);let nr,pt=ne;if(ze!==null&&(nr=Z.get(ze),pt=fe,pt.setIndex(nr)),se.isMesh)H.wireframe===!0?(de.setLineWidth(H.wireframeLinewidth*me()),pt.setMode(1)):pt.setMode(4);else if(se.isLine){let je=H.linewidth;je===void 0&&(je=1),de.setLineWidth(je*me()),se.isLineSegments?pt.setMode(1):se.isLineLoop?pt.setMode(2):pt.setMode(3)}else se.isPoints?pt.setMode(0):se.isSprite&&pt.setMode(4);if(se.isInstancedMesh)pt.renderInstances(dt,si,se.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,gl=Math.min(ee.instanceCount,je);pt.renderInstances(dt,si,gl)}else pt.render(dt,si)},this.compile=function(C,X){function ee(H,se,Le){H.transparent===!0&&H.side===Tn&&H.forceSinglePass===!1?(H.side=dn,H.needsUpdate=!0,_n(H,se,Le),H.side=Ti,H.needsUpdate=!0,_n(H,se,Le),H.side=Tn):_n(H,se,Le)}f=le.get(C),f.init(),g.push(f),C.traverseVisible(function(H){H.isLight&&H.layers.test(X.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights(p.useLegacyLights),C.traverse(function(H){const se=H.material;if(se)if(Array.isArray(se))for(let Le=0;Le<se.length;Le++){const Oe=se[Le];ee(Oe,C,H)}else ee(se,C,H)}),g.pop(),f=null};let U=null;function ie(C){U&&U(C)}function _e(){Ce.stop()}function Ee(){Ce.start()}const Ce=new Qm;Ce.setAnimationLoop(ie),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(C){U=C,ye.setAnimationLoop(C),C===null?Ce.stop():Ce.start()},ye.addEventListener("sessionstart",_e),ye.addEventListener("sessionend",Ee),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(X),X=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,X,_),f=le.get(C,g.length),f.init(),g.push(f),be.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(be),re=this.localClippingEnabled,z=T.init(this.clippingPlanes,re),h=ge.get(C,d.length),h.init(),d.push(h),rt(C,X,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Y,k),z===!0&&T.beginShadows();const ee=f.state.shadowsArray;if(S.render(ee,C,X),z===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),B.render(h,C),f.setupLights(p.useLegacyLights),X.isArrayCamera){const H=X.cameras;for(let se=0,Le=H.length;se<Le;se++){const Oe=H[se];St(h,C,Oe,Oe.viewport)}}else St(h,C,X);_!==null&&(E.updateMultisampleRenderTarget(_),E.updateRenderTargetMipmap(_)),C.isScene===!0&&C.onAfterRender(p,C,X),L.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function rt(C,X,ee,H){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){H&&W.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const Oe=he.update(C),ke=C.material;ke.visible&&h.push(C,Oe,ke,ee,W.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Se.render.frame&&(C.skeleton.update(),C.skeleton.frame=Se.render.frame),!C.frustumCulled||q.intersectsObject(C))){H&&W.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const Oe=he.update(C),ke=C.material;if(Array.isArray(ke)){const ze=Oe.groups;for(let Ye=0,He=ze.length;Ye<He;Ye++){const We=ze[Ye],dt=ke[We.materialIndex];dt&&dt.visible&&h.push(C,Oe,dt,ee,W.z,We)}}else ke.visible&&h.push(C,Oe,ke,ee,W.z,null)}}const Le=C.children;for(let Oe=0,ke=Le.length;Oe<ke;Oe++)rt(Le[Oe],X,ee,H)}function St(C,X,ee,H){const se=C.opaque,Le=C.transmissive,Oe=C.transparent;f.setupLightsView(ee),z===!0&&T.setGlobalState(p.clippingPlanes,ee),Le.length>0&&Bt(se,X,ee),H&&de.viewport(A.copy(H)),se.length>0&&Hn(se,X,ee),Le.length>0&&Hn(Le,X,ee),Oe.length>0&&Hn(Oe,X,ee),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Bt(C,X,ee){const H=oe.isWebGL2;ce===null&&(ce=new jt(1024,1024,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?vi:Rr,minFilter:$i,samples:H&&s===!0?4:0}));const se=p.getRenderTarget();p.setRenderTarget(ce),p.clear();const Le=p.toneMapping;p.toneMapping=Si,Hn(C,X,ee),p.toneMapping=Le,E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),p.setRenderTarget(se)}function Hn(C,X,ee){const H=X.isScene===!0?X.overrideMaterial:null;for(let se=0,Le=C.length;se<Le;se++){const Oe=C[se],ke=Oe.object,ze=Oe.geometry,Ye=H===null?Oe.material:H,He=Oe.group;ke.layers.test(ee.layers)&&ut(ke,X,ee,ze,Ye,He)}}function ut(C,X,ee,H,se,Le){C.onBeforeRender(p,X,ee,H,se,Le),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(p,X,ee,H,C,Le),se.transparent===!0&&se.side===Tn&&se.forceSinglePass===!1?(se.side=dn,se.needsUpdate=!0,p.renderBufferDirect(ee,X,H,se,C,Le),se.side=Ti,se.needsUpdate=!0,p.renderBufferDirect(ee,X,H,se,C,Le),se.side=Tn):p.renderBufferDirect(ee,X,H,se,C,Le),C.onAfterRender(p,X,ee,H,se,Le)}function _n(C,X,ee){X.isScene!==!0&&(X=ue);const H=ve.get(C),se=f.state.lights,Le=f.state.shadowsArray,Oe=se.state.version,ke=pe.getParameters(C,se.state,Le,X,ee),ze=pe.getProgramCacheKey(ke);let Ye=H.programs;H.environment=C.isMeshStandardMaterial?X.environment:null,H.fog=X.fog,H.envMap=(C.isMeshStandardMaterial?j:D).get(C.envMap||H.environment),Ye===void 0&&(C.addEventListener("dispose",Ie),Ye=new Map,H.programs=Ye);let He=Ye.get(ze);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===Oe)return Wn(C,ke),He}else ke.uniforms=pe.getUniforms(C),C.onBuild(ee,ke,p),C.onBeforeCompile(ke,p),He=pe.acquireProgram(ke,ze),Ye.set(ze,He),H.uniforms=ke.uniforms;const We=H.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=T.uniform),Wn(C,ke),H.needsLights=S_(C),H.lightsStateVersion=Oe,H.needsLights&&(We.ambientLightColor.value=se.state.ambient,We.lightProbe.value=se.state.probe,We.directionalLights.value=se.state.directional,We.directionalLightShadows.value=se.state.directionalShadow,We.spotLights.value=se.state.spot,We.spotLightShadows.value=se.state.spotShadow,We.rectAreaLights.value=se.state.rectArea,We.ltc_1.value=se.state.rectAreaLTC1,We.ltc_2.value=se.state.rectAreaLTC2,We.pointLights.value=se.state.point,We.pointLightShadows.value=se.state.pointShadow,We.hemisphereLights.value=se.state.hemi,We.directionalShadowMap.value=se.state.directionalShadowMap,We.directionalShadowMatrix.value=se.state.directionalShadowMatrix,We.spotShadowMap.value=se.state.spotShadowMap,We.spotLightMatrix.value=se.state.spotLightMatrix,We.spotLightMap.value=se.state.spotLightMap,We.pointShadowMap.value=se.state.pointShadowMap,We.pointShadowMatrix.value=se.state.pointShadowMatrix);const dt=He.getUniforms(),on=Da.seqWithValue(dt.seq,We);return H.currentProgram=He,H.uniformsList=on,He}function Wn(C,X){const ee=ve.get(C);ee.outputEncoding=X.outputEncoding,ee.instancing=X.instancing,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function b_(C,X,ee,H,se){X.isScene!==!0&&(X=ue),E.resetTextureUnits();const Le=X.fog,Oe=H.isMeshStandardMaterial?X.environment:null,ke=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Zi,ze=(H.isMeshStandardMaterial?j:D).get(H.envMap||Oe),Ye=H.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,He=!!H.normalMap&&!!ee.attributes.tangent,We=!!ee.morphAttributes.position,dt=!!ee.morphAttributes.normal,on=!!ee.morphAttributes.color,si=H.toneMapped?p.toneMapping:Si,nr=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,pt=nr!==void 0?nr.length:0,je=ve.get(H),gl=f.state.lights;if(z===!0&&(re===!0||C!==M)){const an=C===M&&H.id===b;T.setState(H,C,an)}let wt=!1;H.version===je.__version?(je.needsLights&&je.lightsStateVersion!==gl.state.version||je.outputEncoding!==ke||se.isInstancedMesh&&je.instancing===!1||!se.isInstancedMesh&&je.instancing===!0||se.isSkinnedMesh&&je.skinning===!1||!se.isSkinnedMesh&&je.skinning===!0||je.envMap!==ze||H.fog===!0&&je.fog!==Le||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==T.numPlanes||je.numIntersection!==T.numIntersection)||je.vertexAlphas!==Ye||je.vertexTangents!==He||je.morphTargets!==We||je.morphNormals!==dt||je.morphColors!==on||je.toneMapping!==si||oe.isWebGL2===!0&&je.morphTargetsCount!==pt)&&(wt=!0):(wt=!0,je.__version=H.version);let ir=je.currentProgram;wt===!0&&(ir=_n(H,X,se));let Mh=!1,js=!1,_l=!1;const zt=ir.getUniforms(),rr=je.uniforms;if(de.useProgram(ir.program)&&(Mh=!0,js=!0,_l=!0),H.id!==b&&(b=H.id,js=!0),Mh||M!==C){if(zt.setValue(P,"projectionMatrix",C.projectionMatrix),oe.logarithmicDepthBuffer&&zt.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,js=!0,_l=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const an=zt.map.cameraPosition;an!==void 0&&an.setValue(P,W.setFromMatrixPosition(C.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&zt.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||se.isSkinnedMesh)&&zt.setValue(P,"viewMatrix",C.matrixWorldInverse)}if(se.isSkinnedMesh){zt.setOptional(P,se,"bindMatrix"),zt.setOptional(P,se,"bindMatrixInverse");const an=se.skeleton;an&&(oe.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),zt.setValue(P,"boneTexture",an.boneTexture,E),zt.setValue(P,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xl=ee.morphAttributes;if((xl.position!==void 0||xl.normal!==void 0||xl.color!==void 0&&oe.isWebGL2===!0)&&J.update(se,ee,ir),(js||je.receiveShadow!==se.receiveShadow)&&(je.receiveShadow=se.receiveShadow,zt.setValue(P,"receiveShadow",se.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(rr.envMap.value=ze,rr.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),js&&(zt.setValue(P,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&M_(rr,_l),Le&&H.fog===!0&&ae.refreshFogUniforms(rr,Le),ae.refreshMaterialUniforms(rr,H,F,I,ce),Da.upload(P,je.uniformsList,rr,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Da.upload(P,je.uniformsList,rr,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&zt.setValue(P,"center",se.center),zt.setValue(P,"modelViewMatrix",se.modelViewMatrix),zt.setValue(P,"normalMatrix",se.normalMatrix),zt.setValue(P,"modelMatrix",se.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const an=H.uniformsGroups;for(let vl=0,w_=an.length;vl<w_;vl++)if(oe.isWebGL2){const Sh=an[vl];V.update(Sh,ir),V.bind(Sh,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function M_(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function S_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(C,X,ee){ve.get(C.texture).__webglTexture=X,ve.get(C.depthTexture).__webglTexture=ee;const H=ve.get(C);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=ee===void 0,H.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const ee=ve.get(C);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ee=0){_=C,x=X,y=ee;let H=!0,se=null,Le=!1,Oe=!1;if(C){const ze=ve.get(C);ze.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),H=!1):ze.__webglFramebuffer===void 0?E.setupRenderTarget(C):ze.__hasExternalTextures&&E.rebindTextures(C,ve.get(C.texture).__webglTexture,ve.get(C.depthTexture).__webglTexture);const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Oe=!0);const He=ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(se=He[X],Le=!0):oe.isWebGL2&&C.samples>0&&E.useMultisampledRTT(C)===!1?se=ve.get(C).__webglMultisampledFramebuffer:se=He,A.copy(C.viewport),R.copy(C.scissor),v=C.scissorTest}else A.copy(O).multiplyScalar(F).floor(),R.copy(G).multiplyScalar(F).floor(),v=K;if(de.bindFramebuffer(36160,se)&&oe.drawBuffers&&H&&de.drawBuffers(C,se),de.viewport(A),de.scissor(R),de.setScissorTest(v),Le){const ze=ve.get(C.texture);P.framebufferTexture2D(36160,36064,34069+X,ze.__webglTexture,ee)}else if(Oe){const ze=ve.get(C.texture),Ye=X||0;P.framebufferTextureLayer(36160,36064,ze.__webglTexture,ee||0,Ye)}b=-1},this.readRenderTargetPixels=function(C,X,ee,H,se,Le,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke){de.bindFramebuffer(36160,ke);try{const ze=C.texture,Ye=ze.format,He=ze.type;if(Ye!==wn&&xe.convert(Ye)!==P.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=He===vi&&($.has("EXT_color_buffer_half_float")||oe.isWebGL2&&$.has("EXT_color_buffer_float"));if(He!==Rr&&xe.convert(He)!==P.getParameter(35738)&&!(He===Fn&&(oe.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-H&&ee>=0&&ee<=C.height-se&&P.readPixels(X,ee,H,se,xe.convert(Ye),xe.convert(He),Le)}finally{const ze=_!==null?ve.get(_).__webglFramebuffer:null;de.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(C,X,ee=0){const H=Math.pow(2,-ee),se=Math.floor(X.image.width*H),Le=Math.floor(X.image.height*H);E.setTexture2D(X,0),P.copyTexSubImage2D(3553,ee,0,0,C.x,C.y,se,Le),de.unbindTexture()},this.copyTextureToTexture=function(C,X,ee,H=0){const se=X.image.width,Le=X.image.height,Oe=xe.convert(ee.format),ke=xe.convert(ee.type);E.setTexture2D(ee,0),P.pixelStorei(37440,ee.flipY),P.pixelStorei(37441,ee.premultiplyAlpha),P.pixelStorei(3317,ee.unpackAlignment),X.isDataTexture?P.texSubImage2D(3553,H,C.x,C.y,se,Le,Oe,ke,X.image.data):X.isCompressedTexture?P.compressedTexSubImage2D(3553,H,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Oe,X.mipmaps[0].data):P.texSubImage2D(3553,H,C.x,C.y,Oe,ke,X.image),H===0&&ee.generateMipmaps&&P.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ee,H,se=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=C.max.x-C.min.x+1,Oe=C.max.y-C.min.y+1,ke=C.max.z-C.min.z+1,ze=xe.convert(H.format),Ye=xe.convert(H.type);let He;if(H.isData3DTexture)E.setTexture3D(H,0),He=32879;else if(H.isDataArrayTexture)E.setTexture2DArray(H,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(37440,H.flipY),P.pixelStorei(37441,H.premultiplyAlpha),P.pixelStorei(3317,H.unpackAlignment);const We=P.getParameter(3314),dt=P.getParameter(32878),on=P.getParameter(3316),si=P.getParameter(3315),nr=P.getParameter(32877),pt=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;P.pixelStorei(3314,pt.width),P.pixelStorei(32878,pt.height),P.pixelStorei(3316,C.min.x),P.pixelStorei(3315,C.min.y),P.pixelStorei(32877,C.min.z),ee.isDataTexture||ee.isData3DTexture?P.texSubImage3D(He,se,X.x,X.y,X.z,Le,Oe,ke,ze,Ye,pt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(He,se,X.x,X.y,X.z,Le,Oe,ke,ze,pt.data)):P.texSubImage3D(He,se,X.x,X.y,X.z,Le,Oe,ke,ze,Ye,pt),P.pixelStorei(3314,We),P.pixelStorei(32878,dt),P.pixelStorei(3316,on),P.pixelStorei(3315,si),P.pixelStorei(32877,nr),se===0&&H.generateMipmaps&&P.generateMipmap(He),de.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),de.unbindTexture()},this.resetState=function(){x=0,y=0,_=null,de.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(qu.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class m1 extends qu{}m1.prototype.isWebGL1Renderer=!0;class g1 extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class _1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new N;class Yu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ed=new N,Ad=new it,Cd=new it,x1=new N,Rd=new Ue;class v1 extends Jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Ad.fromBufferAttribute(i.attributes.skinIndex,e),Cd.fromBufferAttribute(i.attributes.skinWeight,e),Ed.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Cd.getComponent(s);if(o!==0){const a=Ad.getComponent(s);Rd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(x1.copy(Ed).applyMatrix4(Rd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rg extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sg extends Pt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Et,u=Et,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pd=new Ue,y1=new Ue;class Ku{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:y1;Pd.multiplyMatrices(a,t[s]),Pd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ku(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Vm(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sg(t,e,e,wn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new rg),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ld extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Dd=new Ue,Id=new Ue,xa=[],b1=new Ue,to=new Jt;class M1 extends Jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ld(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,b1)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Dd),Id.multiplyMatrices(n,Dd),to.matrixWorld=Id,to.raycast(e,xa);for(let o=0,a=xa.length;o<a;o++){const l=xa[o];l.instanceId=s,l.object=this,t.push(l)}xa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ld(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class og extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Od=new N,Nd=new N,Fd=new Ue,ac=new ll,va=new zs;class $u extends ot{constructor(e=new gn,t=new og){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Od.fromBufferAttribute(t,i-1),Nd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Od.distanceTo(Nd);e.setAttribute("lineDistance",new zn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;Fd.copy(i).invert(),ac.copy(e.ray).applyMatrix4(Fd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,h=new N,f=new N,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let _=x,b=y-1;_<b;_+=d){const M=g.getX(_),A=g.getX(_+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,A),ac.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let _=x,b=y-1;_<b;_+=d){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),ac.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ud=new N,kd=new N;class S1 extends $u{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ud.fromBufferAttribute(t,i),kd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ud.distanceTo(kd);e.setAttribute("lineDistance",new zn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class w1 extends $u{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ag extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bd=new Ue,$c=new ll,ya=new zs,ba=new N;class lg extends ot{constructor(e=new gn,t=new ag){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=s,e.ray.intersectsSphere(ya)===!1)return;Bd.copy(i).invert(),$c.copy(e.ray).applyMatrix4(Bd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,p=d;g<p;g++){const m=c.getX(g);ba.fromBufferAttribute(h,m),zd(ba,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,p=d;g<p;g++)ba.fromBufferAttribute(h,g),zd(ba,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zd(r,e,t,n,i,s,o){const a=$c.distanceSqToPoint(r);if(a<t){const l=new N;$c.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class T1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Pe:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,i=[],s=[],o=[],a=new N,l=new Ue;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(vt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(vt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Zu(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Ma=new N,lc=new Zu,cc=new Zu,uc=new Zu;class E1 extends T1{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Ma.subVectors(i[0],i[1]).add(i[0]),c=Ma);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Ma.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),lc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,p,m),cc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,p,m),uc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,p,m)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),cc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),uc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(lc.calc(l),cc.calc(l),uc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Qu extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bm,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ir extends Qu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ni(r,e,t){return cg(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Sa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function cg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function A1(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function ug(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class jo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class C1 extends jo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gf,endingEnd:Gf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hf:s=e,a=2*t-n;break;case Wf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hf:o=e,l=2*n-t;break;case Wf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,x=-f*m+2*f*p-f*g,y=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*p+.5*g,b=d*m-d*p;for(let M=0;M!==a;++M)s[M]=x*o[u+M]+y*o[c+M]+_*o[l+M]+b*o[h+M];return s}}class R1 extends jo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class P1 extends jo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ri{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new P1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new R1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new C1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lo:t=this.InterpolantFactoryMethodDiscrete;break;case Ts:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Ni(n,s,o),this.values=Ni(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&cg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Ni(this.times),t=Ni(this.values),n=this.getValueSize(),i=this.getInterpolation()===Fl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Ni(e,0,o),this.values=Ni(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Ni(this.times,0),t=Ni(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Ts;class Hs extends ri{}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Lo;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class hg extends ri{}hg.prototype.ValueTypeName="color";class Oo extends ri{}Oo.prototype.ValueTypeName="number";class L1 extends jo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ni.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Pr extends ri{InterpolantFactoryMethodLinear(e){return new L1(this.times,this.values,this.getValueSize(),e)}}Pr.prototype.ValueTypeName="quaternion";Pr.prototype.DefaultInterpolation=Ts;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends ri{}Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Lo;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends ri{}No.prototype.ValueTypeName="vector";class D1{constructor(e,t=-1,n,i=Yy){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(O1(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ri.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=A1(l);l=Vd(l,1,u),c=Vd(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Oo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,p){if(d.length!==0){const m=[],x=[];ug(d,m,x,g),m.length!==0&&p.push(new h(f,m,x))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],x=[];for(let y=0;y!==f[g].morphTargets.length;++y){const _=f[g];m.push(_.time),x.push(_.morphTarget===p?1:0)}i.push(new Oo(".morphTargetInfluence["+p+"]",m,x))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(No,d+".position",f,"pos",i),n(Pr,d+".quaternion",f,"rot",i),n(No,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function I1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oo;case"vector":case"vector2":case"vector3":case"vector4":return No;case"color":return hg;case"quaternion":return Pr;case"bool":case"boolean":return Hs;case"string":return Ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function O1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=I1(r.type);if(r.times===void 0){const t=[],n=[];ug(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Cs={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class N1{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const F1=new N1;class er{constructor(e){this.manager=e!==void 0?e:F1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const fi={};class U1 extends Error{constructor(e,t){super(e),this.response=t}}class Fo extends er{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Cs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:i});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=fi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(x){y();function y(){h.read().then(({done:_,value:b})=>{if(_)x.close();else{p+=b.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let A=0,R=u.length;A<R;A++){const v=u[A];v.onProgress&&v.onProgress(M)}x.enqueue(b),y()}})}}});return new Response(m)}else throw new U1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Cs.add(e,c);const u=fi[e];delete fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class fg extends er{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Cs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Io("img");function l(){u(),Cs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class k1 extends er{constructor(e){super(e)}load(e,t,n,i){const s=new Hu,o=new fg(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class B1 extends er{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new sg,a=new Fo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Zt,o.wrapT=c.wrapT!==void 0?c.wrapT:Zt,o.magFilter=c.magFilter!==void 0?c.magFilter:xt,o.minFilter=c.minFilter!==void 0?c.minFilter:xt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=$i),c.mipmapCount===1&&(o.minFilter=xt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,i),o}}class dg extends er{constructor(e){super(e)}load(e,t,n,i){const s=new Pt,o=new fg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class fl extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const hc=new Ue,Gd=new N,Hd=new N;class Ju{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wu,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gd),Hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hd),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class z1 extends Ju{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Do*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class V1 extends fl{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new z1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wd=new Ue,no=new N,fc=new N;class G1 extends Ju{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),n.position.copy(no),fc.copy(n.position),fc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fc),n.updateMatrixWorld(),i.makeTranslation(-no.x,-no.y,-no.z),Wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd)}}class H1 extends fl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new G1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class W1 extends Ju{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j1 extends fl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new W1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class X1 extends fl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class q1 extends er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Cs.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Cs.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class Y1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jd(){return(typeof performance>"u"?Date:performance).now()}const eh="\\[\\]\\.:\\/",K1=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",$1="[^"+eh.replace("\\.","")+"]",Z1=/((?:WC+[\/:])*)/.source.replace("WC",th),Q1=/(WCOD+)?/.source.replace("WCOD",$1),J1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),eE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),tE=new RegExp("^"+Z1+Q1+J1+eE+"$"),nE=["material","materials","bones","map"];class iE{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(K1,"")}static parseTrackName(e){const t=tE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);nE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=iE;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class rE{constructor(e,t,n=0,i=1/0){this.ray=new ll(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Qc(e,this,n,t),n.sort(Xd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Qc(e[i],this,n,t);return n.sort(Xd),n}}function Xd(r,e){return r.distance-e.distance}function Qc(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Qc(i[s],e,t,!0)}}class qd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xi=sE();function sE(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function oE(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=vt(r,-65504,65504),xi.floatView[0]=r;const e=xi.uint32View[0],t=e>>23&511;return xi.baseTable[t]+((e&8388607)>>xi.shiftTable[t])}function aE(r){const e=r>>10;return xi.uint32View[0]=xi.mantissaTable[xi.offsetTable[e]+(r&1023)]+xi.exponentTable[e],xi.floatView[0]}const wa={toHalfFloat:oE,fromHalfFloat:aE};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);class lE extends B1{constructor(e){super(e),this.type=vi}parse(e){const a=function(_,b){switch(_){case 1:console.error("THREE.RGBELoader Read Error: "+(b||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(b||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(b||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(b||""))}return-1},h=`
`,f=function(_,b,M){b=b||1024;let R=_.pos,v=-1,w=0,I="",F=String.fromCharCode.apply(null,new Uint16Array(_.subarray(R,R+128)));for(;0>(v=F.indexOf(h))&&w<b&&R<_.byteLength;)I+=F,w+=F.length,R+=128,F+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(R,R+128)));return-1<v?(M!==!1&&(_.pos+=w+v+1),I+F.slice(0,v)):!1},d=function(_){const b=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,v=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,w={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let I,F;if(_.pos>=_.byteLength||!(I=f(_)))return a(1,"no header found");if(!(F=I.match(b)))return a(3,"bad initial token");for(w.valid|=1,w.programtype=F[1],w.string+=I+`
`;I=f(_),I!==!1;){if(w.string+=I+`
`,I.charAt(0)==="#"){w.comments+=I+`
`;continue}if((F=I.match(M))&&(w.gamma=parseFloat(F[1])),(F=I.match(A))&&(w.exposure=parseFloat(F[1])),(F=I.match(R))&&(w.valid|=2,w.format=F[1]),(F=I.match(v))&&(w.valid|=4,w.height=parseInt(F[1],10),w.width=parseInt(F[2],10)),w.valid&2&&w.valid&4)break}return w.valid&2?w.valid&4?w:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(_,b,M){const A=b;if(A<8||A>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);if(A!==(_[2]<<8|_[3]))return a(3,"wrong scanline width");const R=new Uint8Array(4*b*M);if(!R.length)return a(4,"unable to allocate buffer space");let v=0,w=0;const I=4*A,F=new Uint8Array(4),Y=new Uint8Array(I);let k=M;for(;k>0&&w<_.byteLength;){if(w+4>_.byteLength)return a(1);if(F[0]=_[w++],F[1]=_[w++],F[2]=_[w++],F[3]=_[w++],F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=A)return a(3,"bad rgbe scanline format");let O=0,G;for(;O<I&&w<_.byteLength;){G=_[w++];const q=G>128;if(q&&(G-=128),G===0||O+G>I)return a(3,"bad scanline data");if(q){const z=_[w++];for(let re=0;re<G;re++)Y[O++]=z}else Y.set(_.subarray(w,w+G),O),O+=G,w+=G}const K=A;for(let q=0;q<K;q++){let z=0;R[v]=Y[q+z],z+=A,R[v+1]=Y[q+z],z+=A,R[v+2]=Y[q+z],z+=A,R[v+3]=Y[q+z],v+=4}k--}return R},p=function(_,b,M,A){const R=_[b+3],v=Math.pow(2,R-128)/255;M[A+0]=_[b+0]*v,M[A+1]=_[b+1]*v,M[A+2]=_[b+2]*v,M[A+3]=1},m=function(_,b,M,A){const R=_[b+3],v=Math.pow(2,R-128)/255;M[A+0]=wa.toHalfFloat(Math.min(_[b+0]*v,65504)),M[A+1]=wa.toHalfFloat(Math.min(_[b+1]*v,65504)),M[A+2]=wa.toHalfFloat(Math.min(_[b+2]*v,65504)),M[A+3]=wa.toHalfFloat(1)},x=new Uint8Array(e);x.pos=0;const y=d(x);if(y!==-1){const _=y.width,b=y.height,M=g(x.subarray(x.pos),_,b);if(M!==-1){let A,R,v;switch(this.type){case Fn:v=M.length/4;const w=new Float32Array(v*4);for(let F=0;F<v;F++)p(M,F*4,w,F*4);A=w,R=Fn;break;case vi:v=M.length/4;const I=new Uint16Array(v*4);for(let F=0;F<v;F++)m(M,F*4,I,F*4);A=I,R=vi;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:_,height:b,data:A,header:y.string,gamma:y.gamma,exposure:y.exposure,type:R}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case Fn:case vi:o.encoding=Zi,o.minFilter=xt,o.magFilter=xt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}class cE{constructor(){const e=new g1;e.add(new X1(11184810,.2)),this.instance=e,this.addTexture("215.jpg")}addRGBETexture(e){new lE().loadAsync(`/public/texture/${e}`).then(n=>{this.instance.background=n,this.instance.environment=n,this.instance.environment.mapping=Po})}addCubeTexture(e){const t=new k1().setPath("/public/texture/").load([e,e,e,e,e,e]);console.log(t),this.instance.background=t}addTexture(e){const t=new dg().load(`/public/texture/${e}`);this.instance.background=t,this.instance.environment=t,this.instance.environment.mapping=Po}addChild(e){this.instance.add(e)}}const Uo=new cE;class uE{constructor(){const e=new qu({antialias:!0});e.setSize(window.innerWidth-1e-4,window.innerHeight-1e-4),e.setPixelRatio(window.devicePixelRatio),e.shadowMap.enabled=!0,e.toneMapping=Im,e.toneMappingExposure=.8,this.instance=e}}const nh=new uE;class hE{constructor(){const e=new Xt(75,window.innerWidth/window.innerHeight,.1,1e4);this.instance=e,this.cameraCollection={default:e},this.setCameraPosition()}setCameraPosition(){this.instance.position.set(220,500,200),this.instance.lookAt(0,0,0)}}const us=new hE,Yd={type:"change"},dc={type:"start"},Kd={type:"end"};class fE extends Dr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fr.ROTATE,MIDDLE:Fr.DOLLY,RIGHT:Fr.PAN},this.touches={ONE:Ur.ROTATE,TWO:Ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",le),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Yd),n.update(),s=i.NONE},this.update=function(){const L=new N,V=new ni().setFromUnitVectors(e.up,new N(0,1,0)),we=V.clone().invert(),ye=new N,Ae=new ni,Re=2*Math.PI;return function(){const Ie=n.object.position;L.copy(Ie).sub(n.target),L.applyQuaternion(V),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&w(R()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ve=n.minAzimuthAngle,Je=n.maxAzimuthAngle;return isFinite(Ve)&&isFinite(Je)&&(Ve<-Math.PI?Ve+=Re:Ve>Math.PI&&(Ve-=Re),Je<-Math.PI?Je+=Re:Je>Math.PI&&(Je-=Re),Ve<=Je?a.theta=Math.max(Ve,Math.min(Je,a.theta)):a.theta=a.theta>(Ve+Je)/2?Math.max(Ve,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(we),Ie.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ye.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o?(n.dispatchEvent(Yd),ye.copy(n.object.position),Ae.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",j),n.domElement.removeEventListener("pointercancel",he),n.domElement.removeEventListener("wheel",ge),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",te),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",le),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new qd,l=new qd;let c=1;const u=new N;let h=!1;const f=new Pe,d=new Pe,g=new Pe,p=new Pe,m=new Pe,x=new Pe,y=new Pe,_=new Pe,b=new Pe,M=[],A={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(L){l.theta-=L}function I(L){l.phi-=L}const F=function(){const L=new N;return function(we,ye){L.setFromMatrixColumn(ye,0),L.multiplyScalar(-we),u.add(L)}}(),Y=function(){const L=new N;return function(we,ye){n.screenSpacePanning===!0?L.setFromMatrixColumn(ye,1):(L.setFromMatrixColumn(ye,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(we),u.add(L)}}(),k=function(){const L=new N;return function(we,ye){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const Re=n.object.position;L.copy(Re).sub(n.target);let Te=L.length();Te*=Math.tan(n.object.fov/2*Math.PI/180),F(2*we*Te/Ae.clientHeight,n.object.matrix),Y(2*ye*Te/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(we*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),Y(ye*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(L){f.set(L.clientX,L.clientY)}function q(L){y.set(L.clientX,L.clientY)}function z(L){p.set(L.clientX,L.clientY)}function re(L){d.set(L.clientX,L.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const V=n.domElement;w(2*Math.PI*g.x/V.clientHeight),I(2*Math.PI*g.y/V.clientHeight),f.copy(d),n.update()}function ce(L){_.set(L.clientX,L.clientY),b.subVectors(_,y),b.y>0?O(v()):b.y<0&&G(v()),y.copy(_),n.update()}function be(L){m.set(L.clientX,L.clientY),x.subVectors(m,p).multiplyScalar(n.panSpeed),k(x.x,x.y),p.copy(m),n.update()}function W(L){L.deltaY<0?G(v()):L.deltaY>0&&O(v()),n.update()}function ue(L){let V=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),V=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),V=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),V=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),V=!0;break}V&&(L.preventDefault(),n.update())}function me(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),V=.5*(M[0].pageY+M[1].pageY);f.set(L,V)}}function P(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),V=.5*(M[0].pageY+M[1].pageY);p.set(L,V)}}function Q(){const L=M[0].pageX-M[1].pageX,V=M[0].pageY-M[1].pageY,we=Math.sqrt(L*L+V*V);y.set(0,we)}function $(){n.enableZoom&&Q(),n.enablePan&&P()}function oe(){n.enableZoom&&Q(),n.enableRotate&&me()}function de(L){if(M.length==1)d.set(L.pageX,L.pageY);else{const we=xe(L),ye=.5*(L.pageX+we.x),Ae=.5*(L.pageY+we.y);d.set(ye,Ae)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const V=n.domElement;w(2*Math.PI*g.x/V.clientHeight),I(2*Math.PI*g.y/V.clientHeight),f.copy(d)}function Se(L){if(M.length===1)m.set(L.pageX,L.pageY);else{const V=xe(L),we=.5*(L.pageX+V.x),ye=.5*(L.pageY+V.y);m.set(we,ye)}x.subVectors(m,p).multiplyScalar(n.panSpeed),k(x.x,x.y),p.copy(m)}function ve(L){const V=xe(L),we=L.pageX-V.x,ye=L.pageY-V.y,Ae=Math.sqrt(we*we+ye*ye);_.set(0,Ae),b.set(0,Math.pow(_.y/y.y,n.zoomSpeed)),O(b.y),y.copy(_)}function E(L){n.enableZoom&&ve(L),n.enablePan&&Se(L)}function D(L){n.enableZoom&&ve(L),n.enableRotate&&de(L)}function j(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Z),n.domElement.addEventListener("pointerup",te)),J(L),L.pointerType==="touch"?T(L):pe(L))}function Z(L){n.enabled!==!1&&(L.pointerType==="touch"?S(L):ae(L))}function te(L){ne(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",te)),n.dispatchEvent(Kd),s=i.NONE}function he(L){ne(L)}function pe(L){let V;switch(L.button){case 0:V=n.mouseButtons.LEFT;break;case 1:V=n.mouseButtons.MIDDLE;break;case 2:V=n.mouseButtons.RIGHT;break;default:V=-1}switch(V){case Fr.DOLLY:if(n.enableZoom===!1)return;q(L),s=i.DOLLY;break;case Fr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;z(L),s=i.PAN}else{if(n.enableRotate===!1)return;K(L),s=i.ROTATE}break;case Fr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;K(L),s=i.ROTATE}else{if(n.enablePan===!1)return;z(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(dc)}function ae(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;re(L);break;case i.DOLLY:if(n.enableZoom===!1)return;ce(L);break;case i.PAN:if(n.enablePan===!1)return;be(L);break}}function ge(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(dc),W(L),n.dispatchEvent(Kd))}function le(L){n.enabled===!1||n.enablePan===!1||ue(L)}function T(L){switch(fe(L),M.length){case 1:switch(n.touches.ONE){case Ur.ROTATE:if(n.enableRotate===!1)return;me(),s=i.TOUCH_ROTATE;break;case Ur.PAN:if(n.enablePan===!1)return;P(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ur.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(),s=i.TOUCH_DOLLY_PAN;break;case Ur.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;oe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(dc)}function S(L){switch(fe(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;de(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Se(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;E(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(L),n.update();break;default:s=i.NONE}}function B(L){n.enabled!==!1&&L.preventDefault()}function J(L){M.push(L)}function ne(L){delete A[L.pointerId];for(let V=0;V<M.length;V++)if(M[V].pointerId==L.pointerId){M.splice(V,1);return}}function fe(L){let V=A[L.pointerId];V===void 0&&(V=new Pe,A[L.pointerId]=V),V.set(L.pageX,L.pageY)}function xe(L){const V=L.pointerId===M[0].pointerId?M[1]:M[0];return A[V.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",j),n.domElement.addEventListener("pointercancel",he),n.domElement.addEventListener("wheel",ge,{passive:!1}),this.update()}}class dE{constructor(){const e=new fE(us.instance,nh.instance.domElement);e.enableDamping=!0,e.maxPolarAngle=Math.PI*.45,e.minPolarAngle=Math.PI*.1,e.maxDistance=2e3,e.minDistance=300,this.instance=e,e.target=new N(0,0,0),this.ControlsCollection={default:e}}}const pE=new dE,pg={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Xo{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mE=new ul(-1,1,1,-1,0,1),ih=new gn;ih.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3));ih.setAttribute("uv",new zn([0,2,0,0,2,0],2));class mg{constructor(e){this._mesh=new Jt(ih,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class gg extends Xo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gu.clone(e.uniforms),this.material=new qt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new mg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $d extends Xo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class gE extends Xo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _E{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Pe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gg(pg),this.clock=new Y1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$d!==void 0&&(o instanceof $d?n=!0:o instanceof gE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xE extends Xo{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}class Vi extends Xo{constructor(e,t,n,i){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=i!==void 0?i:[],this.visibleEdgeColor=new De(1,1,1),this.hiddenEdgeColor=new De(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256);const s=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new jt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new ig,this.depthMaterial.side=Tn,this.depthMaterial.depthPacking=km,this.depthMaterial.blending=Jn,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Tn,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new jt(this.resolution.x,this.resolution.y),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new jt(s,o),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new jt(s,o),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new jt(Math.round(s/2),Math.round(o/2)),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new jt(s,o),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new jt(Math.round(s/2),Math.round(o/2)),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(s,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(s/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();const c=pg;this.copyUniforms=Gu.clone(c.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new qt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Jn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.fsQuad=new mg(null),this.tempPulseColor1=new De,this.tempPulseColor2=new De,this.textureMatrix=new Ue;function u(h,f){const d=f.isPerspectiveCamera?"perspective":"orthographic";return h.replace(/DEPTH_TO_VIEW_Z/g,d+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,i),this.renderTargetBlurBuffer1.setSize(n,i),this.renderTargetEdgeBuffer1.setSize(n,i),this.separableBlurMaterial1.uniforms.texSize.value.set(n,i),n=Math.round(n/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(n,i),this.renderTargetEdgeBuffer2.setSize(n,i),this.separableBlurMaterial2.uniforms.texSize.value.set(n,i)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function n(i){i.isMesh&&(e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e))}for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(n)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=[];function i(o){o.isMesh&&n.push(o)}for(let o=0;o<this.selectedObjects.length;o++)this.selectedObjects[o].traverse(i);function s(o){if(o.isMesh||o.isSprite){let a=!1;for(let l=0;l<n.length;l++)if(n[l].id===o.id){a=!0;break}if(a===!1){const l=o.visible;(e===!1||t.get(o)===!0)&&(o.visible=e),t.set(o,l)}}else(o.isPoints||o.isLine)&&(e===!0?o.visible=t.get(o):(t.set(o,o.visible),o.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,i,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Vi.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Vi.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Vi.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Vi.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new qt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Pe(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new qt({uniforms:{maskTexture:{value:null},texSize:{value:new Pe(.5,.5)},visibleEdgeColor:{value:new N(1,1,1)},hiddenEdgeColor:{value:new N(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new qt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new qt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Vc,depthTest:!1,depthWrite:!1,transparent:!0})}}Vi.BlurDirectionX=new Pe(1,0);Vi.BlurDirectionY=new Pe(0,1);const vE={uniforms:{tDiffuse:{value:null},resolution:{value:new Pe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class yE{constructor(){const e=new rE;this.instance=e}}const Ga=new yE([]);class bE{constructor(){yl(this,"evetListener",e=>{console.log("2222"),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,Ga.instance.setFromCamera(this.mouse,us.instance);const t=Ga.instance.intersectObject(this.outlineScene,!0);if(t.length>0){const n=t[0].object;if(n.name.includes("polySurface")&&n.name.includes("lambert")){if(this.currentObject==n)return;this.selectedObjects=[],this.selectedObjects.push(n),this.outLinePass.selectedObjects=this.selectedObjects,this.currentObject=n}else this.outLinePass.selectedObjects=[]}});const e=new _E(nh.instance),t=new xE(Uo.instance,us.instance);e.addPass(t),this.renderPass=t,this.addPassRenderFlag=!1;const n=new gg(vE);n.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),this.mouse=new Pe,this.selectedObjects=[],this.doubleSelectObject=null,this.currentObject=null,this.instance=e,this.effectFXAA=n,this.noPointer=["polySurface317-lambert1","polySurface312-lambert1","polySurface355-lambert1","polySurface316-lambert1","polySurface313-lambert1","polySurface311-lambert1","polySurface310-lambert1","polySurface314-lambert1","polySurface315-lambert1","polySurface302-lambert1","polySurface295-lambert1","polySurface301-lambert1","polySurface296-lambert1","polySurface297-lambert1","polySurface300-lambert1","polySurface297-lambert1","polySurface298-lambert1","polySurface299-lambert1","polySurface305-lambert1","polySurface307-lambert1","polySurface308-lambert1","polySurface354-lambert1","polySurface353-lambert1","polySurface309-lambert1","polySurface306-lambert1","polySurface304-lambert1","polySurface303-lambert1","polySurface350-lambert1","polySurface360-lambert1","polySurface352-lambert1"]}init(e){this.outlineScene=e;const t=new Vi(new Pe(window.innerWidth,window.innerHeight),e,us.instance);t.edgeStrength=5,t.edgeThickness=5,t.visibleEdgeColor=new De(16711680),t.hiddenEdgeColor=new De(2170547),this.outLinePass=t,this.listernerPointermove(),this.insertOutlinePass()}listernerPointermove(){window.addEventListener("pointerdown",this.evetListener),window.addEventListener("dblclick",this.pointerDouble)}removelistenPointermove(){window.removeEventListener("pointermove",this.evetListener),window.removeEventListener("dblclick",this.pointerDouble)}removeOutLinePass(){this.addPassRenderFlag=!1,this.instance.removePass(this.outLinePass)}insertOutlinePass(){this.addPassRenderFlag=!0,this.instance.addPass(this.outLinePass)}resize(){this.instance.setSize(window.innerWidth,window.innerHeight),this.effectFXAA.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight)}}const rh=new bE;console.log(rh.instance);function _g(){requestAnimationFrame(_g),pE.instance.update(),rh.instance.render(Uo.instance,us.instance)}function Zd(r,e){if(e===Ky)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===jc||e===Um){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===jc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class ME extends er{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new kE(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Zc.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Fo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xg){try{o[Xe.KHR_BINARY_GLTF]=new BE(e)}catch(h){i&&i(h);return}s=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new QE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:o[h]=new TE;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[h]=new zE(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[h]=new VE;break;case Xe.KHR_MESH_QUANTIZATION:o[h]=new GE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function SE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wE{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new De(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new j1(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new H1(u),c.distance=h;break;case"spot":c=new V1(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class TE{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return bi}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,$e))}return Promise.all(i)}}class EE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class AE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(a,a)}return Promise.all(s)}}class CE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class RE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$e)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class PE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class LE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De(a[0],a[1],a[2]),Promise.all(s)}}class DE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class IE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ir}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,$e)),Promise.all(s)}}class OE{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class NE{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class FE{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class UE{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class kE{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==yn.TRIANGLES&&c.mode!==yn.TRIANGLE_STRIP&&c.mode!==yn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const p=new Ue,m=new N,x=new ni,y=new N(1,1,1),_=new M1(g.geometry,g.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),_.setMatrixAt(b,p.compose(m,x,y));for(const b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);ot.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),d.push(_)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const xg="glTF",io=12,Qd={JSON:1313821514,BIN:5130562};class BE{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,io),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-io,s=new DataView(e,io);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Qd.JSON){const c=new Uint8Array(e,io+o,a);this.content=n.decode(c)}else if(l===Qd.BIN){const c=io+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Jc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Jc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=hs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],p=l[d];p!==void 0&&(g.normalized=p)}h(f)},a,c)})})}}class VE{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class GE{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class vg extends jo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,p=g-c,m=-2*d+3*f,x=d-f,y=1-m,_=x-f+h;for(let b=0;b!==a;b++){const M=o[p+b+a],A=o[p+b+l]*u,R=o[g+b+a],v=o[g+b]*u;s[b]=y*M+_*A+m*R+x*v}return s}}const HE=new ni;class WE extends vg{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return HE.fromArray(s).normalize().toArray(s),s}}const yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jd={9728:Et,9729:xt,9984:Wc,9985:Nm,9986:La,9987:$i},ep={33071:Zt,33648:Va,10497:Ss},pc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jE={CUBICSPLINE:void 0,LINEAR:Ts,STEP:Lo},mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Qu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),r.DefaultMaterial}function ro(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function YE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KE(r){const e=r.extensions&&r.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+tp(e.attributes):t=r.indices+":"+tp(r.attributes)+":"+r.mode,t}function tp(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function eu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $E(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ZE=new Ue;class QE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new SE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new dg(this.options.manager):this.textureLoader=new q1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};ro(s,a,i),Bi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Zc.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=pc[i.type],a=hs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new At(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=pc[i.type],c=hs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(d&&d!==h){const x=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let _=t.cache.get(y);_||(p=new c(a,x*d,i.count*d/u),_=new _1(p,d/u),t.cache.add(y,_)),m=new Yu(_,l,f%d/u,g)}else a===null?p=new c(i.count*l):p=new c(a,f,i.count*l),m=new At(p,l,g);if(i.sparse!==void 0){const x=pc.SCALAR,y=hs[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,M=new y(o[1],_,i.sparse.count*x),A=new c(o[2],b,i.sparse.count*l);a!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized));for(let R=0,v=M.length;R<v;R++){const w=M[R];if(m.setX(w,A[R*l]),l>=2&&m.setY(w,A[R*l+1]),l>=3&&m.setZ(w,A[R*l+2]),l>=4&&m.setW(w,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Jd[f.magFilter]||xt,u.minFilter=Jd[f.minFilter]||$i,u.wrapS=ep[f.wrapS]||Ss,u.wrapT=ep[f.wrapT]||Ss,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(p){const m=new Pt(p);m.needsUpdate=!0,f(m)}),t.load(Zc.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||$E(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ag,ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new og,ei.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Qu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const h=i[Xe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,$e)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Tn);const u=s.alphaMode||mc.OPAQUE;if(u===mc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===mc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==bi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Pe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==bi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==bi&&(a.emissive=new De().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==bi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,$e)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Bi(h,s),t.associations.set(h,{materials:e}),s.extensions&&ro(i,h,s),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return np(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=KE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=np(new gn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?XE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const p=u[d],m=o[d];let x;const y=c[d];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)x=s.isSkinnedMesh===!0?new v1(p,y):new Jt(p,y),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?x.geometry=Zd(x.geometry,Um):m.mode===yn.TRIANGLE_FAN&&(x.geometry=Zd(x.geometry,jc));else if(m.mode===yn.LINES)x=new S1(p,y);else if(m.mode===yn.LINE_STRIP)x=new $u(p,y);else if(m.mode===yn.LINE_LOOP)x=new w1(p,y);else if(m.mode===yn.POINTS)x=new lg(p,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(x.geometry.morphAttributes).length>0&&YE(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),Bi(x,s),m.extensions&&ro(i,x,m),t.assignFinalMaterial(x),h.push(x)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new yr;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(fb.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ul(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ue;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ku(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,g=d.node,p=n.parameters!==void 0?n.parameters[f.input]:f.input,m=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",m)),a.push(f),l.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],p=[];for(let x=0,y=u.length;x<y;x++){const _=u[x],b=h[x],M=f[x],A=d[x],R=g[x];if(_===void 0)continue;_.updateMatrix();let v;switch(Fi[R.path]){case Fi.weights:v=Oo;break;case Fi.rotation:v=Pr;break;case Fi.position:case Fi.scale:default:v=No;break}const w=_.name?_.name:_.uuid,I=A.interpolation!==void 0?jE[A.interpolation]:Ts,F=[];Fi[R.path]===Fi.weights?_.traverse(function(k){k.morphTargetInfluences&&F.push(k.name?k.name:k.uuid)}):F.push(w);let Y=M.array;if(M.normalized){const k=eu(Y.constructor),O=new Float32Array(Y.length);for(let G=0,K=Y.length;G<K;G++)O[G]=Y[G]*k;Y=O}for(let k=0,O=F.length;k<O;k++){const G=new v(F[k]+"."+Fi[R.path],b.array,Y,I);A.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(q){const z=this instanceof Pr?WE:vg;return new z(this.times,this.values,this.getValueSize()/3,q)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(G)}}const m=n.name?n.name:"animation_"+e;return new D1(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ZE)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new rg:c.length>1?u=new yr:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Bi(u,s),s.extensions&&ro(n,u,s),s.matrix!==void 0){const h=new Ue;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new yr;n.name&&(s.name=i.createUniqueName(n.name)),Bi(s,n),n.extensions&&ro(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof ei||f instanceof Pt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}}function JE(r,e,t){const n=e.attributes,i=new Bs;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=eu(hs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const p=eu(hs[f.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new zs;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function np(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Jc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Bi(r,e),JE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?qE(r,e.targets,t):r})}const gc=new WeakMap;class eA extends er{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Fo(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Mn).catch(n)}decodeDracoFile(e,t,n,i,s=Es){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(gc.has(e)){const l=gc.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),gc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new gn;e.index&&t.setIndex(new At(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new At(o,a);s==="color"&&this._assignVertexColorSpace(l,i.vertexColorSpace),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Mn)return;const n=new De;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Fo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=tA.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function tA(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),g=d.attributes.map(p=>p.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const p={index:null,attributes:[]};for(const m in u){const x=self[h[m]];let y,_;if(c.useUniqueIDs)_=u[m],y=a.GetAttributeByUniqueId(f,_);else{if(_=a.GetAttributeId(f,o[u[m]]),_===-1)continue;y=a.GetAttribute(f,_)}const b=i(o,a,f,m,x,y);m==="color"&&(b.vertexColorSpace=c.vertexColorSpace),p.attributes.push(b)}return g===o.TRIANGULAR_MESH&&(p.index=n(o,a,f)),o.destroy(f),p}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,p=g*u.BYTES_PER_ELEMENT,m=s(o,u),x=o._malloc(p);a.GetAttributeDataArrayForAllPoints(l,h,m,p,x);const y=new u(o.HEAPF32.buffer,x,g).slice();return o._free(x),{name:c,array:y,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function pi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function yg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Rs={duration:.5,overwrite:!1,delay:0},sh,Ut,gt,En=1e8,nt=1/En,tu=Math.PI*2,nA=tu/4,iA=0,bg=Math.sqrt,rA=Math.cos,sA=Math.sin,Ct=function(e){return typeof e=="string"},ct=function(e){return typeof e=="function"},Ei=function(e){return typeof e=="number"},oh=function(e){return typeof e>"u"},ii=function(e){return typeof e=="object"},en=function(e){return e!==!1},ah=function(){return typeof window<"u"},Ta=function(e){return ct(e)||Ct(e)},Mg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,nu=/(?:-?\.?\d|\.)+/gi,Sg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_c=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wg=/[+-]=-?[.\d]+/,Tg=/[^,'"\[\]\s]+/gi,oA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,at,bn,iu,lh,mn={},Ha={},Eg,Ag=function(e){return(Ha=Lr(e,mn))&&sn},ch=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wa=function(e,t){return!t&&console.warn(e)},Cg=function(e,t){return e&&(mn[e]=t)&&Ha&&(Ha[e]=t)||mn},ko=function(){return 0},aA={suppressEvents:!0,isStart:!0,kill:!1},Ia={suppressEvents:!0,kill:!1},lA={suppressEvents:!0},uh={},qi=[],ru={},Rg,un={},xc={},ip=30,Oa=[],hh="",fh=function(e){var t=e[0],n,i;if(ii(t)||ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Oa.length;i--&&!Oa[i].targetTest(t););n=Oa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Jg(e[i],n)))||e.splice(i,1);return e},Er=function(e){return e._gsap||fh(An(e))[0]._gsap},Pg=function(e,t,n){return(n=e[t])&&ct(n)?e[t]():oh(n)&&e.getAttribute&&e.getAttribute(t)||n},tn=function(e,t){return(e=e.split(",")).forEach(t)||e},ht=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},fs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},cA=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ja=function(){var e=qi.length,t=qi.slice(0),n,i;for(ru={},qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lg=function(e,t,n,i){qi.length&&!Ut&&ja(),e.render(t,n,i||Ut&&t<0&&(e._initted||e._startAt)),qi.length&&!Ut&&ja()},Dg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tg).length<2?t:Ct(e)?e.trim():e},Ig=function(e){return e},Rn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},uA=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Lr=function(e,t){for(var n in t)e[n]=t[n];return e},rp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ii(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Xa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},vo=function(e){var t=e.parent||at,n=e.keyframes?uA(kt(e.keyframes)):Rn;if(en(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},hA=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Og=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},dl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Qi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ar=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},fA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},su=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert(Ia):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},dA=function r(e){return!e||e._ts&&r(e.parent)},sp=function(e){return e._repeat?Ps(e._tTime,e=e.duration()+e._rDelay)*e:0},Ps=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},qa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},pl=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},ml=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),pl(e),n._dirty||Ar(n,e)),e},Ng=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=qa(e.rawTime(),t),(!t._dur||qo(0,t.totalDuration(),n)-t._tTime>nt)&&t.render(n,!0)),Ar(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-nt}},$n=function(e,t,n,i){return t.parent&&Qi(t),t._start=Rt((Ei(n)?n:n||e!==at?vn(e,n,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Og(e,t,"_first","_last",e._sort?"_start":0),ou(t)||(e._recent=t),i||Ng(e,t),e._ts<0&&ml(e,e._tTime),e},Fg=function(e,t){return(mn.ScrollTrigger||ch("scrollTrigger",t))&&mn.ScrollTrigger.create(t,e)},Ug=function(e,t,n,i,s){if(ph(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rg!==hn.frame)return qi.push(e),e._lazy=[s,i],1},pA=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ou=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},mA=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&pA(e)&&!(!e._initted&&ou(e))||(e._ts<0||e._dp._ts<0)&&!ou(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=qo(0,e._tDur,t),u=Ps(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ps(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ut||i||e._zTime===nt||!t&&e._zTime){if(!e._initted&&Ug(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?nt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&su(e,t,n,!0),e._onUpdate&&!n&&Cn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Cn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Qi(e,1),!n&&!Ut&&(Cn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gA=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ls=function(e,t,n,i){var s=e._repeat,o=Rt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Rt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ml(e,e._tTime=e._tDur*a),e.parent&&pl(e),n||Ar(e.parent,e),e},op=function(e){return e instanceof Qt?Ar(e):Ls(e,e._dur)},_A={_start:0,endTime:ko,totalDuration:ko},vn=function r(e,t,n){var i=e.labels,s=e._recent||_A,o=e.duration()>=En?s.endTime(!1):e._dur,a,l,c;return Ct(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(kt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},yo=function(e,t,n){var i=Ei(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=en(l.vars.inherit)&&l.parent;o.immediateRender=en(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new _t(t[0],o,t[s+1])},tr=function(e,t){return e||e===0?t(e):t},qo=function(e,t,n){return n<e?e:n>t?t:n},Nt=function(e,t){return!Ct(e)||!(t=oA.exec(e))?"":t[1]},xA=function(e,t,n){return tr(n,function(i){return qo(e,t,i)})},au=[].slice,kg=function(e,t){return e&&ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ii(e[0]))&&!e.nodeType&&e!==bn},vA=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ct(i)&&!t||kg(i,1)?(s=n).push.apply(s,An(i)):n.push(i)})||n},An=function(e,t,n){return gt&&!t&&gt.selector?gt.selector(e):Ct(e)&&!n&&(iu||!Ds())?au.call((t||lh).querySelectorAll(e),0):kt(e)?vA(e,n):kg(e)?au.call(e,0):e?[e]:[]},lu=function(e){return e=An(e)[0]||Wa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return An(t,n.querySelectorAll?n:n===e?Wa("Invalid scope")||lh.createElement("div"):e)}},Bg=function(e){return e.sort(function(){return .5-Math.random()})},zg=function(e){if(ct(e))return e;var t=ii(e)?e:{each:e},n=Cr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Ct(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var p=(g||t).length,m=o[p],x,y,_,b,M,A,R,v,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,En])[1],!w){for(R=-En;R<(R=g[w++].getBoundingClientRect().left)&&w<p;);w--}for(m=o[p]=[],x=l?Math.min(w,p)*u-.5:i%w,y=w===En?0:l?p*h/w-.5:i/w|0,R=0,v=En,A=0;A<p;A++)_=A%w-x,b=y-(A/w|0),m[A]=M=c?Math.abs(c==="y"?b:_):bg(_*_+b*b),M>R&&(R=M),M<v&&(v=M);i==="random"&&Bg(m),m.max=R-v,m.min=v,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(w>p?p-1:c?c==="y"?p/w:w:Math.max(w,p/w))||0)*(i==="edges"?-1:1),m.b=p<0?s-p:s,m.u=Nt(t.amount||t.each)||0,n=n&&p<0?$g(n):n}return p=(m[f]-m.min)/m.max||0,Rt(m.b+(n?n(p):p)*m.v)+m.u}},cu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Rt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ei(n)?0:Nt(n))}},Vg=function(e,t){var n=kt(e),i,s;return!n&&ii(e)&&(i=n=e.radius||En,e.values?(e=An(e.values),(s=!Ei(e[0]))&&(i*=i)):e=cu(e.increment)),tr(t,n?ct(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=En,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Ei(o)?u:u+Nt(o)}:cu(e))},Gg=function(e,t,n,i){return tr(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},yA=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},bA=function(e,t){return function(n){return e(parseFloat(n))+(t||Nt(n))}},MA=function(e,t,n){return Wg(e,t,0,1,n)},Hg=function(e,t,n){return tr(n,function(i){return e[~~t(i)]})},SA=function r(e,t,n){var i=t-e;return kt(e)?Hg(e,r(0,e.length),t):tr(n,function(s){return(i+(s-e)%i)%i+e})},wA=function r(e,t,n){var i=t-e,s=i*2;return kt(e)?Hg(e,r(0,e.length-1),t):tr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Bo=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Tg:nu),n+=e.substr(t,i-t)+Gg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Wg=function(e,t,n,i,s){var o=t-e,a=i-n;return tr(s,function(l){return n+((l-e)/o*a||0)})},TA=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Ct(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var p=Math.min(f,~~g);return u[p](g-p)},n=t}else i||(e=Lr(kt(e)?[]:{},e));if(!u){for(l in t)dh.call(a,e,l,"get",t[l]);s=function(g){return _h(g,a)||(o?e.p:e)}}}return tr(n,s)},ap=function(e,t,n){var i=e.labels,s=En,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Cn=function(e,t,n){var i=e.vars,s=i[t],o=gt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qi.length&&ja(),a&&(gt=a),u=l?s.apply(c,l):s.call(c),gt=o,u},co=function(e){return Qi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&Cn(e,"onInterrupt"),e},is,jg=[],Xg=function(e){if(!ah()){jg.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=ct(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ko,render:_h,add:dh,kill:VA,modifier:zA,rawVars:0},o={targetTest:0,get:0,getSetter:gh,aliases:{},register:0};if(Ds(),e!==i){if(un[t])return;Rn(i,Rn(Xa(e,s),o)),Lr(i.prototype,Lr(s,Xa(e,o))),un[i.prop=t]=i,e.targetTest&&(Oa.push(i),uh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cg(t,i),e.register&&e.register(sn,i,nn)},et=255,uo={aqua:[0,et,et],lime:[0,et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,et],navy:[0,0,128],white:[et,et,et],olive:[128,128,0],yellow:[et,et,0],orange:[et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[et,0,0],pink:[et,192,203],cyan:[0,et,et],transparent:[et,et,et,0]},vc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*et+.5|0},qg=function(e,t,n){var i=e?Ei(e)?[e>>16,e>>8&et,e&et]:0:uo.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),uo[e])i=uo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&et,i&et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&et,e&et]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(nu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=vc(l+1/3,s,o),i[1]=vc(l,s,o),i[2]=vc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Sg),n&&i.length<4&&(i[3]=1),i}else i=e.match(nu)||uo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/et,o=i[1]/et,a=i[2]/et,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yg=function(e){var t=[],n=[],i=-1;return e.split(Yi).forEach(function(s){var o=s.match(ns)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},lp=function(e,t,n){var i="",s=(e+i).match(Yi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=qg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Yg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Yi,"1").split(ns),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Yi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Yi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in uo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),EA=/hsl[a]?\(/,Kg=function(e){var t=e.join(" "),n;if(Yi.lastIndex=0,Yi.test(t))return n=EA.test(t),e[1]=lp(e[1],n),e[0]=lp(e[0],n,Yg(e[1])),!0},zo,hn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function p(m){var x=r()-i,y=m===!0,_,b,M,A;if(x>e&&(n+=x-t),i+=x,M=i-n,_=M-o,(_>0||y)&&(A=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=_+(_>=s?4:s-_),b=1),y||(l=c(p)),b)for(d=0;d<a.length;d++)a[d](M,f,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Eg&&(!iu&&ah()&&(bn=iu=window,lh=bn.document||{},mn.gsap=sn,(bn.gsapVersions||(bn.gsapVersions=[])).push(sn.version),Ag(Ha||bn.GreenSockGlobals||!bn.gsap&&bn||{}),u=bn.requestAnimationFrame,jg.forEach(Xg)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},zo=1,g(2))},sleep:function(){(u?bn.cancelAnimationFrame:clearTimeout)(l),zo=0,c=ko},lagSmoothing:function(m,x){e=m||1/0,t=Math.min(x||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,x,y){var _=x?function(b,M,A,R){m(b,M,A,R),h.remove(_)}:m;return h.remove(m),a[y?"unshift":"push"](_),Ds(),_},remove:function(m,x){~(x=a.indexOf(m))&&a.splice(x,1)&&d>=x&&d--},_listeners:a},h}(),Ds=function(){return!zo&&hn.wake()},Ge={},AA=/^[\d.\-M][\d.\-,\s]/,CA=/["']/g,RA=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(CA,"").trim():+c,i=l.substr(a+1).trim();return t},PA=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},LA=function(e){var t=(e+"").split("("),n=Ge[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[RA(t[1])]:PA(e).split(",").map(Dg)):Ge._CE&&AA.test(e)?Ge._CE("",e):n},$g=function(e){return function(t){return 1-e(1-t)}},Zg=function r(e,t){for(var n=e._first,i;n;)n instanceof Qt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Cr=function(e,t){return e&&(ct(e)?e:Ge[e]||LA(e))||t},Or=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return tn(e,function(a){Ge[a]=mn[a]=s,Ge[o=a.toLowerCase()]=n;for(var l in s)Ge[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ge[a+"."+l]=s[l]}),s},Qg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/tu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*sA((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Qg(a);return s=tu/s,l.config=function(c,u){return r(e,c,u)},l},bc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Qg(n);return i.config=function(s){return r(e,s)},i};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Or(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;Or("Elastic",yc("in"),yc("out"),yc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Or("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Or("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Or("Circ",function(r){return-(bg(1-r*r)-1)});Or("Sine",function(r){return r===1?1:-rA(r*nA)+1});Or("Back",bc("in"),bc("out"),bc());Ge.SteppedEase=Ge.steps=mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-nt;return function(a){return((i*qo(0,o,a)|0)+s)*n}}};Rs.ease=Ge["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return hh+=r+","+r+"Params,"});var Jg=function(e,t){this.id=iA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Pg,this.set=t?t.getSetter:gh},Is=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ls(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),zo||hn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ls(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ds(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ml(this,n),!s._dp||s.parent||Ng(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===nt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Lg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ps(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?qa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-nt?0:this._rts,this.totalTime(qo(-Math.abs(this._delay),this._tDur,i),!0),pl(this),fA(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ds(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$n(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(en(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=lA);var i=Ut;return Ut=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,op(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,op(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(vn(this,n),en(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,en(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-nt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=ct(n)?n:Ig,a=function(){var c=i.then;i.then=null,ct(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){co(this)},r}();Rn(Is.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var Qt=function(r){yg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=en(n.sortChildren),at&&$n(n.parent||at,pi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Fg(pi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return yo(0,arguments,this),this},t.from=function(i,s,o){return yo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return yo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,vo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new _t(i,s,vn(this,o),1),this},t.call=function(i,s,o){return $n(this,_t.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new _t(i,o,vn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,vo(o).immediateRender=en(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,vo(a).immediateRender=en(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Rt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,p,m,x,y,_,b,M,A,R;if(this!==at&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,b=this._start,_=this._ts,x=!_,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Rt(u%m),u===l?(p=this._repeat,f=c):(p=~~(u/m),p&&p===u/m&&(f=c,p--),f>c&&(f=c)),M=Ps(this._tTime,m),!a&&this._tTime&&M!==p&&this._tTime-M*m-this._dur<=0&&(M=p),A&&p&1&&(f=c-f,R=1),p!==M&&!this._lock){var v=A&&M&1,w=v===(A&&p&1);if(p<M&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(R?0:Rt(p*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Cn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Zg(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=gA(this,Rt(a),Rt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!p&&(Cn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!x){y=0,g&&(u+=this._zTime=-nt);break}}d=g}else{d=this._last;for(var I=i<0?i:f;d;){if(g=d._prev,(d._act||I<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(I-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(I-d._start)*d._ts,s,o||Ut&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!x){y=0,g&&(u+=this._zTime=I?-nt:nt);break}}d=g}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-nt)._zTime=f>=a?1:-1,this._ts))return this._start=b,pl(this),this.render(i,s,o);this._onUpdate&&!s&&Cn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Qi(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Cn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ei(s)||(s=vn(this,s,i)),!(i instanceof Is)){if(kt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ct(i))return this.addLabel(i,s);if(ct(i))i=_t.delayedCall(0,i);else return this}return this!==i?$n(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-En);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof _t?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Ct(i)?this.removeLabel(i):ct(i)?this.killTweensOf(i):(dl(this,i),i===this._recent&&(this._recent=this._last),Ar(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=vn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=_t.delayedCall(0,s||ko,o);return a.data="isPause",this._hasPause=1,$n(this,a,vn(this,i))},t.removePause=function(i){var s=this._first;for(i=vn(this,i);s;)s._start===i&&s.data==="isPause"&&Qi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Gi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=An(i),l=this._first,c=Ei(s),u;l;)l instanceof _t?cA(l._targets,a)&&(c?(!Gi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=vn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=_t.to(o,Rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||nt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ls(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Rn({startAt:{time:vn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ap(this,vn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ap(this,vn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ar(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ar(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=En,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$n(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ls(o,o===at&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(at._ts&&(Lg(at,qa(i,at)),Rg=hn.frame),hn.frame>=ip){ip+=pn.autoSleep||120;var s=at._first;if((!s||!s._ts)&&pn.autoSleep&&hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hn.sleep()}}},e}(Is);Rn(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var DA=function(e,t,n,i,s,o,a){var l=new nn(this._pt,e,t,0,1,s_,null,s),c=0,u=0,h,f,d,g,p,m,x,y;for(l.b=n,l.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=Bo(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(_c)||[];h=_c.exec(i);)g=h[0],p=i.substring(c,h.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?fs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=_c.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(wg.test(i)||x)&&(l.e=0),this._pt=l,l},dh=function(e,t,n,i,s,o,a,l,c,u){ct(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:ct(h)?c?e[t.indexOf("set")||!ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=ct(h)?c?UA:i_:mh,g;if(Ct(i)&&(~i.indexOf("random(")&&(i=Bo(i)),i.charAt(1)==="="&&(g=fs(f,i)+(Nt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||uu)return!isNaN(f*i)&&i!==""?(g=new nn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?BA:r_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&ch(t,i),DA.call(this,e,t,f,i,d,l||pn.stringFilter,c))},IA=function(e,t,n,i,s){if(ct(e)&&(e=bo(e,s,t,n,i)),!ii(e)||e.style&&e.nodeType||kt(e)||Mg(e))return Ct(e)?bo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=bo(e[a],s,t,n,i);return o},e_=function(e,t,n,i,s,o){var a,l,c,u;if(un[e]&&(a=new un[e]).init(s,a.rawVars?t[e]:IA(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new nn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==is))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Gi,uu,ph=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,p=i.autoRevert,m=e._dur,x=e._startAt,y=e._targets,_=e.parent,b=_&&_.data==="nested"?_.vars.targets:y,M=e._overwrite==="auto"&&!sh,A=e.timeline,R,v,w,I,F,Y,k,O,G,K,q,z,re;if(A&&(!g||!s)&&(s="none"),e._ease=Cr(s,Rs.ease),e._yEase=d?$g(Cr(d===!0?s:d,Rs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(O=y[0]?Er(y[0]).harness:0,z=O&&i[O.prop],R=Xa(i,uh),x&&(x._zTime<0&&x.progress(1),t<0&&f&&a&&!p?x.render(-1,!0):x.revert(f&&m?Ia:aA),x._lazy=0),o){if(Qi(e._startAt=_t.set(y,Rn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!x&&en(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!a&&!p)&&e._startAt.revert(Ia),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!x){if(t&&(a=!1),w=Rn({overwrite:!1,data:"isFromStart",lazy:a&&!x&&en(l),immediateRender:a,stagger:0,parent:_},R),z&&(w[O.prop]=z),Qi(e._startAt=_t.set(y,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(Ia):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&en(l)||l&&!m,v=0;v<y.length;v++){if(F=y[v],k=F._gsap||fh(y)[v]._gsap,e._ptLookup[v]=K={},ru[k.id]&&qi.length&&ja(),q=b===y?v:b.indexOf(F),O&&(G=new O).init(F,z||R,e,q,b)!==!1&&(e._pt=I=new nn(e._pt,F,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(ce){K[ce]=I}),G.priority&&(Y=1)),!O||z)for(w in R)un[w]&&(G=e_(w,R,e,q,F,b))?G.priority&&(Y=1):K[w]=I=dh.call(e,F,w,"get",R[w],q,b,0,i.stringFilter);e._op&&e._op[v]&&e.kill(F,e._op[v]),M&&e._pt&&(Gi=e,at.killTweensOf(F,K,e.globalTime(t)),re=!e.parent,Gi=0),e._pt&&l&&(ru[k.id]=1)}Y&&o_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!re,g&&t<=0&&A.render(En,!0,!0)},OA=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return uu=1,e.vars[t]="+=0",ph(e,a),uu=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=ht(n)+Nt(u.e)),u.b&&(u.b=c.s+Nt(u.b))},NA=function(e,t){var n=e[0]?Er(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Lr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},FA=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(kt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},bo=function(e,t,n,i,s){return ct(e)?e.call(t,n,i,s):Ct(e)&&~e.indexOf("random(")?Bo(e):e},t_=hh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",n_={};tn(t_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return n_[r]=1});var _t=function(r){yg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:vo(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,x=l.yoyoEase,y=i.parent||at,_=(kt(n)||Mg(n)?Ei(n[0]):"length"in i)?[n]:An(n),b,M,A,R,v,w,I,F;if(a._targets=_.length?fh(_):Wa("GSAP target "+n+" not found. https://greensock.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ta(c)||Ta(u)){if(i=a.vars,b=a.timeline=new Qt({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:_}),b.kill(),b.parent=b._dp=pi(a),b._start=0,f||Ta(c)||Ta(u)){if(R=_.length,I=f&&zg(f),ii(f))for(v in f)~t_.indexOf(v)&&(F||(F={}),F[v]=f[v]);for(M=0;M<R;M++)A=Xa(i,n_),A.stagger=0,x&&(A.yoyoEase=x),F&&Lr(A,F),w=_[M],A.duration=+bo(c,pi(a),M,w,_),A.delay=(+bo(u,pi(a),M,w,_)||0)-a._delay,!f&&R===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),b.to(w,A,I?I(M,w,_):0),b._ease=Ge.none;b.duration()?c=u=0:a.timeline=0}else if(g){vo(Rn(b.vars.defaults,{ease:"none"})),b._ease=Cr(g.ease||i.ease||"none");var Y=0,k,O,G;if(kt(g))g.forEach(function(K){return b.to(_,K,">")}),b.duration();else{A={};for(v in g)v==="ease"||v==="easeEach"||FA(v,g[v],A,g.easeEach);for(v in A)for(k=A[v].sort(function(K,q){return K.t-q.t}),Y=0,M=0;M<k.length;M++)O=k[M],G={ease:O.e,duration:(O.t-(M?k[M-1].t:0))/100*c},G[v]=O.v,b.to(_,G,Y),Y+=G.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return d===!0&&!sh&&(Gi=pi(a),at.killTweensOf(_),Gi=0),$n(y,pi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Rt(y._time)&&en(h)&&dA(pi(a))&&y.data!=="nested")&&(a._tTime=-nt,a.render(Math.max(0,-u)||0)),m&&Fg(pi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-nt&&!u?l:i<nt?0:i,f,d,g,p,m,x,y,_,b;if(!c)mA(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,_=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,s,o);if(f=Rt(h%p),h===l?(g=this._repeat,f=c):(g=~~(h/p),g&&g===h/p&&(f=c,g--),f>c&&(f=c)),x=this._yoyo&&g&1,x&&(b=this._yEase,f=c-f),m=Ps(this._tTime,p),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(_&&this._yEase&&Zg(_,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=o=1,this.render(Rt(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ug(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!s&&!g&&(Cn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;_&&_.render(i<0?i:!f&&x?-nt:_._dur*_._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&su(this,i,s,o),Cn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Cn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&su(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Qi(this,1),!s&&!(u&&!a)&&(h||a||x)&&(Cn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){zo||hn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ph(this,l),c=this._ease(l/this._dur),OA(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(ml(this,0),this.parent||Og(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?co(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Gi&&Gi.vars.overwrite!==!0)._first||co(this),this.parent&&o!==this.timeline.totalDuration()&&Ls(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?An(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,p,m,x;if((!s||s==="all")&&hA(a,l))return s==="all"&&(this._pt=0),co(this);for(h=this._op=this._op||[],s!=="all"&&(Ct(s)&&(p={},tn(s,function(y){return p[y]=1}),s=p),s=NA(a,s)),x=a.length;x--;)if(~l.indexOf(a[x])){f=c[x],s==="all"?(h[x]=s,g=f,d={}):(d=h[x]=h[x]||{},g=s);for(p in g)m=f&&f[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&dl(this,m,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&u&&co(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return yo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return yo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return at.killTweensOf(i,s,o)},e}(Is);Rn(_t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(r){_t[r]=function(){var e=new Qt,t=au.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var mh=function(e,t,n){return e[t]=n},i_=function(e,t,n){return e[t](n)},UA=function(e,t,n,i){return e[t](i.fp,n)},kA=function(e,t,n){return e.setAttribute(t,n)},gh=function(e,t){return ct(e[t])?i_:oh(e[t])&&e.setAttribute?kA:mh},r_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},BA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},s_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_h=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zA=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},VA=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?dl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},GA=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},o_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},nn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||r_,this.d=l||this,this.set=c||mh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=GA,this.m=n,this.mt=s,this.tween=i},r}();tn(hh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return uh[r]=1});mn.TweenMax=mn.TweenLite=_t;mn.TimelineLite=mn.TimelineMax=Qt;at=new Qt({sortChildren:!1,defaults:Rs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=Kg;var Os=[],Na={},HA=[],cp=0,Mc=function(e){return(Na[e]||HA).map(function(t){return t()})},hu=function(){var e=Date.now(),t=[];e-cp>2&&(Mc("matchMediaInit"),Os.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=bn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Mc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),cp=e,Mc("matchMedia"))},a_=function(){function r(t,n){this.selector=n&&lu(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ct(n)&&(s=i,i=n,n=ct);var o=this,a=function(){var c=gt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=lu(s)),gt=o,h=i.apply(o,arguments),ct(h)&&o._r.push(h),gt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===ct?a(o):n?o[n]=a:a},e.ignore=function(n){var i=gt;gt=null,n(this),gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof _t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Is)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=Os.indexOf(this);~a&&Os.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),WA=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){ii(n)||(n={matches:n});var o=new a_(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=bn.matchMedia(n[c]),l&&(Os.indexOf(o)<0&&Os.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(hu):l.addEventListener("change",hu)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ya={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xg(i)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return at.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ct(e)&&(e=An(e)[0]);var s=Er(e||{}).get,o=n?Ig:Dg;return n==="native"&&(n=""),e&&(t?o((un[t]&&un[t].get||s)(e,t,n,i)):function(a,l,c){return o((un[a]&&un[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=An(e),e.length>1){var i=e.map(function(u){return sn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=un[t],a=Er(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;is._pt=0,h.init(e,n?u+n:u,is,0,[e]),h.render(1,h),is._pt&&_h(1,is)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=sn.to(e,Lr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return at.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cr(e.ease,Rs.ease)),rp(Rs,e||{})},config:function(e){return rp(pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!un[a]&&!mn[a]&&Wa(t+" effect requires "+a+" plugin.")}),xc[t]=function(a,l,c){return n(An(a),Rn(l||{},s),c)},o&&(Qt.prototype[t]=function(a,l,c){return this.add(xc[t](a,ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ge[e]=Cr(t)},parseEase:function(e,t){return arguments.length?Cr(e,t):Ge},getById:function(e){return at.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qt(e),i,s;for(n.smoothChildTiming=en(e.smoothChildTiming),at.remove(n),n._dp=0,n._time=n._tTime=at._time,i=at._first;i;)s=i._next,(t||!(!i._dur&&i instanceof _t&&i.vars.onComplete===i._targets[0]))&&$n(n,i,i._start-i._delay),i=s;return $n(at,n,0),n},context:function(e,t){return e?new a_(e,t):gt},matchMedia:function(e){return new WA(e)},matchMediaRefresh:function(){return Os.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||hu()},addEventListener:function(e,t){var n=Na[e]||(Na[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Na[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:SA,wrapYoyo:wA,distribute:zg,random:Gg,snap:Vg,normalize:MA,getUnit:Nt,clamp:xA,splitColor:qg,toArray:An,selector:lu,mapRange:Wg,pipe:yA,unitize:bA,interpolate:TA,shuffle:Bg},install:Ag,effects:xc,ticker:hn,updateRoot:Qt.updateRoot,plugins:un,globalTimeline:at,core:{PropTween:nn,globals:Cg,Tween:_t,Timeline:Qt,Animation:Is,getCache:Er,_removeLinkedListItem:dl,reverting:function(){return Ut},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return sh=e}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ya[r]=_t[r]});hn.add(Qt.updateRoot);is=Ya.to({},{duration:0});var jA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},XA=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=jA(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Sc=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ct(s)&&(l={},tn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}XA(a,s)}}}},sn=Ya.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Sc("roundProps",cu),Sc("modifiers"),Sc("snap",Vg))||Ya;_t.version=Qt.version=sn.version="3.11.5";Eg=1;ah()&&Ds();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var up,Hi,ds,xh,br,hp,vh,qA=function(){return typeof window<"u"},Ai={},mr=180/Math.PI,ps=Math.PI/180,Zr=Math.atan2,fp=1e8,yh=/([A-Z])/g,YA=/(left|right|width|margin|padding|x)/i,KA=/[\s,\(]\S/,Qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$A=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},QA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},l_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},c_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},JA=function(e,t,n){return e.style[t]=n},eC=function(e,t,n){return e.style.setProperty(t,n)},tC=function(e,t,n){return e._gsap[t]=n},nC=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},iC=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},rC=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},lt="transform",Vn=lt+"Origin",sC=function r(e,t){var n=this,i=this.target,s=i.style;if(e in Ai){if(this.tfm=this.tfm||{},e!=="transform")e=Qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=gi(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:gi(i,e);else return Qn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(lt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Vn,t,"")),e=lt}(s||t)&&this.props.push(e,t,s[e])},u_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},oC=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(yh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=vh(),(!s||!s.isStart)&&!n[lt]&&(u_(n),i.uncache=1)}},h_=function(e,t){var n={target:e,props:[],revert:oC,save:sC};return e._gsap||sn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},f_,du=function(e,t){var n=Hi.createElementNS?Hi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hi.createElement(e);return n.style?n:Hi.createElement(e)},ti=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(yh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ns(t)||t,1)||""},dp="O,Moz,ms,Ms,Webkit".split(","),Ns=function(e,t,n){var i=t||br,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(dp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?dp[o]:"")+e},pu=function(){qA()&&window.document&&(up=window,Hi=up.document,ds=Hi.documentElement,br=du("div")||{style:{}},du("div"),lt=Ns(lt),Vn=lt+"Origin",br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",f_=!!Ns("perspective"),vh=sn.core.reverting,xh=1)},wc=function r(e){var t=du("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ds.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ds.removeChild(t),this.style.cssText=s,o},pp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},d_=function(e){var t;try{t=e.getBBox()}catch{t=wc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===wc||(t=wc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+pp(e,["x","cx","x1"])||0,y:+pp(e,["y","cy","y1"])||0,width:0,height:0}:t},p_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&d_(e))},Vo=function(e,t){if(t){var n=e.style;t in Ai&&t!==Vn&&(t=lt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(yh,"-$1").toLowerCase())):n.removeAttribute(t)}},Wi=function(e,t,n,i,s,o){var a=new nn(e._pt,t,n,0,1,o?c_:l_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},mp={deg:1,rad:1,turn:1},aC={grid:1,flex:1},Ji=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=br.style,l=YA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,p,m,x;return i===o||!s||mp[i]||mp[o]?s:(o!=="px"&&!f&&(s=r(e,t,n,"px")),x=e.getCTM&&p_(e),(d||o==="%")&&(Ai[t]||~t.indexOf("adius"))?(g=x?e.getBBox()[l?"width":"height"]:e[u],ht(d?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,x&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Hi||!p.appendChild)&&(p=Hi.body),m=p._gsap,m&&d&&m.width&&l&&m.time===hn.time&&!m.uncache?ht(s/m.width*h):((d||o==="%")&&!aC[ti(p,"display")]&&(a.position=ti(e,"position")),p===e&&(a.position="static"),p.appendChild(br),g=br[u],p.removeChild(br),a.position="absolute",l&&d&&(m=Er(p),m.time=hn.time,m.width=p[u]),ht(f?g*s/h:g&&s?h/g*s:0))))},gi=function(e,t,n,i){var s;return xh||pu(),t in Qn&&t!=="transform"&&(t=Qn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ai[t]&&t!=="transform"?(s=Ho(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$a(ti(e,Vn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ka[t]&&Ka[t](e,t,n)||ti(e,t)||Pg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ji(e,t,s,n)+n:s},lC=function(e,t,n,i){if(!n||n==="none"){var s=Ns(t,e,1),o=s&&ti(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ti(e,"borderTopColor"))}var a=new nn(this._pt,e.style,t,0,1,s_),l=0,c=0,u,h,f,d,g,p,m,x,y,_,b,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ti(e,t)||i,e.style[t]=n),u=[n,i],Kg(u),n=u[0],i=u[1],f=n.match(ns)||[],M=i.match(ns)||[],M.length){for(;h=ns.exec(i);)m=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(p=f[c++]||"")&&(d=parseFloat(p)||0,b=p.substr((d+"").length),m.charAt(1)==="="&&(m=fs(d,m)+b),x=parseFloat(m),_=m.substr((x+"").length),l=ns.lastIndex-_.length,_||(_=_||pn.units[t]||b,l===i.length&&(i+=_,a.e+=_)),b!==_&&(d=Ji(e,t,p,_)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:x-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?c_:l_;return wg.test(i)&&(a.e=0),this._pt=a,a},gp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cC=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=gp[n]||n,t[1]=gp[i]||i,t.join(" ")},uC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ai[a]&&(l=1,a=a==="transformOrigin"?Vn:lt),Vo(n,a);l&&(Vo(n,lt),o&&(o.svg&&n.removeAttribute("transform"),Ho(n,1),o.uncache=1,u_(i)))}},Ka={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new nn(e._pt,t,n,0,0,uC);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Go=[1,0,0,1,0,0],m_={},g_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_p=function(e){var t=ti(e,lt);return g_(t)?Go:t.substr(7).match(Sg).map(ht)},bh=function(e,t){var n=e._gsap||Er(e),i=e.style,s=_p(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Go:s):(s===Go&&!e.offsetParent&&e!==ds&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ds.appendChild(e)),s=_p(e),l?i.display=l:Vo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ds.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},mu=function(e,t,n,i,s,o){var a=e._gsap,l=s||bh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],p=l[2],m=l[3],x=l[4],y=l[5],_=t.split(" "),b=parseFloat(_[0])||0,M=parseFloat(_[1])||0,A,R,v,w;n?l!==Go&&(R=d*m-g*p)&&(v=b*(m/R)+M*(-p/R)+(p*y-m*x)/R,w=b*(-g/R)+M*(d/R)-(d*y-g*x)/R,b=v,M=w):(A=d_(e),b=A.x+(~_[0].indexOf("%")?b/100*A.width:b),M=A.y+(~(_[1]||_[0]).indexOf("%")?M/100*A.height:M)),i||i!==!1&&a.smooth?(x=b-c,y=M-u,a.xOffset=h+(x*d+y*p)-x,a.yOffset=f+(x*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Vn]="0px 0px",o&&(Wi(o,a,"xOrigin",c,b),Wi(o,a,"yOrigin",u,M),Wi(o,a,"xOffset",h,a.xOffset),Wi(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+M)},Ho=function(e,t){var n=e._gsap||new Jg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ti(e,Vn)||"0",u,h,f,d,g,p,m,x,y,_,b,M,A,R,v,w,I,F,Y,k,O,G,K,q,z,re,ce,be,W,ue,me,P;return u=h=f=p=m=x=y=_=b=0,d=g=1,n.svg=!!(e.getCTM&&p_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[lt]!=="none"?l[lt]:"")),i.scale=i.rotate=i.translate="none"),R=bh(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),mu(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,R)),M=n.xOrigin||0,A=n.yOrigin||0,R!==Go&&(F=R[0],Y=R[1],k=R[2],O=R[3],u=G=R[4],h=K=R[5],R.length===6?(d=Math.sqrt(F*F+Y*Y),g=Math.sqrt(O*O+k*k),p=F||Y?Zr(Y,F)*mr:0,y=k||O?Zr(k,O)*mr+p:0,y&&(g*=Math.abs(Math.cos(y*ps))),n.svg&&(u-=M-(M*F+A*k),h-=A-(M*Y+A*O))):(P=R[6],ue=R[7],ce=R[8],be=R[9],W=R[10],me=R[11],u=R[12],h=R[13],f=R[14],v=Zr(P,W),m=v*mr,v&&(w=Math.cos(-v),I=Math.sin(-v),q=G*w+ce*I,z=K*w+be*I,re=P*w+W*I,ce=G*-I+ce*w,be=K*-I+be*w,W=P*-I+W*w,me=ue*-I+me*w,G=q,K=z,P=re),v=Zr(-k,W),x=v*mr,v&&(w=Math.cos(-v),I=Math.sin(-v),q=F*w-ce*I,z=Y*w-be*I,re=k*w-W*I,me=O*I+me*w,F=q,Y=z,k=re),v=Zr(Y,F),p=v*mr,v&&(w=Math.cos(v),I=Math.sin(v),q=F*w+Y*I,z=G*w+K*I,Y=Y*w-F*I,K=K*w-G*I,F=q,G=z),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,x=180-x),d=ht(Math.sqrt(F*F+Y*Y+k*k)),g=ht(Math.sqrt(K*K+P*P)),v=Zr(G,K),y=Math.abs(v)>2e-4?v*mr:0,b=me?1/(me<0?-me:me):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!g_(ti(e,lt)),q&&e.setAttribute("transform",q))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ht(d),n.scaleY=ht(g),n.rotation=ht(p)+a,n.rotationX=ht(m)+a,n.rotationY=ht(x)+a,n.skewX=y+a,n.skewY=_+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Vn]=$a(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?fC:f_?__:hC,n.uncache=0,n},$a=function(e){return(e=e.split(" "))[0]+" "+e[1]},Tc=function(e,t,n){var i=Nt(t);return ht(parseFloat(t)+parseFloat(Ji(e,"x",n+"px",i)))+i},hC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,__(e,t)},ur="0deg",so="0px",hr=") ",__=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,x=n.force3D,y=n.target,_=n.zOrigin,b="",M=x==="auto"&&e&&e!==1||x===!0;if(_&&(h!==ur||u!==ur)){var A=parseFloat(u)*ps,R=Math.sin(A),v=Math.cos(A),w;A=parseFloat(h)*ps,w=Math.cos(A),o=Tc(y,o,R*w*-_),a=Tc(y,a,-Math.sin(A)*-_),l=Tc(y,l,v*w*-_+_)}m!==so&&(b+="perspective("+m+hr),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(M||o!==so||a!==so||l!==so)&&(b+=l!==so||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hr),c!==ur&&(b+="rotate("+c+hr),u!==ur&&(b+="rotateY("+u+hr),h!==ur&&(b+="rotateX("+h+hr),(f!==ur||d!==ur)&&(b+="skew("+f+", "+d+hr),(g!==1||p!==1)&&(b+="scale("+g+", "+p+hr),y.style[lt]=b||"translate(0, 0)"},fC=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,x=n.yOffset,y=n.forceCSS,_=parseFloat(o),b=parseFloat(a),M,A,R,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ps,c*=ps,M=Math.cos(l)*h,A=Math.sin(l)*h,R=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=ps,w=Math.tan(c-u),w=Math.sqrt(1+w*w),R*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,A*=w)),M=ht(M),A=ht(A),R=ht(R),v=ht(v)):(M=h,v=f,A=R=0),(_&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(_=Ji(d,"x",o,"px"),b=Ji(d,"y",a,"px")),(g||p||m||x)&&(_=ht(_+g-(g*M+p*R)+m),b=ht(b+p-(g*A+p*v)+x)),(i||s)&&(w=d.getBBox(),_=ht(_+i/100*w.width),b=ht(b+s/100*w.height)),w="matrix("+M+","+A+","+R+","+v+","+_+","+b+")",d.setAttribute("transform",w),y&&(d.style[lt]=w)},dC=function(e,t,n,i,s){var o=360,a=Ct(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?mr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*fp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*fp)%o-~~(c/o)*o)),e._pt=f=new nn(e._pt,t,n,i,c,$A),f.e=u,f.u="deg",e._props.push(n),f},xp=function(e,t){for(var n in t)e[n]=t[n];return e},pC=function(e,t,n){var i=xp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[lt]=t,a=Ho(n,1),Vo(n,lt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[lt],o[lt]=t,a=Ho(n,1),o[lt]=c);for(l in Ai)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Nt(c),g=Nt(u),h=d!==g?Ji(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new nn(e._pt,a,l,h,f-h,fu),e._pt.u=g||0,e._props.push(l));xp(a,i)};tn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ka[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return gi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,p){return d[g]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,h)}});var x_={name:"css",register:pu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,p,m,x,y,_,b,M,A,R,v;xh||pu(),this.styles=this.styles||h_(e),v=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(un[p]&&e_(p,t,n,i,e,s)))){if(d=typeof u,g=Ka[p],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Bo(u)),g)g(this,e,p,u,n)&&(R=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Yi.lastIndex=0,Yi.test(c)||(m=Nt(c),x=Nt(u)),x?m!==x&&(c=Ji(e,p,c,x)+x):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,p),o.push(p),v.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],Ct(c)&&~c.indexOf("random(")&&(c=Bo(c)),Nt(c+"")||(c+=pn.units[p]||Nt(gi(e,p))||""),(c+"").charAt(1)==="="&&(c=gi(e,p))):c=gi(e,p),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),p in Qn&&(p==="autoAlpha"&&(f===1&&gi(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),Wi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Qn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),_=p in Ai,_){if(this.styles.save(p),b||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ho(e,t.parseTransform),A=t.smoothOrigin!==!1&&M.smooth,b=this._pt=new nn(this._pt,a,lt,0,1,M.renderTransform,M,0,-1),b.dep=1),p==="scale")this._pt=new nn(this._pt,M,"scaleY",M.scaleY,(y?fs(M.scaleY,y+h):h)-M.scaleY||0,fu),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){v.push(Vn,0,a[Vn]),u=cC(u),M.svg?mu(e,u,0,A,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==M.zOrigin&&Wi(this,M,"zOrigin",M.zOrigin,x),Wi(this,a,p,$a(c),$a(u)));continue}else if(p==="svgOrigin"){mu(e,u,1,A,0,this);continue}else if(p in m_){dC(this,M,p,f,y?fs(f,y+u):u);continue}else if(p==="smoothOrigin"){Wi(this,M,"smooth",M.smooth,u);continue}else if(p==="force3D"){M[p]=u;continue}else if(p==="transform"){pC(this,u,e);continue}}else p in a||(p=Ns(p)||p);if(_||(h||h===0)&&(f||f===0)&&!KA.test(u)&&p in a)m=(c+"").substr((f+"").length),h||(h=0),x=Nt(u)||(p in pn.units?pn.units[p]:m),m!==x&&(f=Ji(e,p,c,x)),this._pt=new nn(this._pt,_?M:a,p,f,(y?fs(f,y+h):h)-f,!_&&(x==="px"||p==="zIndex")&&t.autoRound!==!1?QA:fu),this._pt.u=x||0,m!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=ZA);else if(p in a)lC.call(this,e,p,c,y?y+u:u);else if(p in e)this.add(e,p,c||e[p],y?y+u:u,i,s);else if(p!=="parseTransform"){ch(p,u);continue}_||(p in a?v.push(p,0,a[p]):v.push(p,1,c||e[p])),o.push(p)}}R&&o_(this)},render:function(e,t){if(t.tween._time||!vh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gi,aliases:Qn,getSetter:function(e,t,n){var i=Qn[t];return i&&i.indexOf(",")<0&&(t=i),t in Ai&&t!==Vn&&(e._gsap.x||gi(e,"x"))?n&&hp===n?t==="scale"?nC:tC:(hp=n||{})&&(t==="scale"?iC:rC):e.style&&!oh(e.style[t])?JA:~t.indexOf("-")?eC:gh(e,t)},core:{_removeProperty:Vo,_getMatrix:bh}};sn.utils.checkPrefix=Ns;sn.core.getStyleSaver=h_;(function(r,e,t,n){var i=tn(r+","+e+","+t,function(s){Ai[s]=1});tn(e,function(s){pn.units[s]="deg",m_[s]=1}),Qn[i[13]]=r+","+e,tn(n,function(s){var o=s.split(":");Qn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){pn.units[r]="px"});sn.registerPlugin(x_);var v_=sn.registerPlugin(x_)||sn;v_.core.Tween;class mC{constructor(){yl(this,"MoveEvent",e=>{const t=new Pe;t.x=e.clientX/window.innerWidth*2-1,t.y=-(e.clientY/window.innerHeight)*2+1,Ga.instance.setFromCamera(t,us.instance);const n=Ga.instance.intersectObject(this.scene,!0);if(n.length>0&&this.currentMoveObject!=n[0].object){const i=n[0].object,s=new bi({color:16711680});this.child.material=s,this.currentMoveObject=i}});this.FishPondCollection=[],this.fishObject=new ot,this.currentMoveObject=null,this.fishPondNames=["polySurface312-lambert1","polySurface317-lambert1","polySurface359-lambert1","polySurface351-lambert1","polySurface357-lambert1","polySurface340-lambert1"],this.Lightstrip=[],new ME().setDRACOLoader(new eA().setDecoderPath("/draco/gltf/").setDecoderConfig({type:"js"}).preload()).load("/model/yutang.glb",e=>{e.scene.traverse(s=>{s.isMesh&&this.fishPondNames.includes(s.name)&&(this.child=s,this.FishPondCollection.push(s))});const t=new bi({color:16711680}),n=new Vs(10,10,10),i=new Jt(n,t);i.layers.set(1),i.layers.enable(1),i.name="boxName",Uo.addChild(i),rh.init(e.scene),Uo.addChild(e.scene),this.scene=e.scene})}addMoveListner(){window.addEventListener("pointermove",this.MoveEvent)}}const gC=`    attribute float Psize;\r
    varying float vSize;\r
    uniform float uTime;\r
    void main(){\r
        vec4 viewPosition = viewMatrix * modelMatrix * vec4 (position,1);\r
        gl_Position = projectionMatrix * viewPosition;    \r
\r
        vSize = Psize - uTime;\r
        if(vSize < 0.0) {\r
            vSize = 5000.0 + vSize;\r
        };\r
\r
        vSize = (vSize - 3000.0) / 750.0;\r
        gl_PointSize = vSize ;\r
    }`,_C=`     varying float vSize;\r
    void main(){\r
          if(vSize > 0.0) {\r
               float distanceToCenture = distance(gl_PointCoord,vec2(0.5,0.5));\r
               float strength = 1.0 - (distanceToCenture * 2.0);\r
                vec3 mixColor = mix(vec3(0.3,0.52,1.0),vec3(1.0,1.0,1.0),vSize / 8.0);\r
               gl_FragColor = vec4(mixColor,strength);\r
          }else{\r
               gl_FragColor = vec4(0.0,0.0,0.0,0.0);\r
          }\r
    }`;class xC{constructor(){this.instance=null,this.curvePosition=[new N(0,2,0),new N(0,1e3,0)],this.flyLights=[]}init(){this.curve=new E1(this.curvePosition),this.points=this.curve.getPoints(5e3);const e=new Float32Array(this.points.length);for(let t=0;t<this.points.length;t++)e[t]=t;return this.geometry=new gn().setFromPoints(this.points),this.geometry.setAttribute("Psize",new At(e,1)),this.material=new qt({vertexShader:gC,fragmentShader:_C,transparent:!0,side:Tn,uniforms:{uTime:{value:0}}}),this.mesh=new lg(this.geometry,this.material),this.animate(this.material),this.mesh}animate(e){v_.to(e.uniforms.uTime,{value:5e3,duration:5,repeat:-1,delay:Math.random()*10})}clone(){for(let e=0;e<10;e++){const t=this.init(),n=2*Math.PI*(.5-Math.random());let i=1200*Math.sin(n),s=1200*Math.cos(n);t.position.set(i,2,s),Uo.instance.add(t)}}}const vC=new xC;const yC={__name:"scenePage",setup(r){new mC,vC.clone();const e=Up(null);return Jp(()=>{e.value.appendChild(nh.instance.domElement),_g()}),(t,n)=>(Ou(),um("div",{class:"scene_page",ref_key:"sceneDiv",ref:e},null,512))}},bC=Cm(yC,[["__scopeId","data-v-5f8be246"]]);function MC(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}MC();const SC={class:"city",id:"city"},wC={__name:"HomeView",setup(r){return(e,t)=>(Ou(),um("div",SC,[fn(bC)]))}},TC=Qv({history:mv("/"),routes:[{path:"/",name:"home",component:wC},{path:"/about",name:"about",component:()=>ry(()=>import("./AboutView-8585b2c6.js"),["assets/AboutView-8585b2c6.js","assets/AboutView-4d995ba2.css"])}]});const y_=$x(ty);y_.use(TC);y_.mount("#app");export{Cm as _,fm as a,um as c,Ou as o};
