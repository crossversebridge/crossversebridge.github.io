import{aK as We,aL as nt,ay as it}from"./index-e47b9852.js";const Ae=i=>typeof i=="object"&&i!==null,J=new WeakMap,pe=new WeakSet,ot=(i=Object.is,c=(y,I)=>new Proxy(y,I),l=y=>Ae(y)&&!pe.has(y)&&(Array.isArray(y)||!(Symbol.iterator in y))&&!(y instanceof WeakMap)&&!(y instanceof WeakSet)&&!(y instanceof Error)&&!(y instanceof Number)&&!(y instanceof Date)&&!(y instanceof String)&&!(y instanceof RegExp)&&!(y instanceof ArrayBuffer),h=y=>{switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:throw y}},p=new WeakMap,d=(y,I,B=h)=>{const L=p.get(y);if((L==null?void 0:L[0])===I)return L[1];const U=Array.isArray(y)?[]:Object.create(Object.getPrototypeOf(y));return We(U,!0),p.set(y,[I,U]),Reflect.ownKeys(y).forEach(P=>{if(Object.getOwnPropertyDescriptor(U,P))return;const T=Reflect.get(y,P),G={value:T,enumerable:!0,configurable:!0};if(pe.has(T))We(T,!1);else if(T instanceof Promise)delete G.value,G.get=()=>B(T);else if(J.has(T)){const[D,ce]=J.get(T);G.value=d(D,ce(),B)}Object.defineProperty(U,P,G)}),U},f=new WeakMap,s=[1,1],E=y=>{if(!Ae(y))throw new Error("object required");const I=f.get(y);if(I)return I;let B=s[0];const L=new Set,U=(x,m=++s[0])=>{B!==m&&(B=m,L.forEach(w=>w(x,m)))};let P=s[1];const T=(x=++s[1])=>(P!==x&&!L.size&&(P=x,D.forEach(([m])=>{const w=m[1](x);w>B&&(B=w)})),B),G=x=>(m,w)=>{const _=[...m];_[1]=[x,..._[1]],U(_,w)},D=new Map,ce=(x,m)=>{if(L.size){const w=m[3](G(x));D.set(x,[m,w])}else D.set(x,[m])},ae=x=>{var m;const w=D.get(x);w&&(D.delete(x),(m=w[1])==null||m.call(w))},ge=x=>(L.add(x),L.size===1&&D.forEach(([w,_],H)=>{const Y=w[3](G(H));D.set(H,[w,Y])}),()=>{L.delete(x),L.size===0&&D.forEach(([w,_],H)=>{_&&(_(),D.set(H,[w]))})}),k=Array.isArray(y)?[]:Object.create(Object.getPrototypeOf(y)),Q=c(k,{deleteProperty(x,m){const w=Reflect.get(x,m);ae(m);const _=Reflect.deleteProperty(x,m);return _&&U(["delete",[m],w]),_},set(x,m,w,_){const H=Reflect.has(x,m),Y=Reflect.get(x,m,_);if(H&&(i(Y,w)||f.has(w)&&i(Y,f.get(w))))return!0;ae(m),Ae(w)&&(w=nt(w)||w);let Z=w;if(w instanceof Promise)w.then($=>{w.status="fulfilled",w.value=$,U(["resolve",[m],$])}).catch($=>{w.status="rejected",w.reason=$,U(["reject",[m],$])});else{!J.has(w)&&l(w)&&(Z=E(w));const $=!pe.has(Z)&&J.get(Z);$&&ce(m,$)}return Reflect.set(x,m,Z,_),U(["set",[m],w,Y]),!0}});f.set(y,Q);const Ee=[k,T,d,ge];return J.set(Q,Ee),Reflect.ownKeys(y).forEach(x=>{const m=Object.getOwnPropertyDescriptor(y,x);"value"in m&&(Q[x]=y[x],delete m.value,delete m.writable),Object.defineProperty(k,x,m)}),Q})=>[E,J,pe,i,c,l,h,p,d,f,s],[st]=ot();function X(i={}){return st(i)}function re(i,c,l){const h=J.get(i);let p;const d=[],f=h[3];let s=!1;const y=f(I=>{if(d.push(I),l){c(d.splice(0));return}p||(p=Promise.resolve().then(()=>{p=void 0,s&&c(d.splice(0))}))});return s=!0,()=>{s=!1,y()}}function ut(i,c){const l=J.get(i),[h,p,d]=l;return d(h,p(),c)}var Ve={},we={};we.byteLength=lt;we.toByteArray=ht;we.fromByteArray=yt;var z=[],N=[],ct=typeof Uint8Array<"u"?Uint8Array:Array,Ue="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var oe=0,at=Ue.length;oe<at;++oe)z[oe]=Ue[oe],N[Ue.charCodeAt(oe)]=oe;N["-".charCodeAt(0)]=62;N["_".charCodeAt(0)]=63;function Ke(i){var c=i.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=i.indexOf("=");l===-1&&(l=c);var h=l===c?0:4-l%4;return[l,h]}function lt(i){var c=Ke(i),l=c[0],h=c[1];return(l+h)*3/4-h}function ft(i,c,l){return(c+l)*3/4-l}function ht(i){var c,l=Ke(i),h=l[0],p=l[1],d=new ct(ft(i,h,p)),f=0,s=p>0?h-4:h,E;for(E=0;E<s;E+=4)c=N[i.charCodeAt(E)]<<18|N[i.charCodeAt(E+1)]<<12|N[i.charCodeAt(E+2)]<<6|N[i.charCodeAt(E+3)],d[f++]=c>>16&255,d[f++]=c>>8&255,d[f++]=c&255;return p===2&&(c=N[i.charCodeAt(E)]<<2|N[i.charCodeAt(E+1)]>>4,d[f++]=c&255),p===1&&(c=N[i.charCodeAt(E)]<<10|N[i.charCodeAt(E+1)]<<4|N[i.charCodeAt(E+2)]>>2,d[f++]=c>>8&255,d[f++]=c&255),d}function pt(i){return z[i>>18&63]+z[i>>12&63]+z[i>>6&63]+z[i&63]}function dt(i,c,l){for(var h,p=[],d=c;d<l;d+=3)h=(i[d]<<16&16711680)+(i[d+1]<<8&65280)+(i[d+2]&255),p.push(pt(h));return p.join("")}function yt(i){for(var c,l=i.length,h=l%3,p=[],d=16383,f=0,s=l-h;f<s;f+=d)p.push(dt(i,f,f+d>s?s:f+d));return h===1?(c=i[l-1],p.push(z[c>>2]+z[c<<4&63]+"==")):h===2&&(c=(i[l-2]<<8)+i[l-1],p.push(z[c>>10]+z[c>>4&63]+z[c<<2&63]+"=")),p.join("")}var Ce={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Ce.read=function(i,c,l,h,p){var d,f,s=p*8-h-1,E=(1<<s)-1,y=E>>1,I=-7,B=l?p-1:0,L=l?-1:1,U=i[c+B];for(B+=L,d=U&(1<<-I)-1,U>>=-I,I+=s;I>0;d=d*256+i[c+B],B+=L,I-=8);for(f=d&(1<<-I)-1,d>>=-I,I+=h;I>0;f=f*256+i[c+B],B+=L,I-=8);if(d===0)d=1-y;else{if(d===E)return f?NaN:(U?-1:1)*(1/0);f=f+Math.pow(2,h),d=d-y}return(U?-1:1)*f*Math.pow(2,d-h)};Ce.write=function(i,c,l,h,p,d){var f,s,E,y=d*8-p-1,I=(1<<y)-1,B=I>>1,L=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,U=h?0:d-1,P=h?1:-1,T=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(s=isNaN(c)?1:0,f=I):(f=Math.floor(Math.log(c)/Math.LN2),c*(E=Math.pow(2,-f))<1&&(f--,E*=2),f+B>=1?c+=L/E:c+=L*Math.pow(2,1-B),c*E>=2&&(f++,E/=2),f+B>=I?(s=0,f=I):f+B>=1?(s=(c*E-1)*Math.pow(2,p),f=f+B):(s=c*Math.pow(2,B-1)*Math.pow(2,p),f=0));p>=8;i[l+U]=s&255,U+=P,s/=256,p-=8);for(f=f<<p|s,y+=p;y>0;i[l+U]=f&255,U+=P,f/=256,y-=8);i[l+U-P]|=T*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const c=we,l=Ce,h=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=s,i.SlowBuffer=ce,i.INSPECT_MAX_BYTES=50;const p=2147483647;i.kMaxLength=p,s.TYPED_ARRAY_SUPPORT=d(),!s.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function d(){try{const r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function f(r){if(r>p)throw new RangeError('The value "'+r+'" is invalid for option "size"');const e=new Uint8Array(r);return Object.setPrototypeOf(e,s.prototype),e}function s(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return B(r)}return E(r,e,t)}s.poolSize=8192;function E(r,e,t){if(typeof r=="string")return L(r,e);if(ArrayBuffer.isView(r))return P(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(v(r,ArrayBuffer)||r&&v(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(v(r,SharedArrayBuffer)||r&&v(r.buffer,SharedArrayBuffer)))return T(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return s.from(n,e,t);const o=G(r);if(o)return o;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return s.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}s.from=function(r,e,t){return E(r,e,t)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function y(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function I(r,e,t){return y(r),r<=0?f(r):e!==void 0?typeof t=="string"?f(r).fill(e,t):f(r).fill(e):f(r)}s.alloc=function(r,e,t){return I(r,e,t)};function B(r){return y(r),f(r<0?0:D(r)|0)}s.allocUnsafe=function(r){return B(r)},s.allocUnsafeSlow=function(r){return B(r)};function L(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!s.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const t=ae(r,e)|0;let n=f(t);const o=n.write(r,e);return o!==t&&(n=n.slice(0,o)),n}function U(r){const e=r.length<0?0:D(r.length)|0,t=f(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}function P(r){if(v(r,Uint8Array)){const e=new Uint8Array(r);return T(e.buffer,e.byteOffset,e.byteLength)}return U(r)}function T(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(n,s.prototype),n}function G(r){if(s.isBuffer(r)){const e=D(r.length)|0,t=f(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||Be(r.length)?f(0):U(r);if(r.type==="Buffer"&&Array.isArray(r.data))return U(r.data)}function D(r){if(r>=p)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+p.toString(16)+" bytes");return r|0}function ce(r){return+r!=r&&(r=0),s.alloc(+r)}s.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==s.prototype},s.compare=function(e,t){if(v(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),v(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,o=t.length;for(let u=0,a=Math.min(n,o);u<a;++u)if(e[u]!==t[u]){n=e[u],o=t[u];break}return n<o?-1:o<n?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return s.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const o=s.allocUnsafe(t);let u=0;for(n=0;n<e.length;++n){let a=e[n];if(v(a,Uint8Array))u+a.length>o.length?(s.isBuffer(a)||(a=s.from(a)),a.copy(o,u)):Uint8Array.prototype.set.call(o,a,u);else if(s.isBuffer(a))a.copy(o,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=a.length}return o};function ae(r,e){if(s.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||v(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);const t=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Ie(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Oe(r).length;default:if(o)return n?-1:Ie(r).length;e=(""+e).toLowerCase(),o=!0}}s.byteLength=ae;function ge(r,e,t){let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Ye(this,e,t);case"utf8":case"utf-8":return Y(this,e,t);case"ascii":return Ge(this,e,t);case"latin1":case"binary":return He(this,e,t);case"base64":return H(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return qe(this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}s.prototype._isBuffer=!0;function k(r,e,t){const n=r[e];r[e]=r[t],r[t]=n}s.prototype.swap16=function(){const e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)k(this,t,t+1);return this},s.prototype.swap32=function(){const e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)k(this,t,t+3),k(this,t+1,t+2);return this},s.prototype.swap64=function(){const e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)k(this,t,t+7),k(this,t+1,t+6),k(this,t+2,t+5),k(this,t+3,t+4);return this},s.prototype.toString=function(){const e=this.length;return e===0?"":arguments.length===0?Y(this,0,e):ge.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:s.compare(this,e)===0},s.prototype.inspect=function(){let e="";const t=i.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},h&&(s.prototype[h]=s.prototype.inspect),s.prototype.compare=function(e,t,n,o,u){if(v(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),o===void 0&&(o=0),u===void 0&&(u=this.length),t<0||n>e.length||o<0||u>this.length)throw new RangeError("out of range index");if(o>=u&&t>=n)return 0;if(o>=u)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,o>>>=0,u>>>=0,this===e)return 0;let a=u-o,g=n-t;const b=Math.min(a,g),F=this.slice(o,u),C=e.slice(t,n);for(let A=0;A<b;++A)if(F[A]!==C[A]){a=F[A],g=C[A];break}return a<g?-1:g<a?1:0};function me(r,e,t,n,o){if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Be(t)&&(t=o?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(o)return-1;t=r.length-1}else if(t<0)if(o)t=0;else return-1;if(typeof e=="string"&&(e=s.from(e,n)),s.isBuffer(e))return e.length===0?-1:Q(r,e,t,n,o);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Q(r,[e],t,n,o);throw new TypeError("val must be string, number or Buffer")}function Q(r,e,t,n,o){let u=1,a=r.length,g=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||e.length<2)return-1;u=2,a/=2,g/=2,t/=2}function b(C,A){return u===1?C[A]:C.readUInt16BE(A*u)}let F;if(o){let C=-1;for(F=t;F<a;F++)if(b(r,F)===b(e,C===-1?0:F-C)){if(C===-1&&(C=F),F-C+1===g)return C*u}else C!==-1&&(F-=F-C),C=-1}else for(t+g>a&&(t=a-g),F=t;F>=0;F--){let C=!0;for(let A=0;A<g;A++)if(b(r,F+A)!==b(e,A)){C=!1;break}if(C)return F}return-1}s.prototype.includes=function(e,t,n){return this.indexOf(e,t,n)!==-1},s.prototype.indexOf=function(e,t,n){return me(this,e,t,n,!0)},s.prototype.lastIndexOf=function(e,t,n){return me(this,e,t,n,!1)};function Ee(r,e,t,n){t=Number(t)||0;const o=r.length-t;n?(n=Number(n),n>o&&(n=o)):n=o;const u=e.length;n>u/2&&(n=u/2);let a;for(a=0;a<n;++a){const g=parseInt(e.substr(a*2,2),16);if(Be(g))return a;r[t+a]=g}return a}function x(r,e,t,n){return he(Ie(e,r.length-t),r,t,n)}function m(r,e,t,n){return he(Ze(e),r,t,n)}function w(r,e,t,n){return he(Oe(e),r,t,n)}function _(r,e,t,n){return he(et(e,r.length-t),r,t,n)}s.prototype.write=function(e,t,n,o){if(t===void 0)o="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")o=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,o===void 0&&(o="utf8")):(o=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const u=this.length-t;if((n===void 0||n>u)&&(n=u),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let a=!1;for(;;)switch(o){case"hex":return Ee(this,e,t,n);case"utf8":case"utf-8":return x(this,e,t,n);case"ascii":case"latin1":case"binary":return m(this,e,t,n);case"base64":return w(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,e,t,n);default:if(a)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),a=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(r,e,t){return e===0&&t===r.length?c.fromByteArray(r):c.fromByteArray(r.slice(e,t))}function Y(r,e,t){t=Math.min(r.length,t);const n=[];let o=e;for(;o<t;){const u=r[o];let a=null,g=u>239?4:u>223?3:u>191?2:1;if(o+g<=t){let b,F,C,A;switch(g){case 1:u<128&&(a=u);break;case 2:b=r[o+1],(b&192)===128&&(A=(u&31)<<6|b&63,A>127&&(a=A));break;case 3:b=r[o+1],F=r[o+2],(b&192)===128&&(F&192)===128&&(A=(u&15)<<12|(b&63)<<6|F&63,A>2047&&(A<55296||A>57343)&&(a=A));break;case 4:b=r[o+1],F=r[o+2],C=r[o+3],(b&192)===128&&(F&192)===128&&(C&192)===128&&(A=(u&15)<<18|(b&63)<<12|(F&63)<<6|C&63,A>65535&&A<1114112&&(a=A))}}a===null?(a=65533,g=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),o+=g}return $(n)}const Z=4096;function $(r){const e=r.length;if(e<=Z)return String.fromCharCode.apply(String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Z));return t}function Ge(r,e,t){let n="";t=Math.min(r.length,t);for(let o=e;o<t;++o)n+=String.fromCharCode(r[o]&127);return n}function He(r,e,t){let n="";t=Math.min(r.length,t);for(let o=e;o<t;++o)n+=String.fromCharCode(r[o]);return n}function Ye(r,e,t){const n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let o="";for(let u=e;u<t;++u)o+=tt[r[u]];return o}function qe(r,e,t){const n=r.slice(e,t);let o="";for(let u=0;u<n.length-1;u+=2)o+=String.fromCharCode(n[u]+n[u+1]*256);return o}s.prototype.slice=function(e,t){const n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);const o=this.subarray(e,t);return Object.setPrototypeOf(o,s.prototype),o};function R(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||R(e,t,this.length);let o=this[e],u=1,a=0;for(;++a<t&&(u*=256);)o+=this[e+a]*u;return o},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,n){e=e>>>0,t=t>>>0,n||R(e,t,this.length);let o=this[e+--t],u=1;for(;t>0&&(u*=256);)o+=this[e+--t]*u;return o},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e=e>>>0,t||R(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||R(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||R(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||R(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||R(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=q(function(e){e=e>>>0,ie(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&le(e,this.length-8);const o=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,u=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(o)+(BigInt(u)<<BigInt(32))}),s.prototype.readBigUInt64BE=q(function(e){e=e>>>0,ie(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&le(e,this.length-8);const o=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],u=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(o)<<BigInt(32))+BigInt(u)}),s.prototype.readIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||R(e,t,this.length);let o=this[e],u=1,a=0;for(;++a<t&&(u*=256);)o+=this[e+a]*u;return u*=128,o>=u&&(o-=Math.pow(2,8*t)),o},s.prototype.readIntBE=function(e,t,n){e=e>>>0,t=t>>>0,n||R(e,t,this.length);let o=t,u=1,a=this[e+--o];for(;o>0&&(u*=256);)a+=this[e+--o]*u;return u*=128,a>=u&&(a-=Math.pow(2,8*t)),a},s.prototype.readInt8=function(e,t){return e=e>>>0,t||R(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},s.prototype.readInt16LE=function(e,t){e=e>>>0,t||R(e,2,this.length);const n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},s.prototype.readInt16BE=function(e,t){e=e>>>0,t||R(e,2,this.length);const n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},s.prototype.readInt32LE=function(e,t){return e=e>>>0,t||R(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e=e>>>0,t||R(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=q(function(e){e=e>>>0,ie(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&le(e,this.length-8);const o=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(o)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)}),s.prototype.readBigInt64BE=q(function(e){e=e>>>0,ie(e,"offset");const t=this[e],n=this[e+7];(t===void 0||n===void 0)&&le(e,this.length-8);const o=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)}),s.prototype.readFloatLE=function(e,t){return e=e>>>0,t||R(e,4,this.length),l.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e=e>>>0,t||R(e,4,this.length),l.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||R(e,8,this.length),l.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||R(e,8,this.length),l.read(this,e,!1,52,8)};function W(r,e,t,n,o,u){if(!s.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<u)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,n,o){if(e=+e,t=t>>>0,n=n>>>0,!o){const g=Math.pow(2,8*n)-1;W(this,e,t,n,g,0)}let u=1,a=0;for(this[t]=e&255;++a<n&&(u*=256);)this[t+a]=e/u&255;return t+n},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,n,o){if(e=+e,t=t>>>0,n=n>>>0,!o){const g=Math.pow(2,8*n)-1;W(this,e,t,n,g,0)}let u=n-1,a=1;for(this[t+u]=e&255;--u>=0&&(a*=256);)this[t+u]=e/a&255;return t+n},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,n){return e=+e,t=t>>>0,n||W(this,e,t,1,255,0),this[t]=e&255,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||W(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||W(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,n){return e=+e,t=t>>>0,n||W(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,n){return e=+e,t=t>>>0,n||W(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Le(r,e,t,n,o){_e(e,n,o,r,t,7);let u=Number(e&BigInt(4294967295));r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,t}function Re(r,e,t,n,o){_e(e,n,o,r,t,7);let u=Number(e&BigInt(4294967295));r[t+7]=u,u=u>>8,r[t+6]=u,u=u>>8,r[t+5]=u,u=u>>8,r[t+4]=u;let a=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=a,a=a>>8,r[t+2]=a,a=a>>8,r[t+1]=a,a=a>>8,r[t]=a,t+8}s.prototype.writeBigUInt64LE=q(function(e,t=0){return Le(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=q(function(e,t=0){return Re(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,n,o){if(e=+e,t=t>>>0,!o){const b=Math.pow(2,8*n-1);W(this,e,t,n,b-1,-b)}let u=0,a=1,g=0;for(this[t]=e&255;++u<n&&(a*=256);)e<0&&g===0&&this[t+u-1]!==0&&(g=1),this[t+u]=(e/a>>0)-g&255;return t+n},s.prototype.writeIntBE=function(e,t,n,o){if(e=+e,t=t>>>0,!o){const b=Math.pow(2,8*n-1);W(this,e,t,n,b-1,-b)}let u=n-1,a=1,g=0;for(this[t+u]=e&255;--u>=0&&(a*=256);)e<0&&g===0&&this[t+u+1]!==0&&(g=1),this[t+u]=(e/a>>0)-g&255;return t+n},s.prototype.writeInt8=function(e,t,n){return e=+e,t=t>>>0,n||W(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},s.prototype.writeInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||W(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||W(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeInt32LE=function(e,t,n){return e=+e,t=t>>>0,n||W(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,n){return e=+e,t=t>>>0,n||W(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},s.prototype.writeBigInt64LE=q(function(e,t=0){return Le(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=q(function(e,t=0){return Re(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Se(r,e,t,n,o,u){if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Me(r,e,t,n,o){return e=+e,t=t>>>0,o||Se(r,e,t,4),l.write(r,e,t,n,23,4),t+4}s.prototype.writeFloatLE=function(e,t,n){return Me(this,e,t,!0,n)},s.prototype.writeFloatBE=function(e,t,n){return Me(this,e,t,!1,n)};function Te(r,e,t,n,o){return e=+e,t=t>>>0,o||Se(r,e,t,8),l.write(r,e,t,n,52,8),t+8}s.prototype.writeDoubleLE=function(e,t,n){return Te(this,e,t,!0,n)},s.prototype.writeDoubleBE=function(e,t,n){return Te(this,e,t,!1,n)},s.prototype.copy=function(e,t,n,o){if(!s.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!o&&o!==0&&(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<n&&(o=n),o===n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-n&&(o=e.length-t+n);const u=o-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,o):Uint8Array.prototype.set.call(e,this.subarray(n,o),t),u},s.prototype.fill=function(e,t,n,o){if(typeof e=="string"){if(typeof t=="string"?(o=t,t=0,n=this.length):typeof n=="string"&&(o=n,n=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!s.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(e.length===1){const a=e.charCodeAt(0);(o==="utf8"&&a<128||o==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);let u;if(typeof e=="number")for(u=t;u<n;++u)this[u]=e;else{const a=s.isBuffer(e)?e:s.from(e,o),g=a.length;if(g===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(u=0;u<n-t;++u)this[u+t]=a[u%g]}return this};const ne={};function xe(r,e,t){ne[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}xe("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),xe("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError),xe("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,o=t;return Number.isInteger(t)&&Math.abs(t)>2**32?o=De(String(t)):typeof t=="bigint"&&(o=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(o=De(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n},RangeError);function De(r){let e="",t=r.length;const n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function Je(r,e,t){ie(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&le(e,r.length-(t+1))}function _e(r,e,t,n,o,u){if(r>t||r<e){const a=typeof e=="bigint"?"n":"";let g;throw u>3?e===0||e===BigInt(0)?g=`>= 0${a} and < 2${a} ** ${(u+1)*8}${a}`:g=`>= -(2${a} ** ${(u+1)*8-1}${a}) and < 2 ** ${(u+1)*8-1}${a}`:g=`>= ${e}${a} and <= ${t}${a}`,new ne.ERR_OUT_OF_RANGE("value",g,r)}Je(n,o,u)}function ie(r,e){if(typeof r!="number")throw new ne.ERR_INVALID_ARG_TYPE(e,"number",r)}function le(r,e,t){throw Math.floor(r)!==r?(ie(r,t),new ne.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new ne.ERR_BUFFER_OUT_OF_BOUNDS:new ne.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}const Xe=/[^+/0-9A-Za-z-_]/g;function Qe(r){if(r=r.split("=")[0],r=r.trim().replace(Xe,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Ie(r,e){e=e||1/0;let t;const n=r.length;let o=null;const u=[];for(let a=0;a<n;++a){if(t=r.charCodeAt(a),t>55295&&t<57344){if(!o){if(t>56319){(e-=3)>-1&&u.push(239,191,189);continue}else if(a+1===n){(e-=3)>-1&&u.push(239,191,189);continue}o=t;continue}if(t<56320){(e-=3)>-1&&u.push(239,191,189),o=t;continue}t=(o-55296<<10|t-56320)+65536}else o&&(e-=3)>-1&&u.push(239,191,189);if(o=null,t<128){if((e-=1)<0)break;u.push(t)}else if(t<2048){if((e-=2)<0)break;u.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;u.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;u.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return u}function Ze(r){const e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function et(r,e){let t,n,o;const u=[];for(let a=0;a<r.length&&!((e-=2)<0);++a)t=r.charCodeAt(a),n=t>>8,o=t%256,u.push(o),u.push(n);return u}function Oe(r){return c.toByteArray(Qe(r))}function he(r,e,t,n){let o;for(o=0;o<n&&!(o+t>=e.length||o>=r.length);++o)e[o+t]=r[o];return o}function v(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Be(r){return r!==r}const tt=function(){const r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){const n=t*16;for(let o=0;o<16;++o)e[n+o]=r[t]+r[o]}return e}();function q(r){return typeof BigInt>"u"?rt:r}function rt(){throw new Error("BigInt not supported")}})(Ve);const S=X({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),ze={state:S,subscribe(i){return re(S,()=>i(S))},push(i,c){i!==S.view&&(S.view=i,c&&(S.data=c),S.history.push(i))},reset(i){S.view=i,S.history=[i]},replace(i){S.history.length>1&&(S.history[S.history.length-1]=i,S.view=i)},goBack(){if(S.history.length>1){S.history.pop();const[i]=S.history.slice(-1);S.view=i}},setData(i){S.data=i}},O={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return O.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const i=navigator.userAgent.toLowerCase();return O.isMobile()&&(i.includes("iphone")||i.includes("ipad"))},isHttpUrl(i){return i.startsWith("http://")||i.startsWith("https://")},isArray(i){return Array.isArray(i)&&i.length>0},formatNativeUrl(i,c,l){if(O.isHttpUrl(i))return this.formatUniversalUrl(i,c,l);let h=i;h.includes("://")||(h=i.replaceAll("/","").replaceAll(":",""),h=`${h}://`),h.endsWith("/")||(h=`${h}/`),this.setWalletConnectDeepLink(h,l);const p=encodeURIComponent(c);return`${h}wc?uri=${p}`},formatUniversalUrl(i,c,l){if(!O.isHttpUrl(i))return this.formatNativeUrl(i,c,l);let h=i;h.endsWith("/")||(h=`${h}/`),this.setWalletConnectDeepLink(h,l);const p=encodeURIComponent(c);return`${h}wc?uri=${p}`},async wait(i){return new Promise(c=>{setTimeout(c,i)})},openHref(i,c){window.open(i,c,"noreferrer noopener")},setWalletConnectDeepLink(i,c){try{localStorage.setItem(O.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:i,name:c}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(i){try{const[c]=i.split("?");localStorage.setItem(O.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:c,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(O.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(O.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var i;const c=(i=ze.state.data)==null?void 0:i.Wallet;if(!c)throw new Error('Missing "Wallet" view data');return c}},wt=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),M=X({enabled:wt,userSessionId:"",events:[],connectedWalletId:void 0}),gt={state:M,subscribe(i){return re(M.events,()=>i(ut(M.events[M.events.length-1])))},initialize(){M.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(M.userSessionId=crypto.randomUUID())},setConnectedWalletId(i){M.connectedWalletId=i},click(i){if(M.enabled){const c={type:"CLICK",name:i.name,userSessionId:M.userSessionId,timestamp:Date.now(),data:i};M.events.push(c)}},track(i){if(M.enabled){const c={type:"TRACK",name:i.name,userSessionId:M.userSessionId,timestamp:Date.now(),data:i};M.events.push(c)}},view(i){if(M.enabled){const c={type:"VIEW",name:i.name,userSessionId:M.userSessionId,timestamp:Date.now(),data:i};M.events.push(c)}}},V=X({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),j={state:V,subscribe(i){return re(V,()=>i(V))},setChains(i){V.chains=i},setWalletConnectUri(i){V.walletConnectUri=i},setIsCustomDesktop(i){V.isCustomDesktop=i},setIsCustomMobile(i){V.isCustomMobile=i},setIsDataLoaded(i){V.isDataLoaded=i},setIsUiLoaded(i){V.isUiLoaded=i},setIsAuth(i){V.isAuth=i}},de=X({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),ue={state:de,subscribe(i){return re(de,()=>i(de))},setConfig(i){var c,l;gt.initialize(),j.setChains(i.chains),j.setIsAuth(!!i.enableAuthMode),j.setIsCustomMobile(!!((c=i.mobileWallets)!=null&&c.length)),j.setIsCustomDesktop(!!((l=i.desktopWallets)!=null&&l.length)),O.setModalVersionInStorage(),Object.assign(de,i)}},be="https://explorer-api.walletconnect.com";async function ye(i,c){const l=new URL(i,be);return l.searchParams.append("projectId",ue.state.projectId),Object.entries(c).forEach(([h,p])=>{p&&l.searchParams.append(h,String(p))}),(await fetch(l)).json()}const ee={async getDesktopListings(i){return ye("/w3m/v1/getDesktopListings",i)},async getMobileListings(i){return ye("/w3m/v1/getMobileListings",i)},async getInjectedListings(i){return ye("/w3m/v1/getInjectedListings",i)},async getAllListings(i){return ye("/w3m/v1/getAllListings",i)},getWalletImageUrl(i){return`${be}/w3m/v1/getWalletImage/${i}?projectId=${ue.state.projectId}`},getAssetImageUrl(i){return`${be}/w3m/v1/getAssetImage/${i}?projectId=${ue.state.projectId}`}};var mt=Object.defineProperty,Pe=Object.getOwnPropertySymbols,Et=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable,Ne=(i,c,l)=>c in i?mt(i,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[c]=l,It=(i,c)=>{for(var l in c||(c={}))Et.call(c,l)&&Ne(i,l,c[l]);if(Pe)for(var l of Pe(c))xt.call(c,l)&&Ne(i,l,c[l]);return i};const ke=O.isMobile(),K=X({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),St={state:K,async getRecomendedWallets(){const{explorerRecommendedWalletIds:i,explorerExcludedWalletIds:c}=ue.state;if(i==="NONE"||c==="ALL"&&!i)return K.recomendedWallets;if(O.isArray(i)){const l={recommendedIds:i.join(",")},{listings:h}=await ee.getAllListings(l),p=Object.values(h);p.sort((d,f)=>{const s=i.indexOf(d.id),E=i.indexOf(f.id);return s-E}),K.recomendedWallets=p}else{const{chains:l,isAuth:h}=j.state,p=l==null?void 0:l.join(","),d=O.isArray(c),f={page:1,sdks:h?"auth_v1":void 0,entries:O.RECOMMENDED_WALLET_AMOUNT,chains:p,version:2,excludedIds:d?c.join(","):void 0},{listings:s}=ke?await ee.getMobileListings(f):await ee.getDesktopListings(f);K.recomendedWallets=Object.values(s)}return K.recomendedWallets},async getWallets(i){const c=It({},i),{explorerRecommendedWalletIds:l,explorerExcludedWalletIds:h}=ue.state,{recomendedWallets:p}=K;if(h==="ALL")return K.wallets;p.length?c.excludedIds=p.map(B=>B.id).join(","):O.isArray(l)&&(c.excludedIds=l.join(",")),O.isArray(h)&&(c.excludedIds=[c.excludedIds,h].filter(Boolean).join(",")),j.state.isAuth&&(c.sdks="auth_v1");const{page:d,search:f}=i,{listings:s,total:E}=ke?await ee.getMobileListings(c):await ee.getDesktopListings(c),y=Object.values(s),I=f?"search":"wallets";return K[I]={listings:[...K[I].listings,...y],total:E,page:d??1},{listings:y,total:E}},getWalletImageUrl(i){return ee.getWalletImageUrl(i)},getAssetImageUrl(i){return ee.getAssetImageUrl(i)},resetSearch(){K.search={listings:[],total:0,page:1}}},se=X({open:!1}),Fe={state:se,subscribe(i){return re(se,()=>i(se))},async open(i){return new Promise(c=>{const{isUiLoaded:l,isDataLoaded:h}=j.state;if(j.setWalletConnectUri(i==null?void 0:i.uri),j.setChains(i==null?void 0:i.chains),ze.reset("ConnectWallet"),l&&h)se.open=!0,c();else{const p=setInterval(()=>{const d=j.state;d.isUiLoaded&&d.isDataLoaded&&(clearInterval(p),se.open=!0,c())},200)}})},close(){se.open=!1}};var Bt=Object.defineProperty,je=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,Ut=Object.prototype.propertyIsEnumerable,$e=(i,c,l)=>c in i?Bt(i,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[c]=l,Ft=(i,c)=>{for(var l in c||(c={}))At.call(c,l)&&$e(i,l,c[l]);if(je)for(var l of je(c))Ut.call(c,l)&&$e(i,l,c[l]);return i};function bt(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const fe=X({themeMode:bt()?"dark":"light"}),ve={state:fe,subscribe(i){return re(fe,()=>i(fe))},setThemeConfig(i){const{themeMode:c,themeVariables:l}=i;c&&(fe.themeMode=c),l&&(fe.themeVariables=Ft({},l))}},te=X({open:!1,message:"",variant:"success"}),Mt={state:te,subscribe(i){return re(te,()=>i(te))},openToast(i,c){te.open=!0,te.message=i,te.variant=c},closeToast(){te.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=Ve.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window));class Ct{constructor(c){this.openModal=Fe.open,this.closeModal=Fe.close,this.subscribeModal=Fe.subscribe,this.setTheme=ve.setThemeConfig,ve.setThemeConfig(c),ue.setConfig(c),this.initUi()}async initUi(){if(typeof window<"u"){await it(()=>import("./index-5160ced5.js"),["assets/index-5160ced5.js","assets/if-defined-67dc93e2.js","assets/index-e47b9852.js","assets/index-a476f248.css"]);const c=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",c),j.setIsUiLoaded(!0)}}}const Tt=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Ct},Symbol.toStringTag,{value:"Module"}));export{gt as $,ue as C,St as G,ze as N,Fe as Q,ve as X,Mt as Y,Tt as a,j as c,O as i};
