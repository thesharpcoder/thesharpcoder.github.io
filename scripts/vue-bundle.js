(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return q})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return x})),n.d(t,"l",(function(){return m})),n.d(t,"m",(function(){return W})),n.d(t,"n",(function(){return p})),n.d(t,"o",(function(){return L})),n.d(t,"p",(function(){return z})),n.d(t,"q",(function(){return $})),n.d(t,"r",(function(){return G})),n.d(t,"s",(function(){return _})),n.d(t,"t",(function(){return P})),n.d(t,"u",(function(){return g})),n.d(t,"v",(function(){return D})),n.d(t,"w",(function(){return b})),n.d(t,"x",(function(){return C})),n.d(t,"y",(function(){return v})),n.d(t,"z",(function(){return w})),n.d(t,"A",(function(){return y})),n.d(t,"B",(function(){return R})),n.d(t,"C",(function(){return O})),n.d(t,"D",(function(){return j})),n.d(t,"E",(function(){return F})),n.d(t,"F",(function(){return U})),n.d(t,"G",(function(){return A})),n.d(t,"H",(function(){return K})),n.d(t,"I",(function(){return B})),n.d(t,"J",(function(){return S})),n.d(t,"K",(function(){return I}));
/**
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
 */
const r=!1,i=!1,s="${JSCORE_VERSION}",o=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+s+") INTERNAL ASSERT FAILED: "+e)},c=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){const t=c(e);return l.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return l.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
/**
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
 */
function p(e){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(const r in n)n.hasOwnProperty(r)&&"__proto__"!==r&&(t[r]=e(t[r],n[r]));return t}(void 0,e)}
/**
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
 */
class f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
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
 */function m(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[h(JSON.stringify({alg:"none",type:"JWT"})),h(JSON.stringify(s)),""].join(".")}
/**
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
 */function _(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function g(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function y(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function b(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return!0===r||!0===i}function C(){return"object"==typeof indexedDB}function I(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(E,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new T(r,o,n)}}const E=/\{\$([^}]+)}/g;
/**
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
 */function O(e){return JSON.parse(e)}function S(e){return JSON.stringify(e)}
/**
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
 */const N=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=O(d(s[0])||""),n=O(d(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},R=function(e){const t=N(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},P=function(e){const t=N(e).claims;return"object"==typeof t&&!0===t.admin};
/**
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
 */
function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function L(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(M(n)&&M(s)){if(!L(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function M(e){return null!==e&&"object"==typeof e}
/**
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
 */function F(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function U(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function $(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */class q{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):e<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const t=(s<<5|s>>>27)+r+l+i+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}function W(e,t){const n=new H(e,t);return n.subscribe.bind(n)}class H{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V(){}
/**
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
 */function z(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const B=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,o(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},K=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function G(e){return e&&e._delegate?e._delegate:e}}).call(this,n(8))},function(e,t,n){"use strict";n.d(t,"a",(function(){return D})),n.d(t,"b",(function(){return R})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return L})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return M}));var r=n(2),i=n(4),s=n(0);let o,a;const c=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap;let p={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(v(this),t),_(c.get(this))}:function(...t){return _(e.apply(v(this),t))}:function(t,...n){const r=e.call(v(this),t,...n);return u.set(r,t.sort?t.sort():[t]),_(r)}}function m(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(l.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});l.set(e,t)}(e),t=e,(o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,p):e);var t}function _(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(_(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),d.set(t,e),t}(e);if(h.has(e))return h.get(e);const t=m(e);return t!==e&&(h.set(e,t),d.set(t,e)),t}const v=e=>d.get(e);const g=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],b=new Map;function w(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(b.get(t))return b.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!g.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return b.set(t,s),s}p=(e=>({...e,get:(t,n,r)=>w(t,n)||e.get(t,n,r),has:(t,n)=>!!w(t,n)||e.has(t,n)}))(p);
/**
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
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const I="@firebase/app",T=new i.b("@firebase/app"),k={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},E=new Map,O=new Map;function S(e,t){try{e.container.addComponent(t)}catch(n){T.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function N(e){const t=e.name;if(O.has(t))return T.debug(`There were multiple attempts to register component ${t}.`),!1;O.set(t,e);for(const t of E.values())S(t,e);return!0}function R(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const P={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},x=new s.b("app","Firebase",P);
/**
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
 */
class A{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}
/**
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
 */const D="9.8.1";function j(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw x.create("bad-app-name",{appName:String(i)});const o=E.get(i);if(o){if(Object(s.o)(e,o.options)&&Object(s.o)(n,o.config))return o;throw x.create("duplicate-app",{appName:i})}const a=new r.b(i);for(const e of O.values())a.addComponent(e);const c=new A(e,n,a);return E.set(i,c),c}function L(e="[DEFAULT]"){const t=E.get(e);if(!t)throw x.create("no-app",{appName:e});return t}function M(e,t,n){var i;let s=null!==(i=k[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void T.warn(e.join(" "))}N(new r.a(s+"-version",()=>({library:s,version:t}),"VERSION"))}
/**
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
 */
const F="firebase-heartbeat-store";let U=null;function $(){return U||(U=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=_(o);return r&&o.addEventListener("upgradeneeded",e=>{r(_(o.result),e.oldVersion,e.newVersion,_(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(F)}}}).catch(e=>{throw x.create("storage-open",{originalErrorMessage:e.message})})),U}async function q(e,t){try{const n=(await $()).transaction(F,"readwrite"),r=n.objectStore(F);return await r.put(t,W(e)),n.done}catch(e){throw x.create("storage-set",{originalErrorMessage:e.message})}}function W(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class H{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new z(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=V();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=V(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),B(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),B(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(s.j)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function V(){return(new Date).toISOString().substring(0,10)}class z{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s.x)()&&Object(s.K)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await $()).transaction(F).objectStore(F).get(W(e))}catch(e){throw x.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return q(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return q(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function B(e){return Object(s.j)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var K;K="",N(new r.a("platform-logger",e=>new C(e),"PRIVATE")),N(new r.a("heartbeat",e=>new H(e),"PRIVATE")),M(I,"0.7.24",K),M(I,"0.7.24","esm2017"),M("fire-js","")},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(0);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */
/**
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
 */
class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){"use strict";var r=n(12);n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return r.b})),n.d(t,"c",(function(){return r.c})),n.d(t,"d",(function(){return r.d})),n.d(t,"e",(function(){return r.e})),n.d(t,"f",(function(){return r.f}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
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
 */
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},function(e,t,n){"use strict";function r(e,t,n,r,i,s,o,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return Le})),n.d(t,"b",(function(){return Ht})),n.d(t,"c",(function(){return Me})),n.d(t,"d",(function(){return Fe}));var r=n(0),i=n(1);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n(4),a=n(2);function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),h=new o.b("@firebase/auth");function d(e,...t){h.logLevel<=o.a.ERROR&&h.error(`Auth (${i.a}): ${e}`,...t)}
/**
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
 */function p(e,...t){throw _(e,...t)}function f(e,...t){return _(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n});return new r.b("auth","Firebase",i).create(t,{appName:e.name})}function _(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw _(t,...n)}function g(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function y(e,t){e||g(t)}
/**
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
 */const b=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
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
 */
/**
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
 */
function C(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */
/**
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
 */
class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r.y)()||Object(r.A)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(I()||Object(r.u)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
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
 */function E(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void g("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void g("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void g("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},N=new k(3e4,6e4);
/**
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
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,i,s={}){return x(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r.E)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),O.fetch()(D(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function x(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},S),t);try{const t=new j(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw L(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw L(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw L(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(t){if(t instanceof r.c)throw t;p(e,"network-request-failed")}}async function A(e,t,n,r,i={}){const s=await P(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function D(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?E(e.config,i):`${e.config.apiScheme}://${i}`}class j{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(f(this.auth,"network-request-failed")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function L(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=f(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */
/**
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
 */
function M(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function F(e){return 1e3*Number(e)}function U(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r.h)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(e){return d("Caught error parsing JWT payload as JSON",e),null}}
/**
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
 */
async function $(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class W{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=M(this.lastLoginAt),this.creationTime=M(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function H(e){var t;const n=e.auth,r=await e.getIdToken(),i=await $(e,async function(e,t){return P(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));v(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const c=(l=e.providerData,u=a,[...l.filter(e=>!u.some(t=>t.providerId===e.providerId)),...u]);var l,u;const h=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==c?void 0:c.length)),p=!!h&&d,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new W(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,f)}
/**
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
 */
class V{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(void 0!==e.idToken,"internal-error"),v(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=U(e);return v(t,"internal-error"),v(void 0!==t.exp,"internal-error"),v(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
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
 */
async function(e,t){const n=await x(e,{},async()=>{const n=Object(r.E)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=D(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new V;return n&&(v("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(v("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(v("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new V,this.toJSON())}_performRefresh(){return g("not implemented")}}
/**
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
 */function z(e,t){v("string"==typeof e||void 0===e,"internal-error",{appName:t})}class B{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await $(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Object(r.r)(e),i=await n.getIdToken(t),s=U(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:M(F(s.auth_time)),issuedAtTime:M(F(s.iat)),expirationTime:M(F(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Object(r.r)(e);await H(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new B(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await H(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $(this,async function(e,t){return P(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:C,stsTokenManager:I}=t;v(y&&I,e,"internal-error");const T=V.fromJSON(this.name,I);v("string"==typeof y,e,"internal-error"),z(u,e.name),z(h,e.name),v("boolean"==typeof b,e,"internal-error"),v("boolean"==typeof w,e,"internal-error"),z(d,e.name),z(p,e.name),z(f,e.name),z(m,e.name),z(_,e.name),z(g,e.name);const k=new B({uid:y,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:_,lastLoginAt:g});return C&&Array.isArray(C)&&(k.providerData=C.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new V;r.updateFromServerResponse(t);const i=new B({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await H(i),i}}
/**
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
 */class K{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}K.type="NONE";const G=K;
/**
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
 */function J(e,t,n){return`firebase:${e}:${t}:${n}`}class Y{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=J(this.userKey,r.apiKey,i),this.fullPersistenceKey=J("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?B._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Y(w(G),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||w(G);const s=J(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=B._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}})),new Y(i,e,n)):new Y(i,e,n)}}
/**
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
 */function Q(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(te(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(X(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(re(t))return"Blackberry";if(ie(t))return"Webos";if(Z(t))return"Safari";if((t.includes("chrome/")||ee(t))&&!t.includes("edge/"))return"Chrome";if(ne(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function X(e=Object(r.s)()){return/firefox\//i.test(e)}function Z(e=Object(r.s)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ee(e=Object(r.s)()){return/crios\//i.test(e)}function te(e=Object(r.s)()){return/iemobile/i.test(e)}function ne(e=Object(r.s)()){return/android/i.test(e)}function re(e=Object(r.s)()){return/blackberry/i.test(e)}function ie(e=Object(r.s)()){return/webos/i.test(e)}function se(e=Object(r.s)()){return/iphone|ipad|ipod/i.test(e)}function oe(e=Object(r.s)()){return se(e)||ne(e)||ie(e)||re(e)||/windows phone/i.test(e)||te(e)}
/**
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
 */
function ae(e,t=[]){let n;switch(e){case"Browser":n=Q(Object(r.s)());break;case"Worker":n=`${Q(Object(r.s)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.a}/${s}`}
/**
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
 */class ce{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e.message})}}}
/**
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
 */class le{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new he(this),this.idTokenSubscription=new he(this),this.beforeStateQueue=new ce(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await H(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r.r)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ae(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ue(e){return Object(r.r)(e)}class he{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r.m)(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */
class de{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return g("not implemented")}_getIdTokenResponse(e){return g("not implemented")}_linkToIdToken(e,t){return g("not implemented")}_getReauthenticationResolver(e){return g("not implemented")}}
/**
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
 */async function pe(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
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
 */
class fe extends de{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new fe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new fe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
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
 */
return async function(e,t){return A(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
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
 */
return async function(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return pe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function me(e,t){return A(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
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
 */class _e extends de{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new _e(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return me(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,me(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,me(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(r.E)(t)}return e}}
/**
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
 */const ve={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class ge extends de{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ge({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ge({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return A(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await A(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw L(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return A(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ve)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ge({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */class ye{constructor(e){var t,n,i,s,o,a;const c=Object(r.F)(Object(r.q)(e)),l=null!==(t=c.apiKey)&&void 0!==t?t:null,u=null!==(n=c.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);v(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=Object(r.F)(Object(r.q)(e)).link,n=t?Object(r.F)(Object(r.q)(t)).deep_link_id:null,i=Object(r.F)(Object(r.q)(e)).deep_link_id;return(i?Object(r.F)(Object(r.q)(i)).link:null)||i||n||t||e}(e);try{return new ye(t)}catch(e){return null}}}
/**
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
 */
class be{constructor(){this.providerId=be.PROVIDER_ID}static credential(e,t){return fe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ye.parseLink(t);return v(n,"argument-error"),fe._fromEmailAndCode(e,n.code,n.tenantId)}}be.PROVIDER_ID="password",be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class we{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Ce extends we{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class Ie extends Ce{constructor(){super("facebook.com")}static credential(e){return _e._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch(e){return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ie.PROVIDER_ID="facebook.com";
/**
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
 */
class Te extends Ce{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _e._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Te.credential(t,n)}catch(e){return null}}}Te.GOOGLE_SIGN_IN_METHOD="google.com",Te.PROVIDER_ID="google.com";
/**
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
 */
class ke extends Ce{constructor(){super("github.com")}static credential(e){return _e._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch(e){return null}}}ke.GITHUB_SIGN_IN_METHOD="github.com",ke.PROVIDER_ID="github.com";
/**
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
 */
class Ee extends Ce{constructor(){super("twitter.com")}static credential(e,t){return _e._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ee.credential(t,n)}catch(e){return null}}}
/**
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
 */
async function Oe(e,t){return A(e,"POST","/v1/accounts:signUp",R(e,t))}
/**
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
 */Ee.TWITTER_SIGN_IN_METHOD="twitter.com",Ee.PROVIDER_ID="twitter.com";class Se{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await B._fromIdTokenResponse(e,n,r),s=Ne(n);return new Se({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ne(n);return new Se({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ne(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class Re extends r.c{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Re.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Re(e,t,n,r)}}function Pe(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Re._fromErrorAndOperation(e,n,t,r);throw n})}
/**
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
 */async function xe(e,t,n=!1){const r=await $(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Se._forOperation(e,"link",r)}
/**
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
 */
async function Ae(e,t,n=!1){const{auth:r}=e;try{const i=await $(e,Pe(r,"reauthenticate",t,e),n);v(i.idToken,r,"internal-error");const s=U(i.idToken);v(s,r,"internal-error");const{sub:o}=s;return v(e.uid===o,r,"user-mismatch"),Se._forOperation(e,"reauthenticate",i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&p(r,"user-mismatch"),e}}
/**
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
 */async function De(e,t,n=!1){const r=await Pe(e,"signIn",t),i=await Se._fromIdTokenResponse(e,"signIn",r);return n||await e._updateCurrentUser(i.user),i}async function je(e,t){return De(ue(e),t)}async function Le(e,t,n){const r=ue(e),i=await Oe(r,{returnSecureToken:!0,email:t,password:n}),s=await Se._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Me(e,t,n){return je(Object(r.r)(e),be.credential(t,n))}
/**
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
 */function Fe(e){return Object(r.r)(e).signOut()}new WeakMap;
/**
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
 */
class Ue{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class $e extends Ue{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(r.s)();return Z(e)||se(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Object(r.w)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$e.type="LOCAL";const qe=$e;
/**
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
 */class We extends Ue{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}We.type="SESSION";const He=We;
/**
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
 */
/**
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
 */
class Ve{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ve(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function ze(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Ve.receivers=[];class Be{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=ze("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
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
 */function Ke(){return window}
/**
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
 */
function Ge(){return void 0!==Ke().WorkerGlobalScope&&"function"==typeof Ke().importScripts}
/**
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
 */
const Je="firebaseLocalStorageDb";class Ye{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qe(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Xe(){const e=indexedDB.open(Je,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Je);return new Ye(e).toPromise()}(),t(await Xe()))})})}async function Ze(e,t,n){const r=Qe(e,!0).put({fbase_key:t,value:n});return new Ye(r).toPromise()}function et(e,t){const n=Qe(e,!0).delete(t);return new Ye(n).toPromise()}class tt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Xe()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ge()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ve._getInstance(Ge()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Be(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xe();return await Ze(e,"__sak","1"),await et(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ze(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=Qe(e,!1).get(t),r=await new Ye(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>et(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Qe(e,!1).getAll();return new Ye(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tt.type="LOCAL";const nt=tt;
/**
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
 */function rt(e){return new Promise((t,n)=>{const r=document.createElement("script");
/**
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
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=f("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})}function it(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
it("rcb"),new k(3e4,6e4);async function st(e,t,n){var r;const i=await n.verify();try{let s;if(v("string"==typeof i,e,"argument-error"),v("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");return(await
/**
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
 */
function(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",R(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");return(await function(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",R(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class ot{constructor(e){this.providerId=ot.PROVIDER_ID,this.auth=ue(e)}verifyPhoneNumber(e,t){return st(this.auth,e,Object(r.r)(t))}static credential(e,t){return ge._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ot.credentialFromTaggedObject(t)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ge._fromTokenResponse(t,n):null}}
/**
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
 */
function at(e,t){return t?w(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */ot.PROVIDER_ID="phone",ot.PHONE_SIGN_IN_METHOD="phone";class ct extends de{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return me(e,this._buildIdpRequest())}_linkToIdToken(e,t){return me(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return me(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lt(e){return De(e.auth,new ct(e),e.bypassAuthState)}function ut(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Ae(n,new ct(e),e.bypassAuthState)}async function ht(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),xe(n,new ct(e),e.bypassAuthState)}
/**
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
 */class dt{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lt;case"linkViaPopup":case"linkViaRedirect":return ht;case"reauthViaPopup":case"reauthViaRedirect":return ut;default:p(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const pt=new k(2e3,1e4);class ft extends dt{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ft.currentPopupAction&&ft.currentPopupAction.cancel(),ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=ze();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(f(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(f(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(f(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,pt.get())};e()}}ft.currentPopupAction=null;
/**
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
 */
const mt=new Map;class _t extends dt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=mt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=yt(t),r=gt(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}mt.set(this.auth._key(),e)}return this.bypassAuthState||mt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function vt(e,t){mt.set(e._key(),t)}function gt(e){return w(e._redirectPersistence)}function yt(e){return J("pendingRedirect",e.config.apiKey,e.name)}
/**
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
 */async function bt(e,t,n=!1){const r=ue(e),i=at(r,t),s=new _t(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class wt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return It(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!It(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(f(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ct(e))}saveEventToCache(e){this.cachedEventUids.add(Ct(e)),this.lastProcessedEventTime=Date.now()}}function Ct(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function It({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Tt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kt=/^https?/;async function Et(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return P(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ot(e))return}catch(e){}p(e,"unauthorized-domain")}function Ot(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!kt.test(n))return!1;if(Tt.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const St=new k(3e4,6e4);function Nt(){const e=Ke().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Rt=null;function Pt(e){return Rt=Rt||function(e){return new Promise((t,n)=>{var r,i,s;function o(){Nt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Nt(),n(f(e,"network-request-failed"))},timeout:St.get()})}if(null===(i=null===(r=Ke().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ke().gapi)||void 0===s?void 0:s.load)){const t=it("iframefcb");return Ke()[t]=()=>{gapi.load?o():n(f(e,"network-request-failed"))},rt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Rt=null,e})}(e),Rt}
/**
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
 */const xt=new k(5e3,15e3),At={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jt(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?E(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:i.a},o=Dt.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r.E)(s).slice(1)}`}
/**
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
 */
const Lt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Mt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ft(e,t,n,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Lt),{width:i.toString(),height:s.toString(),top:o,left:a}),u=Object(r.s)().toLowerCase();n&&(c=ee(u)?"_blank":n),X(u)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Object(r.s)()){var t;return se(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",c),new Mt(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Mt(d)}function Ut(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.a,eventId:o};if(t instanceof we){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r.v)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ce){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const e of Object.keys(l))void 0===l[e]&&delete l[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return E(e,"emulator/auth/handler")}
/**
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
 */(e)}?${Object(r.E)(l).slice(1)}`}const $t=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=He,this._completeRedirectFn=bt,this._overrideRedirectResult=vt}async _openPopup(e,t,n,r){var i;y(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ft(e,Ut(e,t,n,C(),r),ze())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Ut(e,t,n,C(),r),Ke().location.href=i,new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await async function(e){const t=await Pt(e),n=Ke().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:jt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:At,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=f(e,"network-request-failed"),s=Ke().setTimeout(()=>{r(i)},xt.get());function o(){Ke().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}(e),n=new wt(e);return t.register("authEvent",t=>{v(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),p(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Et(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return oe()||Z()||se()}};var qt;
/**
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
 */
class Wt{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
function Ht(e=Object(i.d)()){const t=Object(i.b)(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Object(i.b)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r.o)(i,null!=t?t:{}))return e;p(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:$t,persistence:[nt,qe,He]})}qt="Browser",Object(i.c)(new a.a("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:qt,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ae(qt)},o=new le(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(i.c)(new a.a("auth-internal",e=>(e=>new Wt(e))(ue(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i.f)("@firebase/auth","0.20.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(qt)),Object(i.f)("@firebase/auth","0.20.1","esm2017")},function(e,t,n){"use strict";(function(e,n){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({});function i(e){return null==e}function s(e){return null!=e}function o(e){return!0===e}function a(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function c(e){return null!==e&&"object"==typeof e}var l=Object.prototype.toString;function u(e){return"[object Object]"===l.call(e)}function h(e){return"[object RegExp]"===l.call(e)}function d(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function p(e){return s(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function f(e){return null==e?"":Array.isArray(e)||u(e)&&e.toString===l?JSON.stringify(e,null,2):String(e)}function m(e){var t=parseFloat(e);return isNaN(t)?e:t}function _(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}_("slot,component",!0);var v=_("key,ref,slot,slot-scope,is");function g(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var y=Object.prototype.hasOwnProperty;function b(e,t){return y.call(e,t)}function w(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var C=/-(\w)/g,I=w((function(e){return e.replace(C,(function(e,t){return t?t.toUpperCase():""}))})),T=w((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),k=/\B([A-Z])/g,E=w((function(e){return e.replace(k,"-$1").toLowerCase()}));var O=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function S(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function N(e,t){for(var n in t)e[n]=t[n];return e}function R(e){for(var t={},n=0;n<e.length;n++)e[n]&&N(t,e[n]);return t}function P(e,t,n){}var x=function(e,t,n){return!1},A=function(e){return e};function D(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),s=Array.isArray(t);if(i&&s)return e.length===t.length&&e.every((function(e,n){return D(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return D(e[n],t[n])}))}catch(e){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(D(e[n],t))return n;return-1}function L(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var M=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:x,isReservedAttr:x,isUnknownElement:x,getTagNamespace:P,parsePlatformTagName:A,mustUseProp:x,async:!0,_lifecycleHooks:F},$=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+$.source+".$_\\d]");var H,V="__proto__"in{},z="undefined"!=typeof window,B="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=B&&WXEnvironment.platform.toLowerCase(),G=z&&window.navigator.userAgent.toLowerCase(),J=G&&/msie|trident/.test(G),Y=G&&G.indexOf("msie 9.0")>0,Q=G&&G.indexOf("edge/")>0,X=(G&&G.indexOf("android"),G&&/iphone|ipad|ipod|ios/.test(G)||"ios"===K),Z=(G&&/chrome\/\d+/.test(G),G&&/phantomjs/.test(G),G&&G.match(/firefox\/(\d+)/)),ee={}.watch,te=!1;if(z)try{var ne={};Object.defineProperty(ne,"passive",{get:function(){te=!0}}),window.addEventListener("test-passive",null,ne)}catch(e){}var re=function(){return void 0===H&&(H=!z&&!B&&void 0!==e&&(e.process&&"server"===e.process.env.VUE_ENV)),H},ie=z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function se(e){return"function"==typeof e&&/native code/.test(e.toString())}var oe,ae="undefined"!=typeof Symbol&&se(Symbol)&&"undefined"!=typeof Reflect&&se(Reflect.ownKeys);oe="undefined"!=typeof Set&&se(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ce=P,le=0,ue=function(){this.id=le++,this.subs=[]};ue.prototype.addSub=function(e){this.subs.push(e)},ue.prototype.removeSub=function(e){g(this.subs,e)},ue.prototype.depend=function(){ue.target&&ue.target.addDep(this)},ue.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},ue.target=null;var he=[];function de(e){he.push(e),ue.target=e}function pe(){he.pop(),ue.target=he[he.length-1]}var fe=function(e,t,n,r,i,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},me={child:{configurable:!0}};me.child.get=function(){return this.componentInstance},Object.defineProperties(fe.prototype,me);var _e=function(e){void 0===e&&(e="");var t=new fe;return t.text=e,t.isComment=!0,t};function ve(e){return new fe(void 0,void 0,void 0,String(e))}function ge(e){var t=new fe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ye=Array.prototype,be=Object.create(ye);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(e){var t=ye[e];q(be,e,(function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&o.observeArray(i),o.dep.notify(),s}))}));var we=Object.getOwnPropertyNames(be),Ce=!0;function Ie(e){Ce=e}var Te=function(e){this.value=e,this.dep=new ue,this.vmCount=0,q(e,"__ob__",this),Array.isArray(e)?(V?function(e,t){e.__proto__=t}(e,be):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];q(e,s,t[s])}}(e,be,we),this.observeArray(e)):this.walk(e)};function ke(e,t){var n;if(c(e)&&!(e instanceof fe))return b(e,"__ob__")&&e.__ob__ instanceof Te?n=e.__ob__:Ce&&!re()&&(Array.isArray(e)||u(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Te(e)),t&&n&&n.vmCount++,n}function Ee(e,t,n,r,i){var s=new ue,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=e[t]);var l=!i&&ke(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return ue.target&&(s.depend(),l&&(l.dep.depend(),Array.isArray(t)&&Ne(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!=t&&r!=r||a&&!c||(c?c.call(e,t):n=t,l=!i&&ke(t),s.notify())}})}}function Oe(e,t,n){if(Array.isArray(e)&&d(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Ee(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Se(e,t){if(Array.isArray(e)&&d(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||b(e,t)&&(delete e[t],n&&n.dep.notify())}}function Ne(e){for(var t=void 0,n=0,r=e.length;n<r;n++)(t=e[n])&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Ne(t)}Te.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Ee(e,t[n])},Te.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)ke(e[t])};var Re=U.optionMergeStrategies;function Pe(e,t){if(!t)return e;for(var n,r,i,s=ae?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)"__ob__"!==(n=s[o])&&(r=e[n],i=t[n],b(e,n)?r!==i&&u(r)&&u(i)&&Pe(r,i):Oe(e,n,i));return e}function xe(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?Pe(r,i):i}:t?e?function(){return Pe("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Ae(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function De(e,t,n,r){var i=Object.create(e||null);return t?N(i,t):i}Re.data=function(e,t,n){return n?xe(e,t,n):t&&"function"!=typeof t?e:xe(e,t)},F.forEach((function(e){Re[e]=Ae})),M.forEach((function(e){Re[e+"s"]=De})),Re.watch=function(e,t,n,r){if(e===ee&&(e=void 0),t===ee&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var s in N(i,e),t){var o=i[s],a=t[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},Re.props=Re.methods=Re.inject=Re.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return N(i,e),t&&N(i,t),i},Re.provide=xe;var je=function(e,t){return void 0===t?e:t};function Le(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,s={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(s[I(i)]={type:null});else if(u(n))for(var o in n)i=n[o],s[I(o)]=u(i)?i:{type:i};else 0;e.props=s}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(u(n))for(var s in n){var o=n[s];r[s]=u(o)?N({from:s},o):{from:o}}else 0}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=Le(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Le(e,t.mixins[r],n);var s,o={};for(s in e)a(s);for(s in t)b(e,s)||a(s);function a(r){var i=Re[r]||je;o[r]=i(e[r],t[r],n,r)}return o}function Me(e,t,n,r){if("string"==typeof n){var i=e[t];if(b(i,n))return i[n];var s=I(n);if(b(i,s))return i[s];var o=T(s);return b(i,o)?i[o]:i[n]||i[s]||i[o]}}function Fe(e,t,n,r){var i=t[e],s=!b(n,e),o=n[e],a=We(Boolean,i.type);if(a>-1)if(s&&!b(i,"default"))o=!1;else if(""===o||o===E(e)){var c=We(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=function(e,t,n){if(!b(t,"default"))return;var r=t.default;0;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==$e(t.type)?r.call(e):r}(r,i,e);var l=Ce;Ie(!0),ke(o),Ie(l)}return o}var Ue=/^\s*function (\w+)/;function $e(e){var t=e&&e.toString().match(Ue);return t?t[1]:""}function qe(e,t){return $e(e)===$e(t)}function We(e,t){if(!Array.isArray(t))return qe(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(qe(t[n],e))return n;return-1}function He(e,t,n){de();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{if(!1===i[s].call(r,e,t,n))return}catch(e){ze(e,r,"errorCaptured hook")}}ze(e,t,n)}finally{pe()}}function Ve(e,t,n,r,i){var s;try{(s=n?e.apply(t,n):e.call(t))&&!s._isVue&&p(s)&&!s._handled&&(s.catch((function(e){return He(e,r,i+" (Promise/async)")})),s._handled=!0)}catch(e){He(e,r,i)}return s}function ze(e,t,n){if(U.errorHandler)try{return U.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Be(t,null,"config.errorHandler")}Be(e,t,n)}function Be(e,t,n){if(!z&&!B||"undefined"==typeof console)throw e;console.error(e)}var Ke,Ge=!1,Je=[],Ye=!1;function Qe(){Ye=!1;var e=Je.slice(0);Je.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&se(Promise)){var Xe=Promise.resolve();Ke=function(){Xe.then(Qe),X&&setTimeout(P)},Ge=!0}else if(J||"undefined"==typeof MutationObserver||!se(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Ke=void 0!==n&&se(n)?function(){n(Qe)}:function(){setTimeout(Qe,0)};else{var Ze=1,et=new MutationObserver(Qe),tt=document.createTextNode(String(Ze));et.observe(tt,{characterData:!0}),Ke=function(){Ze=(Ze+1)%2,tt.data=String(Ze)},Ge=!0}function nt(e,t){var n;if(Je.push((function(){if(e)try{e.call(t)}catch(e){He(e,t,"nextTick")}else n&&n(t)})),Ye||(Ye=!0,Ke()),!e&&"undefined"!=typeof Promise)return new Promise((function(e){n=e}))}var rt=new oe;function it(e){!function e(t,n){var r,i,s=Array.isArray(t);if(!s&&!c(t)||Object.isFrozen(t)||t instanceof fe)return;if(t.__ob__){var o=t.__ob__.dep.id;if(n.has(o))return;n.add(o)}if(s)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,rt),rt.clear()}var st=w((function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}}));function ot(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return Ve(r,null,arguments,t,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)Ve(i[s],null,e,t,"v-on handler")}return n.fns=e,n}function at(e,t,n,r,s,a){var c,l,u,h;for(c in e)l=e[c],u=t[c],h=st(c),i(l)||(i(u)?(i(l.fns)&&(l=e[c]=ot(l,a)),o(h.once)&&(l=e[c]=s(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,e[c]=u));for(c in t)i(e[c])&&r((h=st(c)).name,t[c],h.capture)}function ct(e,t,n){var r;e instanceof fe&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),g(r.fns,c)}i(a)?r=ot([c]):s(a.fns)&&o(a.merged)?(r=a).fns.push(c):r=ot([a,c]),r.merged=!0,e[t]=r}function lt(e,t,n,r,i){if(s(t)){if(b(t,n))return e[n]=t[n],i||delete t[n],!0;if(b(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function ut(e){return a(e)?[ve(e)]:Array.isArray(e)?function e(t,n){var r,c,l,u,h=[];for(r=0;r<t.length;r++)i(c=t[r])||"boolean"==typeof c||(l=h.length-1,u=h[l],Array.isArray(c)?c.length>0&&(ht((c=e(c,(n||"")+"_"+r))[0])&&ht(u)&&(h[l]=ve(u.text+c[0].text),c.shift()),h.push.apply(h,c)):a(c)?ht(u)?h[l]=ve(u.text+c):""!==c&&h.push(ve(c)):ht(c)&&ht(u)?h[l]=ve(u.text+c.text):(o(t._isVList)&&s(c.tag)&&i(c.key)&&s(n)&&(c.key="__vlist"+n+"_"+r+"__"),h.push(c)));return h}(e):void 0}function ht(e){return s(e)&&s(e.text)&&!1===e.isComment}function dt(e,t){if(e){for(var n=Object.create(null),r=ae?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){for(var o=e[s].from,a=t;a;){if(a._provided&&b(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in e[s]){var c=e[s].default;n[s]="function"==typeof c?c.call(t):c}else 0}}return n}}function pt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var s=e[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var l in n)n[l].every(ft)&&delete n[l];return n}function ft(e){return e.isComment&&!e.asyncFactory||" "===e.text}function mt(e){return e.isComment&&e.asyncFactory}function _t(e,t,n){var i,s=Object.keys(t).length>0,o=e?!!e.$stable:!s,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&n&&n!==r&&a===n.$key&&!s&&!n.$hasNormal)return n;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=vt(t,c,e[c]))}else i={};for(var l in t)l in i||(i[l]=gt(t,l));return e&&Object.isExtensible(e)&&(e._normalized=i),q(i,"$stable",o),q(i,"$key",a),q(i,"$hasNormal",s),i}function vt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({}),t=(e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:ut(e))&&e[0];return e&&(!t||1===e.length&&t.isComment&&!mt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function gt(e,t){return function(){return e[t]}}function yt(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(ae&&e[Symbol.iterator]){n=[];for(var l=e[Symbol.iterator](),u=l.next();!u.done;)n.push(t(u.value,n.length)),u=l.next()}else for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return s(n)||(n=[]),n._isVList=!0,n}function bt(e,t,n,r){var i,s=this.$scopedSlots[e];s?(n=n||{},r&&(n=N(N({},r),n)),i=s(n)||("function"==typeof t?t():t)):i=this.$slots[e]||("function"==typeof t?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function wt(e){return Me(this.$options,"filters",e)||A}function Ct(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function It(e,t,n,r,i){var s=U.keyCodes[t]||n;return i&&r&&!U.keyCodes[t]?Ct(i,r):s?Ct(s,e):r?E(r)!==t:void 0===e}function Tt(e,t,n,r,i){if(n)if(c(n)){var s;Array.isArray(n)&&(n=R(n));var o=function(o){if("class"===o||"style"===o||v(o))s=e;else{var a=e.attrs&&e.attrs.type;s=r||U.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=I(o),l=E(o);c in s||l in s||(s[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))};for(var a in n)o(a)}else;return e}function kt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||Ot(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r}function Et(e,t,n){return Ot(e,"__once__"+t+(n?"_"+n:""),!0),e}function Ot(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&St(e[r],t+"_"+r,n);else St(e,t,n)}function St(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Nt(e,t){if(t)if(u(t)){var n=e.on=e.on?N({},e.on):{};for(var r in t){var i=n[r],s=t[r];n[r]=i?[].concat(i,s):s}}else;return e}function Rt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var s=e[i];Array.isArray(s)?Rt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function Pt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function xt(e,t){return"string"==typeof e?t+e:e}function At(e){e._o=Et,e._n=m,e._s=f,e._l=yt,e._t=bt,e._q=D,e._i=j,e._m=kt,e._f=wt,e._k=It,e._b=Tt,e._v=ve,e._e=_e,e._u=Rt,e._g=Nt,e._d=Pt,e._p=xt}function Dt(e,t,n,i,s){var a,c=this,l=s.options;b(i,"_uid")?(a=Object.create(i))._original=i:(a=i,i=i._original);var u=o(l._compiled),h=!u;this.data=e,this.props=t,this.children=n,this.parent=i,this.listeners=e.on||r,this.injections=dt(l.inject,i),this.slots=function(){return c.$slots||_t(e.scopedSlots,c.$slots=pt(n,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return _t(e.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=_t(e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,r){var s=qt(a,e,t,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=l._scopeId,s.fnContext=i),s}:this._c=function(e,t,n,r){return qt(a,e,t,n,r,h)}}function jt(e,t,n,r,i){var s=ge(e);return s.fnContext=n,s.fnOptions=r,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function Lt(e,t){for(var n in t)e[I(n)]=t[n]}At(Dt.prototype);var Mt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Mt.prepatch(n,n)}else{(e.componentInstance=function(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns);return new e.componentOptions.Ctor(n)}(e,Yt)).$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions;!function(e,t,n,i,s){0;var o=i.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==r&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),l=!!(s||e.$options._renderChildren||c);e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i);if(e.$options._renderChildren=s,e.$attrs=i.data.attrs||r,e.$listeners=n||r,t&&e.$options.props){Ie(!1);for(var u=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var p=h[d],f=e.$options.props;u[p]=Fe(p,f,t,e)}Ie(!0),e.$options.propsData=t}n=n||r;var m=e.$options._parentListeners;e.$options._parentListeners=n,Jt(e,n,m),l&&(e.$slots=pt(s,i.context),e.$forceUpdate());0}(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,en(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,nn.push(t)):Zt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,Xt(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);en(t,"deactivated")}}(t,!0):t.$destroy())}},Ft=Object.keys(Mt);function Ut(e,t,n,a,l){if(!i(e)){var u=n.$options._base;if(c(e)&&(e=u.extend(e)),"function"==typeof e){var h;if(i(e.cid)&&void 0===(e=function(e,t){if(o(e.error)&&s(e.errorComp))return e.errorComp;if(s(e.resolved))return e.resolved;var n=Ht;n&&s(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n);if(o(e.loading)&&s(e.loadingComp))return e.loadingComp;if(n&&!s(e.owners)){var r=e.owners=[n],a=!0,l=null,u=null;n.$on("hook:destroyed",(function(){return g(r,n)}));var h=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},d=L((function(n){e.resolved=Vt(n,t),a?r.length=0:h(!0)})),f=L((function(t){s(e.errorComp)&&(e.error=!0,h(!0))})),m=e(d,f);return c(m)&&(p(m)?i(e.resolved)&&m.then(d,f):p(m.component)&&(m.component.then(d,f),s(m.error)&&(e.errorComp=Vt(m.error,t)),s(m.loading)&&(e.loadingComp=Vt(m.loading,t),0===m.delay?e.loading=!0:l=setTimeout((function(){l=null,i(e.resolved)&&i(e.error)&&(e.loading=!0,h(!1))}),m.delay||200)),s(m.timeout)&&(u=setTimeout((function(){u=null,i(e.resolved)&&f(null)}),m.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}(h=e,u)))return function(e,t,n,r,i){var s=_e();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:r,tag:i},s}(h,t,n,a,l);t=t||{},In(e),s(t.model)&&function(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var i=t.on||(t.on={}),o=i[r],a=t.model.callback;s(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(i[r]=[a].concat(o)):i[r]=a}(e.options,t);var d=function(e,t,n){var r=t.options.props;if(!i(r)){var o={},a=e.attrs,c=e.props;if(s(a)||s(c))for(var l in r){var u=E(l);lt(o,c,l,u,!0)||lt(o,a,l,u,!1)}return o}}(t,e);if(o(e.options.functional))return function(e,t,n,i,o){var a=e.options,c={},l=a.props;if(s(l))for(var u in l)c[u]=Fe(u,l,t||r);else s(n.attrs)&&Lt(c,n.attrs),s(n.props)&&Lt(c,n.props);var h=new Dt(n,c,o,i,e),d=a.render.call(null,h._c,h);if(d instanceof fe)return jt(d,n,h.parent,a,h);if(Array.isArray(d)){for(var p=ut(d)||[],f=new Array(p.length),m=0;m<p.length;m++)f[m]=jt(p[m],n,h.parent,a,h);return f}}(e,d,t,n,a);var f=t.on;if(t.on=t.nativeOn,o(e.options.abstract)){var m=t.slot;t={},m&&(t.slot=m)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Ft.length;n++){var r=Ft[n],i=t[r],s=Mt[r];i===s||i&&i._merged||(t[r]=i?$t(s,i):s)}}(t);var _=e.options.name||l;return new fe("vue-component-"+e.cid+(_?"-"+_:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:f,tag:l,children:a},h)}}}function $t(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function qt(e,t,n,r,l,u){return(Array.isArray(n)||a(n))&&(l=r,r=n,n=void 0),o(u)&&(l=2),function(e,t,n,r,a){if(s(n)&&s(n.__ob__))return _e();s(n)&&s(n.is)&&(t=n.is);if(!t)return _e();0;Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);2===a?r=ut(r):1===a&&(r=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(r));var l,u;if("string"==typeof t){var h;u=e.$vnode&&e.$vnode.ns||U.getTagNamespace(t),l=U.isReservedTag(t)?new fe(U.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!s(h=Me(e.$options,"components",t))?new fe(t,n,r,void 0,void 0,e):Ut(h,n,e,r,t)}else l=Ut(t,n,e,r);return Array.isArray(l)?l:s(l)?(s(u)&&function e(t,n,r){t.ns=n,"foreignObject"===t.tag&&(n=void 0,r=!0);if(s(t.children))for(var a=0,c=t.children.length;a<c;a++){var l=t.children[a];s(l.tag)&&(i(l.ns)||o(r)&&"svg"!==l.tag)&&e(l,n,r)}}(l,u),s(n)&&function(e){c(e.style)&&it(e.style);c(e.class)&&it(e.class)}(n),l):_e()}(e,t,n,r,l)}var Wt,Ht=null;function Vt(e,t){return(e.__esModule||ae&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function zt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(s(n)&&(s(n.componentOptions)||mt(n)))return n}}function Bt(e,t){Wt.$on(e,t)}function Kt(e,t){Wt.$off(e,t)}function Gt(e,t){var n=Wt;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Jt(e,t,n){Wt=e,at(t,n||{},Bt,Kt,Gt,e),Wt=void 0}var Yt=null;function Qt(e){var t=Yt;return Yt=e,function(){Yt=t}}function Xt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Zt(e,t){if(t){if(e._directInactive=!1,Xt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Zt(e.$children[n]);en(e,"activated")}}function en(e,t){de();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,s=n.length;i<s;i++)Ve(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),pe()}var tn=[],nn=[],rn={},sn=!1,on=!1,an=0;var cn=0,ln=Date.now;if(z&&!J){var un=window.performance;un&&"function"==typeof un.now&&ln()>document.createEvent("Event").timeStamp&&(ln=function(){return un.now()})}function hn(){var e,t;for(cn=ln(),on=!0,tn.sort((function(e,t){return e.id-t.id})),an=0;an<tn.length;an++)(e=tn[an]).before&&e.before(),t=e.id,rn[t]=null,e.run();var n=nn.slice(),r=tn.slice();an=tn.length=nn.length=0,rn={},sn=on=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Zt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&en(r,"updated")}}(r),ie&&U.devtools&&ie.emit("flush")}var dn=0,pn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++dn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!W.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};pn.prototype.get=function(){var e;de(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;He(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&it(e),pe(),this.cleanupDeps()}return e},pn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},pn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},pn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==rn[t]){if(rn[t]=!0,on){for(var n=tn.length-1;n>an&&tn[n].id>e.id;)n--;tn.splice(n+1,0,e)}else tn.push(e);sn||(sn=!0,nt(hn))}}(this)},pn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';Ve(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},pn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},pn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},pn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var fn={enumerable:!0,configurable:!0,get:P,set:P};function mn(e,t,n){fn.get=function(){return this[t][n]},fn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,fn)}function _n(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&Ie(!1);var s=function(s){i.push(s);var o=Fe(s,t,n,e);Ee(r,s,o),s in e||mn(e,"_props",s)};for(var o in t)s(o);Ie(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?P:O(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;u(t=e._data="function"==typeof t?function(e,t){de();try{return e.call(t,t)}catch(e){return He(e,t,"data()"),{}}finally{pe()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var s=n[i];0,r&&b(r,s)||(o=void 0,36!==(o=(s+"").charCodeAt(0))&&95!==o&&mn(e,"_data",s))}var o;ke(t,!0)}(e):ke(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=re();for(var i in t){var s=t[i],o="function"==typeof s?s:s.get;0,r||(n[i]=new pn(e,o||P,P,vn)),i in e||gn(e,i,s)}}(e,t.computed),t.watch&&t.watch!==ee&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)wn(e,n,r[i]);else wn(e,n,r)}}(e,t.watch)}var vn={lazy:!0};function gn(e,t,n){var r=!re();"function"==typeof n?(fn.get=r?yn(t):bn(n),fn.set=P):(fn.get=n.get?r&&!1!==n.cache?yn(t):bn(n.get):P,fn.set=n.set||P),Object.defineProperty(e,t,fn)}function yn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ue.target&&t.depend(),t.value}}function bn(e){return function(){return e.call(this,this)}}function wn(e,t,n,r){return u(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var Cn=0;function In(e){var t=e.options;if(e.super){var n=In(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&N(e.extendOptions,r),(t=e.options=Le(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function Tn(e){this._init(e)}function kn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var s=e.name||n.options.name;var o=function(e){this._init(e)};return(o.prototype=Object.create(n.prototype)).constructor=o,o.cid=t++,o.options=Le(n.options,e),o.super=n,o.options.props&&function(e){var t=e.options.props;for(var n in t)mn(e.prototype,"_props",n)}(o),o.options.computed&&function(e){var t=e.options.computed;for(var n in t)gn(e.prototype,n,t[n])}(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,M.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=N({},o.options),i[r]=o,o}}function En(e){return e&&(e.Ctor.options.name||e.tag)}function On(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!h(e)&&e.test(t)}function Sn(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&Nn(n,s,r,i)}}}function Nn(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,g(n,t)}!function(e){e.prototype._init=function(e){var t=this;t._uid=Cn++,t._isVue=!0,e&&e._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(t,e):t.$options=Le(In(t.constructor),e||{},t),t._renderProxy=t,t._self=t,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(t),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Jt(e,t)}(t),function(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=pt(t._renderChildren,i),e.$scopedSlots=r,e._c=function(t,n,r,i){return qt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return qt(e,t,n,r,i,!0)};var s=n&&n.data;Ee(e,"$attrs",s&&s.attrs||r,null,!0),Ee(e,"$listeners",t._parentListeners||r,null,!0)}(t),en(t,"beforeCreate"),function(e){var t=dt(e.$options.inject,e);t&&(Ie(!1),Object.keys(t).forEach((function(n){Ee(e,n,t[n])})),Ie(!0))}(t),_n(t),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(t),en(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(Tn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Oe,e.prototype.$delete=Se,e.prototype.$watch=function(e,t,n){if(u(t))return wn(this,e,t,n);(n=n||{}).user=!0;var r=new pn(this,e,t,n);if(n.immediate){var i='callback for immediate watcher "'+r.expression+'"';de(),Ve(t,this,[r.value],this,i),pe()}return function(){r.teardown()}}}(Tn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,s=e.length;i<s;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var s,o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;for(var a=o.length;a--;)if((s=o[a])===t||s.fn===t){o.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?S(n):n;for(var r=S(arguments,1),i='event handler for "'+e+'"',s=0,o=n.length;s<o;s++)Ve(n[s],t,r,t,i)}return t}}(Tn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,s=Qt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){en(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||g(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),en(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(Tn),function(e){At(e.prototype),e.prototype.$nextTick=function(e){return nt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=_t(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Ht=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){He(n,t,"render"),e=t._vnode}finally{Ht=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof fe||(e=_e()),e.parent=i,e}}(Tn);var Rn=[String,RegExp,Array],Pn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Rn,exclude:Rn,max:[String,Number]},methods:{cacheVNode:function(){var e=this.cache,t=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var i=n.tag,s=n.componentInstance,o=n.componentOptions;e[r]={name:En(o),tag:i,componentInstance:s},t.push(r),this.max&&t.length>parseInt(this.max)&&Nn(e,t[0],t,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Nn(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Sn(e,(function(e){return On(t,e)}))})),this.$watch("exclude",(function(t){Sn(e,(function(e){return!On(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=zt(e),n=t&&t.componentOptions;if(n){var r=En(n),i=this.include,s=this.exclude;if(i&&(!r||!On(i,r))||s&&r&&On(s,r))return t;var o=this.cache,a=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;o[c]?(t.componentInstance=o[c].componentInstance,g(a,c),a.push(c)):(this.vnodeToCache=t,this.keyToCache=c),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return U}};Object.defineProperty(e,"config",t),e.util={warn:ce,extend:N,mergeOptions:Le,defineReactive:Ee},e.set=Oe,e.delete=Se,e.nextTick=nt,e.observable=function(e){return ke(e),e},e.options=Object.create(null),M.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,N(e.options.components,Pn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=S(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=Le(this.options,e),this}}(e),kn(e),function(e){M.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&u(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}(e)}(Tn),Object.defineProperty(Tn.prototype,"$isServer",{get:re}),Object.defineProperty(Tn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Tn,"FunctionalRenderContext",{value:Dt}),Tn.version="2.6.14";var xn=_("style,class"),An=_("input,textarea,option,select,progress"),Dn=_("contenteditable,draggable,spellcheck"),jn=_("events,caret,typing,plaintext-only"),Ln=_("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Mn="http://www.w3.org/1999/xlink",Fn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Un=function(e){return Fn(e)?e.slice(6,e.length):""},$n=function(e){return null==e||!1===e};function qn(e){for(var t=e.data,n=e,r=e;s(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=Wn(r.data,t));for(;s(n=n.parent);)n&&n.data&&(t=Wn(t,n.data));return function(e,t){if(s(e)||s(t))return Hn(e,Vn(t));return""}(t.staticClass,t.class)}function Wn(e,t){return{staticClass:Hn(e.staticClass,t.staticClass),class:s(e.class)?[e.class,t.class]:t.class}}function Hn(e,t){return e?t?e+" "+t:e:t||""}function Vn(e){return Array.isArray(e)?function(e){for(var t,n="",r=0,i=e.length;r<i;r++)s(t=Vn(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):c(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var zn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Bn=_("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Kn=_("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Gn=function(e){return Bn(e)||Kn(e)};var Jn=Object.create(null);var Yn=_("text,number,password,search,email,tel,url");var Qn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(e,t){return document.createElementNS(zn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),Xn={create:function(e,t){Zn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Zn(e,!0),Zn(t))},destroy:function(e){Zn(e,!0)}};function Zn(e,t){var n=e.data.ref;if(s(n)){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?g(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var er=new fe("",{},[]),tr=["create","activate","update","remove","destroy"];function nr(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&s(e.data)===s(t.data)&&function(e,t){if("input"!==e.tag)return!0;var n,r=s(n=e.data)&&s(n=n.attrs)&&n.type,i=s(n=t.data)&&s(n=n.attrs)&&n.type;return r===i||Yn(r)&&Yn(i)}(e,t)||o(e.isAsyncPlaceholder)&&i(t.asyncFactory.error))}function rr(e,t,n){var r,i,o={};for(r=t;r<=n;++r)s(i=e[r].key)&&(o[i]=r);return o}var ir={create:sr,update:sr,destroy:function(e){sr(e,er)}};function sr(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,s=e===er,o=t===er,a=ar(e.data.directives,e.context),c=ar(t.data.directives,t.context),l=[],u=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,lr(i,"update",t,e),i.def&&i.def.componentUpdated&&u.push(i)):(lr(i,"bind",t,e),i.def&&i.def.inserted&&l.push(i));if(l.length){var h=function(){for(var n=0;n<l.length;n++)lr(l[n],"inserted",t,e)};s?ct(t,"insert",h):h()}u.length&&ct(t,"postpatch",(function(){for(var n=0;n<u.length;n++)lr(u[n],"componentUpdated",t,e)}));if(!s)for(n in a)c[n]||lr(a[n],"unbind",e,e,o)}(e,t)}var or=Object.create(null);function ar(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=or),i[cr(r)]=r,r.def=Me(t.$options,"directives",r.name);return i}function cr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function lr(e,t,n,r,i){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,r,i)}catch(r){He(r,n.context,"directive "+e.name+" "+t+" hook")}}var ur=[Xn,ir];function hr(e,t){var n=t.componentOptions;if(!(s(n)&&!1===n.Ctor.options.inheritAttrs||i(e.data.attrs)&&i(t.data.attrs))){var r,o,a=t.elm,c=e.data.attrs||{},l=t.data.attrs||{};for(r in s(l.__ob__)&&(l=t.data.attrs=N({},l)),l)o=l[r],c[r]!==o&&dr(a,r,o,t.data.pre);for(r in(J||Q)&&l.value!==c.value&&dr(a,"value",l.value),c)i(l[r])&&(Fn(r)?a.removeAttributeNS(Mn,Un(r)):Dn(r)||a.removeAttribute(r))}}function dr(e,t,n,r){r||e.tagName.indexOf("-")>-1?pr(e,t,n):Ln(t)?$n(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Dn(t)?e.setAttribute(t,function(e,t){return $n(t)||"false"===t?"false":"contenteditable"===e&&jn(t)?t:"true"}(t,n)):Fn(t)?$n(n)?e.removeAttributeNS(Mn,Un(t)):e.setAttributeNS(Mn,t,n):pr(e,t,n)}function pr(e,t,n){if($n(n))e.removeAttribute(t);else{if(J&&!Y&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var fr={create:hr,update:hr};function mr(e,t){var n=t.elm,r=t.data,o=e.data;if(!(i(r.staticClass)&&i(r.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=qn(t),c=n._transitionClasses;s(c)&&(a=Hn(a,Vn(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var _r,vr={create:mr,update:mr};function gr(e,t,n){var r=_r;return function i(){var s=t.apply(null,arguments);null!==s&&wr(e,i,n,r)}}var yr=Ge&&!(Z&&Number(Z[1])<=53);function br(e,t,n,r){if(yr){var i=cn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}_r.addEventListener(e,t,te?{capture:n,passive:r}:n)}function wr(e,t,n,r){(r||_r).removeEventListener(e,t._wrapper||t,n)}function Cr(e,t){if(!i(e.data.on)||!i(t.data.on)){var n=t.data.on||{},r=e.data.on||{};_r=t.elm,function(e){if(s(e.__r)){var t=J?"change":"input";e[t]=[].concat(e.__r,e[t]||[]),delete e.__r}s(e.__c)&&(e.change=[].concat(e.__c,e.change||[]),delete e.__c)}(n),at(n,r,br,wr,gr,t.context),_r=void 0}}var Ir,Tr={create:Cr,update:Cr};function kr(e,t){if(!i(e.data.domProps)||!i(t.data.domProps)){var n,r,o=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in s(c.__ob__)&&(c=t.data.domProps=N({},c)),a)n in c||(o[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=r;var l=i(r)?"":String(r);Er(o,l)&&(o.value=l)}else if("innerHTML"===n&&Kn(o.tagName)&&i(o.innerHTML)){(Ir=Ir||document.createElement("div")).innerHTML="<svg>"+r+"</svg>";for(var u=Ir.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;u.firstChild;)o.appendChild(u.firstChild)}else if(r!==a[n])try{o[n]=r}catch(e){}}}}function Er(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var n=e.value,r=e._vModifiers;if(s(r)){if(r.number)return m(n)!==m(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}(e,t))}var Or={create:kr,update:kr},Sr=w((function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach((function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}})),t}));function Nr(e){var t=Rr(e.style);return e.staticStyle?N(e.staticStyle,t):t}function Rr(e){return Array.isArray(e)?R(e):"string"==typeof e?Sr(e):e}var Pr,xr=/^--/,Ar=/\s*!important$/,Dr=function(e,t,n){if(xr.test(t))e.style.setProperty(t,n);else if(Ar.test(n))e.style.setProperty(E(t),n.replace(Ar,""),"important");else{var r=Lr(t);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)e.style[r]=n[i];else e.style[r]=n}},jr=["Webkit","Moz","ms"],Lr=w((function(e){if(Pr=Pr||document.createElement("div").style,"filter"!==(e=I(e))&&e in Pr)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<jr.length;n++){var r=jr[n]+t;if(r in Pr)return r}}));function Mr(e,t){var n=t.data,r=e.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var o,a,c=t.elm,l=r.staticStyle,u=r.normalizedStyle||r.style||{},h=l||u,d=Rr(t.data.style)||{};t.data.normalizedStyle=s(d.__ob__)?N({},d):d;var p=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Nr(i.data))&&N(r,n);(n=Nr(e.data))&&N(r,n);for(var s=e;s=s.parent;)s.data&&(n=Nr(s.data))&&N(r,n);return r}(t,!0);for(a in h)i(p[a])&&Dr(c,a,"");for(a in p)(o=p[a])!==h[a]&&Dr(c,a,null==o?"":o)}}var Fr={create:Mr,update:Mr},Ur=/\s+/;function $r(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ur).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function qr(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ur).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function Wr(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&N(t,Hr(e.name||"v")),N(t,e),t}return"string"==typeof e?Hr(e):void 0}}var Hr=w((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Vr=z&&!Y,zr="transition",Br="transitionend",Kr="animation",Gr="animationend";Vr&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(zr="WebkitTransition",Br="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Kr="WebkitAnimation",Gr="webkitAnimationEnd"));var Jr=z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Yr(e){Jr((function(){Jr(e)}))}function Qr(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),$r(e,t))}function Xr(e,t){e._transitionClasses&&g(e._transitionClasses,t),qr(e,t)}function Zr(e,t,n){var r=ti(e,t),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a="transition"===i?Br:Gr,c=0,l=function(){e.removeEventListener(a,u),n()},u=function(t){t.target===e&&++c>=o&&l()};setTimeout((function(){c<o&&l()}),s+1),e.addEventListener(a,u)}var ei=/\b(transform|all)(,|$)/;function ti(e,t){var n,r=window.getComputedStyle(e),i=(r[zr+"Delay"]||"").split(", "),s=(r[zr+"Duration"]||"").split(", "),o=ni(i,s),a=(r[Kr+"Delay"]||"").split(", "),c=(r[Kr+"Duration"]||"").split(", "),l=ni(a,c),u=0,h=0;return"transition"===t?o>0&&(n="transition",u=o,h=s.length):"animation"===t?l>0&&(n="animation",u=l,h=c.length):h=(n=(u=Math.max(o,l))>0?o>l?"transition":"animation":null)?"transition"===n?s.length:c.length:0,{type:n,timeout:u,propCount:h,hasTransform:"transition"===n&&ei.test(r[zr+"Property"])}}function ni(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return ri(t)+ri(e[n])})))}function ri(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ii(e,t){var n=e.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Wr(e.data.transition);if(!i(r)&&!s(n._enterCb)&&1===n.nodeType){for(var o=r.css,a=r.type,l=r.enterClass,u=r.enterToClass,h=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,f=r.appearActiveClass,_=r.beforeEnter,v=r.enter,g=r.afterEnter,y=r.enterCancelled,b=r.beforeAppear,w=r.appear,C=r.afterAppear,I=r.appearCancelled,T=r.duration,k=Yt,E=Yt.$vnode;E&&E.parent;)k=E.context,E=E.parent;var O=!k._isMounted||!e.isRootInsert;if(!O||w||""===w){var S=O&&d?d:l,N=O&&f?f:h,R=O&&p?p:u,P=O&&b||_,x=O&&"function"==typeof w?w:v,A=O&&C||g,D=O&&I||y,j=m(c(T)?T.enter:T);0;var M=!1!==o&&!Y,F=ai(x),U=n._enterCb=L((function(){M&&(Xr(n,R),Xr(n,N)),U.cancelled?(M&&Xr(n,S),D&&D(n)):A&&A(n),n._enterCb=null}));e.data.show||ct(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),x&&x(n,U)})),P&&P(n),M&&(Qr(n,S),Qr(n,N),Yr((function(){Xr(n,S),U.cancelled||(Qr(n,R),F||(oi(j)?setTimeout(U,j):Zr(n,a,U)))}))),e.data.show&&(t&&t(),x&&x(n,U)),M||F||U()}}}function si(e,t){var n=e.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Wr(e.data.transition);if(i(r)||1!==n.nodeType)return t();if(!s(n._leaveCb)){var o=r.css,a=r.type,l=r.leaveClass,u=r.leaveToClass,h=r.leaveActiveClass,d=r.beforeLeave,p=r.leave,f=r.afterLeave,_=r.leaveCancelled,v=r.delayLeave,g=r.duration,y=!1!==o&&!Y,b=ai(p),w=m(c(g)?g.leave:g);0;var C=n._leaveCb=L((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),y&&(Xr(n,u),Xr(n,h)),C.cancelled?(y&&Xr(n,l),_&&_(n)):(t(),f&&f(n)),n._leaveCb=null}));v?v(I):I()}function I(){C.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),y&&(Qr(n,l),Qr(n,h),Yr((function(){Xr(n,l),C.cancelled||(Qr(n,u),b||(oi(w)?setTimeout(C,w):Zr(n,a,C)))}))),p&&p(n,C),y||b||C())}}function oi(e){return"number"==typeof e&&!isNaN(e)}function ai(e){if(i(e))return!1;var t=e.fns;return s(t)?ai(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function ci(e,t){!0!==t.data.show&&ii(t)}var li=function(e){var t,n,r={},c=e.modules,l=e.nodeOps;for(t=0;t<tr.length;++t)for(r[tr[t]]=[],n=0;n<c.length;++n)s(c[n][tr[t]])&&r[tr[t]].push(c[n][tr[t]]);function u(e){var t=l.parentNode(e);s(t)&&l.removeChild(t,e)}function h(e,t,n,i,a,c,u){if(s(e.elm)&&s(c)&&(e=c[u]=ge(e)),e.isRootInsert=!a,!function(e,t,n,i){var a=e.data;if(s(a)){var c=s(e.componentInstance)&&a.keepAlive;if(s(a=a.hook)&&s(a=a.init)&&a(e,!1),s(e.componentInstance))return d(e,t),p(n,e.elm,i),o(c)&&function(e,t,n,i){var o,a=e;for(;a.componentInstance;)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](er,a);t.push(a);break}p(n,e.elm,i)}(e,t,n,i),!0}}(e,t,n,i)){var h=e.data,m=e.children,_=e.tag;s(_)?(e.elm=e.ns?l.createElementNS(e.ns,_):l.createElement(_,e),g(e),f(e,m,t),s(h)&&v(e,t),p(n,e.elm,i)):o(e.isComment)?(e.elm=l.createComment(e.text),p(n,e.elm,i)):(e.elm=l.createTextNode(e.text),p(n,e.elm,i))}}function d(e,t){s(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,m(e)?(v(e,t),g(e)):(Zn(e),t.push(e))}function p(e,t,n){s(e)&&(s(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function f(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)h(t[r],n,e.elm,null,!0,t,r)}else a(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function m(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return s(e.tag)}function v(e,n){for(var i=0;i<r.create.length;++i)r.create[i](er,e);s(t=e.data.hook)&&(s(t.create)&&t.create(er,e),s(t.insert)&&n.push(e))}function g(e){var t;if(s(t=e.fnScopeId))l.setStyleScope(e.elm,t);else for(var n=e;n;)s(t=n.context)&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent;s(t=Yt)&&t!==e.context&&t!==e.fnContext&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function y(e,t,n,r,i,s){for(;r<=i;++r)h(n[r],s,e,t,!1,n,r)}function b(e){var t,n,i=e.data;if(s(i))for(s(t=i.hook)&&s(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(s(t=e.children))for(n=0;n<e.children.length;++n)b(e.children[n])}function w(e,t,n){for(;t<=n;++t){var r=e[t];s(r)&&(s(r.tag)?(C(r),b(r)):u(r.elm))}}function C(e,t){if(s(t)||s(e.data)){var n,i=r.remove.length+1;for(s(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&u(e)}return n.listeners=t,n}(e.elm,i),s(n=e.componentInstance)&&s(n=n._vnode)&&s(n.data)&&C(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);s(n=e.data.hook)&&s(n=n.remove)?n(e,t):t()}else u(e.elm)}function I(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(s(o)&&nr(e,o))return i}}function T(e,t,n,a,c,u){if(e!==t){s(t.elm)&&s(a)&&(t=a[c]=ge(t));var d=t.elm=e.elm;if(o(e.isAsyncPlaceholder))s(t.asyncFactory.resolved)?O(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(o(t.isStatic)&&o(e.isStatic)&&t.key===e.key&&(o(t.isCloned)||o(t.isOnce)))t.componentInstance=e.componentInstance;else{var p,f=t.data;s(f)&&s(p=f.hook)&&s(p=p.prepatch)&&p(e,t);var _=e.children,v=t.children;if(s(f)&&m(t)){for(p=0;p<r.update.length;++p)r.update[p](e,t);s(p=f.hook)&&s(p=p.update)&&p(e,t)}i(t.text)?s(_)&&s(v)?_!==v&&function(e,t,n,r,o){var a,c,u,d=0,p=0,f=t.length-1,m=t[0],_=t[f],v=n.length-1,g=n[0],b=n[v],C=!o;for(0;d<=f&&p<=v;)i(m)?m=t[++d]:i(_)?_=t[--f]:nr(m,g)?(T(m,g,r,n,p),m=t[++d],g=n[++p]):nr(_,b)?(T(_,b,r,n,v),_=t[--f],b=n[--v]):nr(m,b)?(T(m,b,r,n,v),C&&l.insertBefore(e,m.elm,l.nextSibling(_.elm)),m=t[++d],b=n[--v]):nr(_,g)?(T(_,g,r,n,p),C&&l.insertBefore(e,_.elm,m.elm),_=t[--f],g=n[++p]):(i(a)&&(a=rr(t,d,f)),i(c=s(g.key)?a[g.key]:I(g,t,d,f))?h(g,r,e,m.elm,!1,n,p):nr(u=t[c],g)?(T(u,g,r,n,p),t[c]=void 0,C&&l.insertBefore(e,u.elm,m.elm)):h(g,r,e,m.elm,!1,n,p),g=n[++p]);d>f?y(e,i(n[v+1])?null:n[v+1].elm,n,p,v,r):p>v&&w(t,d,f)}(d,_,v,n,u):s(v)?(s(e.text)&&l.setTextContent(d,""),y(d,null,v,0,v.length-1,n)):s(_)?w(_,0,_.length-1):s(e.text)&&l.setTextContent(d,""):e.text!==t.text&&l.setTextContent(d,t.text),s(f)&&s(p=f.hook)&&s(p=p.postpatch)&&p(e,t)}}}function k(e,t,n){if(o(n)&&s(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var E=_("attrs,class,staticClass,staticStyle,key");function O(e,t,n,r){var i,a=t.tag,c=t.data,l=t.children;if(r=r||c&&c.pre,t.elm=e,o(t.isComment)&&s(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(t,!0),s(i=t.componentInstance)))return d(t,n),!0;if(s(a)){if(s(l))if(e.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var u=!0,h=e.firstChild,p=0;p<l.length;p++){if(!h||!O(h,l[p],n,r)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else f(t,l,n);if(s(c)){var m=!1;for(var _ in c)if(!E(_)){m=!0,v(t,n);break}!m&&c.class&&it(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!i(t)){var c,u=!1,d=[];if(i(e))u=!0,h(t,d);else{var p=s(e.nodeType);if(!p&&nr(e,t))T(e,t,d,null,null,a);else{if(p){if(1===e.nodeType&&e.hasAttribute("data-server-rendered")&&(e.removeAttribute("data-server-rendered"),n=!0),o(n)&&O(e,t,d))return k(t,d,!0),e;c=e,e=new fe(l.tagName(c).toLowerCase(),{},[],void 0,c)}var f=e.elm,_=l.parentNode(f);if(h(t,d,f._leaveCb?null:_,l.nextSibling(f)),s(t.parent))for(var v=t.parent,g=m(t);v;){for(var y=0;y<r.destroy.length;++y)r.destroy[y](v);if(v.elm=t.elm,g){for(var C=0;C<r.create.length;++C)r.create[C](er,v);var I=v.data.hook.insert;if(I.merged)for(var E=1;E<I.fns.length;E++)I.fns[E]()}else Zn(v);v=v.parent}s(_)?w([e],0,0):s(e.tag)&&b(e)}}return k(t,d,u),t.elm}s(e)&&b(e)}}({nodeOps:Qn,modules:[fr,vr,Tr,Or,Fr,z?{create:ci,activate:ci,remove:function(e,t){!0!==e.data.show?si(e,t):t()}}:{}].concat(ur)});Y&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&vi(e,"input")}));var ui={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ct(n,"postpatch",(function(){ui.componentUpdated(e,t,n)})):hi(e,t,n.context),e._vOptions=[].map.call(e.options,fi)):("textarea"===n.tag||Yn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",mi),e.addEventListener("compositionend",_i),e.addEventListener("change",_i),Y&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){hi(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,fi);if(i.some((function(e,t){return!D(e,r[t])})))(e.multiple?t.value.some((function(e){return pi(e,i)})):t.value!==t.oldValue&&pi(t.value,i))&&vi(e,"change")}}};function hi(e,t,n){di(e,t,n),(J||Q)&&setTimeout((function(){di(e,t,n)}),0)}function di(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],i)s=j(r,fi(o))>-1,o.selected!==s&&(o.selected=s);else if(D(fi(o),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function pi(e,t){return t.every((function(t){return!D(t,e)}))}function fi(e){return"_value"in e?e._value:e.value}function mi(e){e.target.composing=!0}function _i(e){e.target.composing&&(e.target.composing=!1,vi(e.target,"input"))}function vi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function gi(e){return!e.componentInstance||e.data&&e.data.transition?e:gi(e.componentInstance._vnode)}var yi={model:ui,show:{bind:function(e,t,n){var r=t.value,i=(n=gi(n)).data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,ii(n,(function(){e.style.display=s}))):e.style.display=r?s:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=gi(n)).data&&n.data.transition?(n.data.show=!0,r?ii(n,(function(){e.style.display=e.__vOriginalDisplay})):si(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},bi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function wi(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?wi(zt(t.children)):e}function Ci(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var s in i)t[I(s)]=i[s];return t}function Ii(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var Ti=function(e){return e.tag||mt(e)},ki=function(e){return"show"===e.name},Ei={name:"transition",props:bi,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Ti)).length){0;var r=this.mode;0;var i=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return i;var s=wi(i);if(!s)return i;if(this._leaving)return Ii(e,i);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=Ci(this),l=this._vnode,u=wi(l);if(s.data.directives&&s.data.directives.some(ki)&&(s.data.show=!0),u&&u.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(s,u)&&!mt(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=N({},c);if("out-in"===r)return this._leaving=!0,ct(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),Ii(e,i);if("in-out"===r){if(mt(s))return l;var d,p=function(){d()};ct(c,"afterEnter",p),ct(c,"enterCancelled",p),ct(h,"delayLeave",(function(e){d=e}))}}return i}}},Oi=N({tag:String,moveClass:String},bi);function Si(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ni(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ri(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}delete Oi.mode;var Pi={Transition:Ei,TransitionGroup:{props:Oi,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Qt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=Ci(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var l=[],u=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d)}this.kept=e(t,null,l),this.removed=u}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Si),e.forEach(Ni),e.forEach(Ri),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Qr(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Br,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Br,e),n._moveCb=null,Xr(n,t))})}})))},methods:{hasMove:function(e,t){if(!Vr)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){qr(n,e)})),$r(n,t),n.style.display="none",this.$el.appendChild(n);var r=ti(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Tn.config.mustUseProp=function(e,t,n){return"value"===n&&An(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Tn.config.isReservedTag=Gn,Tn.config.isReservedAttr=xn,Tn.config.getTagNamespace=function(e){return Kn(e)?"svg":"math"===e?"math":void 0},Tn.config.isUnknownElement=function(e){if(!z)return!0;if(Gn(e))return!1;if(e=e.toLowerCase(),null!=Jn[e])return Jn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Jn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Jn[e]=/HTMLUnknownElement/.test(t.toString())},N(Tn.options.directives,yi),N(Tn.options.components,Pi),Tn.prototype.__patch__=z?li:P,Tn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=_e),en(e,"beforeMount"),r=function(){e._update(e._render(),n)},new pn(e,r,P,{before:function(){e._isMounted&&!e._isDestroyed&&en(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,en(e,"mounted")),e}(this,e=e&&z?function(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}(e):void 0,t)},z&&setTimeout((function(){U.devtools&&ie&&ie.emit("init",Tn)}),0),t.a=Tn}).call(this,n(8),n(19).setImmediate)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,h=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&p())}function p(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},,function(e,t,n){"use strict";
/*!
  * vue-router v3.5.4
  * (c) 2022 Evan You
  * @license MIT
  */function r(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,s=function(e){return"%"+e.charCodeAt(0).toString(16)},o=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,s).replace(o,",")};function c(e){try{return decodeURIComponent(e)}catch(e){0}return e}var l=function(e){return null==e||"object"==typeof e?e:String(e)};function u(e){var t={};return(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function h(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))})),r.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var d=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,s=t.query||{};try{s=f(s)}catch(e){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:v(t,i),matched:e?_(e):[]};return n&&(o.redirectedFrom=v(n,i)),Object.freeze(o)}function f(e){if(Array.isArray(e))return e.map(f);if(e&&"object"==typeof e){var t={};for(var n in e)t[n]=f(e[n]);return t}return e}var m=p(null,{path:"/"});function _(e){for(var t=[];e;)t.unshift(e),e=e.parent;return t}function v(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;return void 0===i&&(i=""),(n||"/")+(t||h)(r)+i}function g(e,t,n){return t===m?e===t:!!t&&(e.path&&t.path?e.path.replace(d,"")===t.path.replace(d,"")&&(n||e.hash===t.hash&&y(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&y(e.query,t.query)&&y(e.params,t.params))))}function y(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var s=e[n];if(r[i]!==n)return!1;var o=t[n];return null==s||null==o?s===o:"object"==typeof s&&"object"==typeof o?y(s,o):String(s)===String(o)}))}function b(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var w={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,s=t.parent,o=t.data;o.routerView=!0;for(var a=s.$createElement,c=n.name,l=s.$route,u=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;s&&s._routerRoot!==s;){var p=s.$vnode?s.$vnode.data:{};p.routerView&&h++,p.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var f=u[c],m=f&&f.component;return m?(f.configProps&&C(m,o,f.route,f.configProps),a(m,o,i)):a()}var _=l.matched[h],v=_&&_.components[c];if(!_||!v)return u[c]=null,a();u[c]={component:v},o.registerRouteInstance=function(e,t){var n=_.instances[c];(t&&n!==e||!t&&n===e)&&(_.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){_.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==_.instances[c]&&(_.instances[c]=e.componentInstance),b(l)};var g=_.props&&_.props[c];return g&&(r(u[c],{route:l,configProps:g}),C(v,o,l,g)),a(v,o,i)}};function C(e,t,n,i){var s=t.props=function(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}(n,i);if(s){s=t.props=r({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function I(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function T(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var k=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},E=$,O=x,S=function(e,t){return D(x(e,t),t)},N=D,R=U,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function x(e,t){for(var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/";null!=(n=P.exec(e));){var c=n[0],l=n[1],u=n.index;if(o+=e.slice(s,u),s=u+c.length,l)o+=l[1];else{var h=e[s],d=n[2],p=n[3],f=n[4],m=n[5],_=n[6],v=n[7];o&&(r.push(o),o="");var g=null!=d&&null!=h&&h!==d,y="+"===_||"*"===_,b="?"===_||"*"===_,w=n[2]||a,C=f||m;r.push({name:p||i++,prefix:d||"",delimiter:w,optional:b,repeat:y,partial:g,asterisk:!!v,pattern:C?L(C):v?".*":"[^"+j(w)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function A(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function D(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",F(t)));return function(t,r){for(var i="",s=t||{},o=(r||{}).pretty?A:encodeURIComponent,a=0;a<e.length;a++){var c=e[a];if("string"!=typeof c){var l,u=s[c.name];if(null==u){if(c.optional){c.partial&&(i+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(k(u)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(u)+"`");if(0===u.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<u.length;h++){if(l=o(u[h]),!n[a].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(u).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):o(u),!n[a].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');i+=c.prefix+l}}else i+=c}return i}}function j(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function L(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function M(e,t){return e.keys=t,e}function F(e){return e&&e.sensitive?"":"i"}function U(e,t,n){k(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"==typeof a)s+=j(a);else{var c=j(a.prefix),l="(?:"+a.pattern+")";t.push(a),a.repeat&&(l+="(?:"+c+l+")*"),s+=l=a.optional?a.partial?c+"("+l+")?":"(?:"+c+"("+l+"))?":c+"("+l+")"}}var u=j(n.delimiter||"/"),h=s.slice(-u.length)===u;return r||(s=(h?s.slice(0,-u.length):s)+"(?:"+u+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+u+"|$)",M(new RegExp("^"+s,F(n)),t)}function $(e,t,n){return k(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return M(e,t)}(e,t):k(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push($(e[i],t,n).source);return M(new RegExp("(?:"+r.join("|")+")",F(n)),t)}(e,t,n):function(e,t,n){return U(x(e,n),t,n)}(e,t,n)}E.parse=O,E.compile=S,E.tokensToFunction=N,E.tokensToRegExp=R;var q=Object.create(null);function W(e,t,n){t=t||{};try{var r=q[e]||(q[e]=E.compile(e));return"string"==typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(e){return""}finally{delete t[0]}}function H(e,t,n,i){var s="string"==typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){var o=(s=r({},e)).params;return o&&"object"==typeof o&&(s.params=r({},o)),s}if(!s.path&&s.params&&t){(s=r({},s))._normalized=!0;var a=r(r({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;s.path=W(c,a,t.path)}else 0;return s}var h=function(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}(s.path||""),d=t&&t.path||"/",p=h.path?I(h.path,d,n||s.append):d,f=function(e,t,n){void 0===t&&(t={});var r,i=n||u;try{r=i(e||"")}catch(e){r={}}for(var s in t){var o=t[s];r[s]=Array.isArray(o)?o.map(l):l(o)}return r}(h.query,s.query,i&&i.options.parseQuery),m=s.hash||h.hash;return m&&"#"!==m.charAt(0)&&(m="#"+m),{_normalized:!0,path:p,query:f,hash:m}}var V,z=function(){},B={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,s=n.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,l={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,f=null==u?"router-link-active":u,m=null==h?"router-link-exact-active":h,_=null==this.activeClass?f:this.activeClass,v=null==this.exactActiveClass?m:this.exactActiveClass,y=a.redirectedFrom?p(null,H(a.redirectedFrom),null,n):a;l[v]=g(i,y,this.exactPath),l[_]=this.exact||this.exactPath?l[v]:function(e,t){return 0===e.path.replace(d,"/").indexOf(t.path.replace(d,"/"))&&(!t.hash||e.hash===t.hash)&&function(e,t){for(var n in t)if(!(n in e))return!1;return!0}(e.query,t.query)}(i,y);var b=l[v]?this.ariaCurrentValue:null,w=function(e){K(e)&&(t.replace?n.replace(o,z):n.push(o,z))},C={click:K};Array.isArray(this.event)?this.event.forEach((function(e){C[e]=w})):C[this.event]=w;var I={class:l},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:l[_],isExactActive:l[v]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?e():e("span",{},T)}if("a"===this.tag)I.on=C,I.attrs={href:c,"aria-current":b};else{var k=function e(t){var n;if(t)for(var r=0;r<t.length;r++){if("a"===(n=t[r]).tag)return n;if(n.children&&(n=e(n.children)))return n}}(this.$slots.default);if(k){k.isStatic=!1;var E=k.data=r({},k.data);for(var O in E.on=E.on||{},E.on){var S=E.on[O];O in C&&(E.on[O]=Array.isArray(S)?S:[S])}for(var N in C)N in E.on?E.on[N].push(C[N]):E.on[N]=w;var R=k.data.attrs=r({},k.data.attrs);R.href=c,R["aria-current"]=b}else I.on=C}return e(this.tag,I,this.$slots.default)}};function K(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}var G="undefined"!=typeof window;function J(e,t,n,r,i){var s=t||[],o=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){!function e(t,n,r,i,s,o){var a=i.path,c=i.name;0;var l=i.pathToRegexpOptions||{},u=function(e,t,n){n||(e=e.replace(/\/$/,""));if("/"===e[0])return e;if(null==t)return e;return T(t.path+"/"+e)}(a,s,l.strict);"boolean"==typeof i.caseSensitive&&(l.sensitive=i.caseSensitive);var h={path:u,regex:Y(u,l),components:i.components||{default:i.component},alias:i.alias?"string"==typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:c,parent:s,matchAs:o,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};i.children&&i.children.forEach((function(i){var s=o?T(o+"/"+i.path):void 0;e(t,n,r,i,h,s)}));n[h.path]||(t.push(h.path),n[h.path]=h);if(void 0!==i.alias)for(var d=Array.isArray(i.alias)?i.alias:[i.alias],p=0;p<d.length;++p){0;var f={path:d[p],children:i.children};e(t,n,r,f,s,h.path||"/")}c&&(r[c]||(r[c]=h))}(s,o,a,e,i)}));for(var c=0,l=s.length;c<l;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),l--,c--);return{pathList:s,pathMap:o,nameMap:a}}function Y(e,t){return E(e,[],t)}function Q(e,t){var n=J(e),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(e,n,o){var a=H(e,n,!1,t),l=a.name;if(l){var u=s[l];if(!u)return c(null,a);var h=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!=typeof a.params&&(a.params={}),n&&"object"==typeof n.params)for(var d in n.params)!(d in a.params)&&h.indexOf(d)>-1&&(a.params[d]=n.params[d]);return a.path=W(u.path,a.params),c(u,a,o)}if(a.path){a.params={};for(var p=0;p<r.length;p++){var f=r[p],m=i[f];if(X(m.regex,a.path,a.params))return c(m,a,o)}}return c(null,a)}function a(e,n){var r=e.redirect,i="function"==typeof r?r(p(e,n,null,t)):r;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return c(null,n);var a=i,l=a.name,u=a.path,h=n.query,d=n.hash,f=n.params;if(h=a.hasOwnProperty("query")?a.query:h,d=a.hasOwnProperty("hash")?a.hash:d,f=a.hasOwnProperty("params")?a.params:f,l){s[l];return o({_normalized:!0,name:l,query:h,hash:d,params:f},void 0,n)}if(u){var m=function(e,t){return I(e,t.parent?t.parent.path:"/",!0)}(u,e);return o({_normalized:!0,path:W(m,f),query:h,hash:d},void 0,n)}return c(null,n)}function c(e,n,r){return e&&e.redirect?a(e,r||n):e&&e.matchAs?function(e,t,n){var r=o({_normalized:!0,path:W(n,t.params)});if(r){var i=r.matched,s=i[i.length-1];return t.params=r.params,c(s,t)}return c(null,t)}(0,n,e.matchAs):p(e,n,r,t)}return{match:o,addRoute:function(e,t){var n="object"!=typeof e?s[e]:void 0;J([t||e],r,i,s,n),n&&n.alias.length&&J(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,s,n)},getRoutes:function(){return r.map((function(e){return i[e]}))},addRoutes:function(e){J(e,r,i,s)}}}function X(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=e.keys[i-1];o&&(n[o.name||"pathMatch"]="string"==typeof r[i]?c(r[i]):r[i])}return!0}var Z=G&&window.performance&&window.performance.now?window.performance:Date;function ee(){return Z.now().toFixed(3)}var te=ee();function ne(){return te}function re(e){return te=e}var ie=Object.create(null);function se(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=ne(),window.history.replaceState(n,"",t),window.addEventListener("popstate",ce),function(){window.removeEventListener("popstate",ce)}}function oe(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var s=function(){var e=ne();if(e)return ie[e]}(),o=i.call(e,t,n,r?s:null);o&&("function"==typeof o.then?o.then((function(e){pe(e,s)})).catch((function(e){0})):pe(o,s))}))}}function ae(){var e=ne();e&&(ie[e]={x:window.pageXOffset,y:window.pageYOffset})}function ce(e){ae(),e.state&&e.state.key&&re(e.state.key)}function le(e){return he(e.x)||he(e.y)}function ue(e){return{x:he(e.x)?e.x:window.pageXOffset,y:he(e.y)?e.y:window.pageYOffset}}function he(e){return"number"==typeof e}var de=/^#\d/;function pe(e,t){var n,r="object"==typeof e;if(r&&"string"==typeof e.selector){var i=de.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(i){var s=e.offset&&"object"==typeof e.offset?e.offset:{};t=function(e,t){var n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{x:r.left-n.left-t.x,y:r.top-n.top-t.y}}(i,s={x:he((n=s).x)?n.x:0,y:he(n.y)?n.y:0})}else le(e)&&(t=ue(e))}else r&&le(e)&&(t=ue(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var fe,me=G&&((-1===(fe=window.navigator.userAgent).indexOf("Android 2.")&&-1===fe.indexOf("Android 4.0")||-1===fe.indexOf("Mobile Safari")||-1!==fe.indexOf("Chrome")||-1!==fe.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function _e(e,t){ae();var n=window.history;try{if(t){var i=r({},n.state);i.key=ne(),n.replaceState(i,"",e)}else n.pushState({key:re(ee())},"",e)}catch(n){window.location[t?"replace":"assign"](e)}}function ve(e){_e(e,!0)}function ge(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var ye={redirected:2,aborted:4,cancelled:8,duplicated:16};function be(e,t){return Ce(e,t,ye.redirected,'Redirected when going from "'+e.fullPath+'" to "'+function(e){if("string"==typeof e)return e;if("path"in e)return e.path;var t={};return Ie.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}(t)+'" via a navigation guard.')}function we(e,t){return Ce(e,t,ye.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Ce(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var Ie=["params","query","hash"];function Te(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function ke(e,t){return Te(e)&&e._isRouter&&(null==t||e.type===t)}function Ee(e){return function(t,n,r){var i=!1,s=0,o=null;Oe(e,(function(e,t,n,a){if("function"==typeof e&&void 0===e.cid){i=!0,s++;var c,l=Re((function(t){var i;((i=t).__esModule||Ne&&"Module"===i[Symbol.toStringTag])&&(t=t.default),e.resolved="function"==typeof t?t:V.extend(t),n.components[a]=t,--s<=0&&r()})),u=Re((function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=Te(e)?e:new Error(t),r(o))}));try{c=e(l,u)}catch(e){u(e)}if(c)if("function"==typeof c.then)c.then(l,u);else{var h=c.component;h&&"function"==typeof h.then&&h.then(l,u)}}})),i||r()}}function Oe(e,t){return Se(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Se(e){return Array.prototype.concat.apply([],e)}var Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Re(e){var t=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var Pe=function(e,t){this.router=e,this.base=function(e){if(!e)if(G){var t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else e="/";"/"!==e.charAt(0)&&(e="/"+e);return e.replace(/\/$/,"")}(t),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function xe(e,t,n,r){var i=Oe(e,(function(e,r,i,s){var o=function(e,t){"function"!=typeof e&&(e=V.extend(e));return e.options[t]}(e,t);if(o)return Array.isArray(o)?o.map((function(e){return n(e,r,i,s)})):n(o,r,i,s)}));return Se(r?i.reverse():i)}function Ae(e,t){if(t)return function(){return e.apply(t,arguments)}}Pe.prototype.listen=function(e){this.cb=e},Pe.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},Pe.prototype.onError=function(e){this.errorCbs.push(e)},Pe.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(e){throw this.errorCbs.forEach((function(t){t(e)})),e}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(ke(e,ye.redirected)&&s===m||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},Pe.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var s,o,a=function(e){!ke(e)&&Te(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},c=e.matched.length-1,l=i.matched.length-1;if(g(e,i)&&c===l&&e.matched[c]===i.matched[l])return this.ensureURL(),e.hash&&oe(this.router,i,e,!1),a(((o=Ce(s=i,e,ye.duplicated,'Avoided redundant navigation to current location: "'+s.fullPath+'".')).name="NavigationDuplicated",o));var u=function(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r&&e[n]===t[n];n++);return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}(this.current.matched,e.matched),h=u.updated,d=u.deactivated,p=u.activated,f=[].concat(function(e){return xe(e,"beforeRouteLeave",Ae,!0)}(d),this.router.beforeHooks,function(e){return xe(e,"beforeRouteUpdate",Ae)}(h),p.map((function(e){return e.beforeEnter})),Ee(p)),m=function(t,n){if(r.pending!==e)return a(we(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),a(function(e,t){return Ce(e,t,ye.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}(i,e))):Te(t)?(r.ensureURL(!0),a(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(a(be(i,e)),"object"==typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(e){a(e)}};ge(f,m,(function(){ge(function(e){return xe(e,"beforeRouteEnter",(function(e,t,n,r){return function(e,t,n){return function(r,i,s){return e(r,i,(function(e){"function"==typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)}))}}(e,n,r)}))}(p).concat(r.router.resolveHooks),m,(function(){if(r.pending!==e)return a(we(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){b(e)}))}))}))},Pe.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},Pe.prototype.setupListeners=function(){},Pe.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=m,this.pending=null};var De=function(e){function t(t,n){e.call(this,t,n),this._startLocation=je(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=me&&n;r&&this.listeners.push(se());var i=function(){var n=e.current,i=je(e.base);e.current===m&&i===e._startLocation||e.transitionTo(i,(function(e){r&&oe(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){_e(T(r.base+e.fullPath)),oe(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){ve(T(r.base+e.fullPath)),oe(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(je(this.base)!==this.current.fullPath){var t=T(this.base+this.current.fullPath);e?_e(t):ve(t)}},t.prototype.getCurrentLocation=function(){return je(this.base)},t}(Pe);function je(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(T(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var Le=function(e){function t(t,n,r){e.call(this,t,n),r&&function(e){var t=je(e);if(!/^\/#/.test(t))return window.location.replace(T(e+"/#"+t)),!0}(this.base)||Me()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router.options.scrollBehavior,n=me&&t;n&&this.listeners.push(se());var r=function(){var t=e.current;Me()&&e.transitionTo(Fe(),(function(r){n&&oe(e.router,r,t,!0),me||qe(r.fullPath)}))},i=me?"popstate":"hashchange";window.addEventListener(i,r),this.listeners.push((function(){window.removeEventListener(i,r)}))}},t.prototype.push=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){$e(e.fullPath),oe(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){qe(e.fullPath),oe(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;Fe()!==t&&(e?$e(t):qe(t))},t.prototype.getCurrentLocation=function(){return Fe()},t}(Pe);function Me(){var e=Fe();return"/"===e.charAt(0)||(qe("/"+e),!1)}function Fe(){var e=window.location.href,t=e.indexOf("#");return t<0?"":e=e.slice(t+1)}function Ue(e){var t=window.location.href,n=t.indexOf("#");return(n>=0?t.slice(0,n):t)+"#"+e}function $e(e){me?_e(Ue(e)):window.location.hash=e}function qe(e){me?ve(Ue(e)):window.location.replace(Ue(e))}var We=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){ke(e,ye.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(Pe),He=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Q(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!me&&!1!==e.fallback,this.fallback&&(t="hash"),G||(t="abstract"),this.mode=t,t){case"history":this.history=new De(this,e.base);break;case"hash":this.history=new Le(this,e.base,this.fallback);break;case"abstract":this.history=new We(this,e.base);break;default:0}},Ve={currentRoute:{configurable:!0}};function ze(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}He.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},Ve.currentRoute.get=function(){return this.history&&this.history.current},He.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof De||n instanceof Le){var r=function(e){n.setupListeners(),function(e){var r=n.current,i=t.options.scrollBehavior;me&&i&&"fullPath"in e&&oe(t,e,r,!1)}(e)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},He.prototype.beforeEach=function(e){return ze(this.beforeHooks,e)},He.prototype.beforeResolve=function(e){return ze(this.resolveHooks,e)},He.prototype.afterEach=function(e){return ze(this.afterHooks,e)},He.prototype.onReady=function(e,t){this.history.onReady(e,t)},He.prototype.onError=function(e){this.history.onError(e)},He.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!=typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},He.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!=typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},He.prototype.go=function(e){this.history.go(e)},He.prototype.back=function(){this.go(-1)},He.prototype.forward=function(){this.go(1)},He.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},He.prototype.resolve=function(e,t,n){var r=H(e,t=t||this.history.current,n,this),i=this.match(r,t),s=i.redirectedFrom||i.fullPath;return{location:r,route:i,href:function(e,t,n){var r="hash"===n?"#"+t:t;return e?T(e+"/"+r):r}(this.history.base,s,this.mode),normalizedTo:r,resolved:i}},He.prototype.getRoutes=function(){return this.matcher.getRoutes()},He.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},He.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(He.prototype,Ve),He.install=function e(t){if(!e.installed||V!==t){e.installed=!0,V=t;var n=function(e){return void 0!==e},r=function(e,t){var r=e.$options._parentVnode;n(r)&&n(r=r.data)&&n(r=r.registerRouteInstance)&&r(e,t)};t.mixin({beforeCreate:function(){n(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",w),t.component("RouterLink",B);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}},He.version="3.5.4",He.isNavigationFailure=ke,He.NavigationFailureType=ye,He.START_LOCATION=m,G&&window.Vue&&window.Vue.use(He),t.a=He},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ii})),n.d(t,"b",(function(){return oi})),n.d(t,"c",(function(){return mi})),n.d(t,"d",(function(){return ui})),n.d(t,"e",(function(){return ri})),n.d(t,"f",(function(){return si}));var r=n(1),i=n(2),s=n(0),o=n(4);const a="@firebase/database";
/**
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
 */let c="";
/**
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
 */
class l{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s.J)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s.C)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class u{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s.k)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const h=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new l(t)}}catch(e){}return new u},d=h("localStorage"),p=h("sessionStorage"),f=new o.b("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),_=function(e){const t=Object(s.I)(e),n=new s.d;n.update(t);const r=n.digest();return s.g.encodeByteArray(r)},v=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=v.apply(null,r):t+="object"==typeof r?Object(s.J)(r):r,t+=" "}return t};let g=null,y=!0;const b=function(e,t){Object(s.e)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(f.logLevel=o.a.VERBOSE,g=f.log.bind(f),t&&p.set("logging_enabled",!0)):"function"==typeof e?g=e:(g=null,p.remove("logging_enabled"))},w=function(...e){if(!0===y&&(y=!1,null===g&&!0===p.get("logging_enabled")&&b(!0)),g){const t=v.apply(null,e);g(t)}},C=function(e){return function(...t){w(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+v(...e);f.error(t)},T=function(...e){const t="FIREBASE FATAL ERROR: "+v(...e);throw f.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+v(...e);f.warn(t)},E=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},O="[MIN_NAME]",S="[MAX_NAME]",N=function(e,t){if(e===t)return 0;if(e===O||t===S)return-1;if(t===O||e===S)return 1;{const n=M(e),r=M(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},R=function(e,t){return e===t?0:e<t?-1:1},P=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s.J)(t))},x=function(e){if("object"!=typeof e||null===e)return Object(s.J)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(s.J)(t[r]),n+=":",n+=x(e[t[r]]);return n+="}",n},A=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function D(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const j=function(e){Object(s.e)(!E(e),"Invalid JSON number");let t,n,r,i,o;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(i=Math.min(Math.floor(Math.log(e)/Math.LN2),1023),n=i+1023,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(n%2?1:0),n=Math.floor(n/2);a.push(t?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const L=new RegExp("^-?(0*)\\d{1,10}$"),M=function(e){if(L.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},F=function(e){try{e()}catch(e){setTimeout(()=>{const t=e.stack||"";throw k("Exception was thrown by user callback.",t),e},Math.floor(0))}},U=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
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
 */
class ${constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(w("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class W{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}W.OWNER="owner";
/**
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
 */
const H=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
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
 */
class V{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=d.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&d.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function z(e,t,n){let r;if(Object(s.e)("string"==typeof t,"typeof type must == string"),Object(s.e)("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return D(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
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
 */class B{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s.k)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s.n)(this.counters_)}}
/**
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
 */const K={},G={};function J(e){const t=e.toString();return K[t]||(K[t]=new B),K[t]}
/**
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
 */
class Y{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&F(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */class Q{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=C(e),this.stats_=J(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),z(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Y(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),function(e){if(Object(s.z)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}}(()=>{if(this.isClosed_)return;this.scriptTagHolder=new X((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&H.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Q.forceAllow_=!0}static forceDisallow(){Q.forceDisallow_=!0}static isAvailable(){return!Object(s.z)()&&(!!Q.forceAllow_||!(Q.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s.J)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s.i)(t),r=A(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s.z)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s.J)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class X{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s.z)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=X.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){w("frame writing exception"),e.stack&&w(e.stack),w(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||w("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(r),n()})}addTag(e,t){Object(s.z)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{w("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}
/**
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
 */let Z=null;"undefined"!=typeof MozWebSocket?Z=MozWebSocket:"undefined"!=typeof WebSocket&&(Z=WebSocket);class ee{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=C(this.connId),this.stats_=J(t),this.connURL=ee.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={v:"5"};return!Object(s.z)()&&"undefined"!=typeof location&&location.hostname&&H.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o.ac=r),i&&(o.p=i),z(e,"websocket",o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,d.set("previous_websocket_failure",!0);try{let t;if(Object(s.z)()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/5/${c}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers.Authorization="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=e.env,i=0===this.connURL.indexOf("wss://")?r.HTTPS_PROXY||r.https_proxy:r.HTTP_PROXY||r.http_proxy;i&&(n.proxy={origin:i})}this.mySock=new Z(this.connURL,[],t)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ee.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Z&&!ee.forceDisallow_}static previouslyFailed(){return d.isInMemoryStorage||!0===d.get("previous_websocket_failure")}markConnectionHealthy(){d.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s.C)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s.e)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s.J)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=A(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ee.responsesRequiredToBeHealthy=2,ee.healthyTimeout=3e4;
/**
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
 */
class te{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Q,ee]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ee&&ee.isAvailable();let n=t&&!ee.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ee];else{const e=this.transports_=[];for(const t of te.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);te.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}te.globalTransportInitialized_=!1;class ne{constructor(e,t,n,r,i,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=C("c:"+this.id+":"),this.transportManager_=new te(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=U(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=P("t",e),n=P("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=P("t",e),n=P("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=P("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?I("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),U(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):U(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(d.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class re{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class ie{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s.e)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){Object(s.e)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
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
 */class se extends ie{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Object(s.y)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new se}getInitialEvent(e){return Object(s.e)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */class oe{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ae(){return new oe("")}function ce(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function le(e){return e.pieces_.length-e.pieceNum_}function ue(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new oe(e.pieces_,t)}function he(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function de(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function pe(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new oe(t,0)}function fe(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof oe)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new oe(n,0)}function me(e){return e.pieceNum_>=e.pieces_.length}function _e(e,t){const n=ce(e),r=ce(t);if(null===n)return t;if(n===r)return _e(ue(e),ue(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ve(e,t){if(le(e)!==le(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function ge(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(le(e)>le(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class ye{constructor(e,t){this.errorPrefix_=t,this.parts_=de(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Object(s.H)(this.parts_[e]);be(this)}}function be(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+we(e))}function we(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class Ce extends ie{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new Ce}getInitialEvent(e){return Object(s.e)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */class Ie extends re{constructor(e,t,n,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ie.nextPersistentConnectionId_++,this.log_=C("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(s.z)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ce.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&se.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(s.J)(i)),Object(s.e)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new s.a,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))},3e3),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Object(s.e)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s.e)(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,i=>{const s=i.d,o=i.s;Ie.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Object(s.k)(e,"w")){const n=Object(s.G)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Object(s.t)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s.B)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(s.e)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e.s,e.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s.J)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+Object(s.J)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s.e)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ie.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){Object(s.e)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?w("getToken() completed but was canceled"):(w("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new ne(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},i))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&k(e),c())}}}interrupt(e){w("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){w("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s.v)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>x(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new oe(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){w("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){w("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s.z)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,Object(s.y)()?e["framework.cordova"]=1:Object(s.A)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=se.getInstance().currentlyOnline();return Object(s.v)(this.interruptReasons_)&&e}}Ie.nextPersistentConnectionId_=0,Ie.nextConnectionId_=0;
/**
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
 */
class Te{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Te(e,t)}}
/**
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
 */class ke{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Te(O,e),r=new Te(O,t);return 0!==this.compare(n,r)}minPost(){return Te.MIN}}
/**
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
 */let Ee;class Oe extends ke{static get __EMPTY_NODE(){return Ee}static set __EMPTY_NODE(e){Ee=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw Object(s.f)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Te.MIN}maxPost(){return new Te(S,Ee)}makePost(e,t){return Object(s.e)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Te(e,Ee)}toString(){return".key"}}const Se=new Oe;
/**
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
 */class Ne{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Re.RED,this.left=null!=r?r:Pe.EMPTY_NODE,this.right=null!=i?i:Pe.EMPTY_NODE}copy(e,t,n,r,i){return new Re(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pe.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Pe.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0,Re.BLACK=!1;class Pe{constructor(e,t=Pe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Pe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new Pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ne(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ne(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ne(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ne(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function xe(e,t){return N(e.name,t.name)}function Ae(e,t){return N(e,t)}
/**
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
 */let De;Pe.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Re(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const je=function(e){return"number"==typeof e?"number:"+j(e):"string:"+e},Le=function(e){if(e.isLeafNode()){const t=e.val();Object(s.e)("string"==typeof t||"number"==typeof t||"object"==typeof t&&Object(s.k)(t,".sv"),"Priority must be a string or number.")}else Object(s.e)(e===De||e.isEmpty(),"priority of unexpected type.");Object(s.e)(e===De||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let Me,Fe,Ue;class $e{constructor(e,t=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s.e)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Le(this.priorityNode_)}static set __childrenNodeConstructor(e){Me=e}static get __childrenNodeConstructor(){return Me}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:".priority"===ce(e)?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ce(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s.e)(".priority"!==n||1===le(e),".priority must be the last token in a path"),this.updateImmediateChild(n,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+je(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?j(this.value_):this.value_,this.lazyHash_=_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(Object(s.e)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=$e.VALUE_TYPE_ORDER.indexOf(t),i=$e.VALUE_TYPE_ORDER.indexOf(n);return Object(s.e)(r>=0,"Unknown leaf type: "+t),Object(s.e)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];const qe=new class extends ke{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Te.MIN}maxPost(){return new Te(S,new $e("[PRIORITY-POST]",Ue))}makePost(e,t){const n=Fe(e);return new Te(t,new $e("[PRIORITY-POST]",n))}toString(){return".priority"}},We=Math.log(2);
/**
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
 */class He{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/We,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ve=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Re(a,o.node,Re.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],a=n?n(o):o,new Re(a,o.node,Re.BLACK,l,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const l=i(s+1,a),u=e[s],h=n?n(u):u;c(new Re(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Re.BLACK):(a(r,Re.BLACK),a(r,Re.RED))}return s}(new He(e.length));return new Pe(r||t,s)};
/**
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
 */let ze;const Be={};class Ke{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s.e)(Be&&qe,"ChildrenNode.ts has not been loaded"),ze=ze||new Ke({".priority":Be},{".priority":qe}),ze}get(e){const t=Object(s.G)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Pe?t:null}hasIndex(e){return Object(s.k)(this.indexSet_,e.toString())}addIndex(e,t){Object(s.e)(e!==Se,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Te.Wrap);let o,a=i.getNext();for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?Ve(n,e.getCompare()):Be;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new Ke(u,l)}addToIndexes(e,t){const n=Object(s.D)(this.indexes_,(n,r)=>{const i=Object(s.G)(this.indexSet_,r);if(Object(s.e)(i,"Missing index implementation for "+r),n===Be){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Te.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Ve(n,i.getCompare())}return Be}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Te(e.name,r))),i.insert(e,e.node)}});return new Ke(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s.D)(this.indexes_,n=>{if(n===Be)return n;{const r=t.get(e.name);return r?n.remove(new Te(e.name,r)):n}});return new Ke(n,this.indexSet_)}}
/**
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
 */let Ge;class Je{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Le(this.priorityNode_),this.children_.isEmpty()&&Object(s.e)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ge||(Ge=new Je(new Pe(Ae),null,Ke.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ge}updatePriority(e){return this.children_.isEmpty()?this:new Je(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ge:t}}getChild(e){const t=ce(e);return null===t?this:this.getImmediateChild(t).getChild(ue(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s.e)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Te(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?Ge:this.priorityNode_;return new Je(r,s,i)}}updateChild(e,t){const n=ce(e);if(null===n)return t;{Object(s.e)(".priority"!==ce(e)||1===le(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ue(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(qe,(s,o)=>{t[s]=o.val(e),n++,i&&Je.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+je(this.getPriority().val())+":"),this.forEachChild(qe,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":_(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Te(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Te(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Te(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Te.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Te.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ye?-1:0}withIndex(e){if(e===Se||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Je(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Se||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(qe),n=t.getIterator(qe);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Se?null:this.indexMap_.get(e.toString())}}Je.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ye=new class extends Je{constructor(){super(new Pe(Ae),Je.EMPTY_NODE,Ke.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Je.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Te,{MIN:{value:new Te(O,Je.EMPTY_NODE)},MAX:{value:new Te(S,Ye)}}),Oe.__EMPTY_NODE=Je.EMPTY_NODE,$e.__childrenNodeConstructor=Je,De=Ye,function(e){Ue=e}(Ye);function Qe(e,t=null){if(null===e)return Je.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Object(s.e)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new $e(e,Qe(t))}if(e instanceof Array){let n=Je.EMPTY_NODE;return D(e,(t,r)=>{if(Object(s.k)(e,t)&&"."!==t.substring(0,1)){const e=Qe(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(Qe(t))}{const n=[];let r=!1;if(D(e,(e,t)=>{if("."!==e.substring(0,1)){const i=Qe(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Te(e,i)))}}),0===n.length)return Je.EMPTY_NODE;const i=Ve(n,xe,e=>e.name,Ae);if(r){const e=Ve(n,qe.getCompare());return new Je(i,Qe(t),new Ke({".priority":e},{".priority":qe}))}return new Je(i,Qe(t),Ke.Default)}}!function(e){Fe=e}(Qe);
/**
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
 */
class Xe extends ke{constructor(e){super(),this.indexPath_=e,Object(s.e)(!me(e)&&".priority"!==ce(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}makePost(e,t){const n=Qe(e),r=Je.EMPTY_NODE.updateChild(this.indexPath_,n);return new Te(t,r)}maxPost(){const e=Je.EMPTY_NODE.updateChild(this.indexPath_,Ye);return new Te(S,e)}toString(){return de(this.indexPath_,0).join("/")}}
/**
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
 */const Ze=new class extends ke{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Te.MIN}maxPost(){return Te.MAX}makePost(e,t){const n=Qe(e);return new Te(t,n)}toString(){return".value"}},et="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
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
 */!function(){let e=0;const t=[]}();
/**
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
 */
function tt(e){return{type:"value",snapshotNode:e}}function nt(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function rt(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function it(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
 */
class st{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){Object(s.e)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(rt(t,a)):Object(s.e)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(nt(t,n)):o.trackChildChange(it(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(qe,(e,r)=>{t.hasChild(e)||n.trackChildChange(rt(e,r))}),t.isLeafNode()||t.forEachChild(qe,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(it(t,r,i))}else n.trackChildChange(nt(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Je.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class ot{constructor(e){this.indexedFilter_=new st(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ot.getStartPost_(e),this.endPost_=ot.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new Te(t,n))||(n=Je.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Je.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Je.EMPTY_NODE);const i=this;return t.forEachChild(qe,(e,t)=>{i.matches(new Te(e,t))||(r=r.updateImmediateChild(e,Je.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class at{constructor(e){this.rangedFilter_=new ot(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Te(t,n))||(n=Je.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Je.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Je.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(Je.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);a&&o<this.limit_&&i(t,n)<=0?o++:r=r.updateImmediateChild(t.name,Je.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(s.e)(a.numChildren()===this.limit_,"");const c=new Te(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=s&&(s.name===t||a.hasChild(s.name));)s=r.getChildAfterChild(this.index_,s,this.reverse_);const h=null==s?1:o(s,c);if(u&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(it(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(rt(t,e));const n=a.updateImmediateChild(t,Je.EMPTY_NODE);return null!=s&&this.rangedFilter_.matches(s)?(null!=i&&i.trackChildChange(nt(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:u&&o(l,c)>=0?(null!=i&&(i.trackChildChange(rt(l.name,l.node)),i.trackChildChange(nt(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,Je.EMPTY_NODE)):e}}
/**
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
 */class ct{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s.e)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s.e)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:O}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s.e)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s.e)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:S}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s.e)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qe}copy(){const e=new ct;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lt(e){const t={};if(e.isDefault())return t;let n;return e.index_===qe?n="$priority":e.index_===Ze?n="$value":e.index_===Se?n="$key":(Object(s.e)(e.index_ instanceof Xe,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Object(s.J)(n),e.startSet_&&(t.startAt=Object(s.J)(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Object(s.J)(e.indexStartName_))),e.endSet_&&(t.endAt=Object(s.J)(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Object(s.J)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ut(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==qe&&(t.i=e.index_.toString()),t}
/**
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
 */class ht extends re{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=C("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s.e)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ht.getListenId_(e,n),a={};this.listens_[o]=a;const c=lt(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),Object(s.G)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=ht.getListenId_(e,t);delete this.listens_[n]}get(e){const t=lt(e._queryParams),n=e._path.toString(),r=new s.a;return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s.E)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=Object(s.C)(a.responseText)}catch(e){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
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
 */class dt{constructor(){this.rootNode_=Je.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function pt(){return{value:null,children:new Map}}function ft(e,t,n){if(me(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ce(t);e.children.has(r)||e.children.set(r,pt());ft(e.children.get(r),t=ue(t),n)}}function mt(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
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
 */(e,(e,r)=>{mt(r,new oe(t.toString()+"/"+e),n)})}class _t{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&D(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
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
 */class vt{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new _t(e);const n=1e4+2e4*Math.random();U(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;D(e,(e,r)=>{r>0&&Object(s.k)(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),U(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
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
 */var gt;function yt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(gt||(gt={}));class bt{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=gt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(me(this.path)){if(null!=this.affectedTree.value)return Object(s.e)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new oe(e));return new bt(ae(),t,this.revert)}}return Object(s.e)(ce(this.path)===e,"operationForChild called for unrelated child."),new bt(ue(this.path),this.affectedTree,this.revert)}}
/**
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
 */class wt{constructor(e,t){this.source=e,this.path=t,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new wt(this.source,ae()):new wt(this.source,ue(this.path))}}
/**
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
 */class Ct{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=gt.OVERWRITE}operationForChild(e){return me(this.path)?new Ct(this.source,ae(),this.snap.getImmediateChild(e)):new Ct(this.source,ue(this.path),this.snap)}}
/**
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
 */class It{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=gt.MERGE}operationForChild(e){if(me(this.path)){const t=this.children.subtree(new oe(e));return t.isEmpty()?null:t.value?new Ct(this.source,ae(),t.value):new It(this.source,ae(),t)}return Object(s.e)(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new It(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class Tt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const t=ce(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class kt{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Et(e,t,n,r,i,o){const a=r.filter(e=>e.type===n);a.sort((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Object(s.f)("Should only compare child_ events.");const r=new Te(t.childName,t.snapshotNode),i=new Te(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */(e,t,n)),a.forEach(n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function Ot(e,t){return{eventCache:e,serverCache:t}}function St(e,t,n,r){return Ot(new Tt(t,n,r),e.serverCache)}function Nt(e,t,n,r){return Ot(e.eventCache,new Tt(t,n,r))}function Rt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Pt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let xt;class At{constructor(e,t=(()=>(xt||(xt=new Pe(R)),xt))()){this.value=e,this.children=t}static fromObject(e){let t=new At(null);return D(e,(e,n)=>{t=t.set(new oe(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ae(),value:this.value};if(me(e))return null;{const n=ce(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ue(e),t);if(null!=i){return{path:fe(new oe(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const t=ce(e),n=this.children.get(t);return null!==n?n.subtree(ue(e)):new At(null)}}set(e,t){if(me(e))return new At(t,this.children);{const n=ce(e),r=(this.children.get(n)||new At(null)).set(ue(e),t),i=this.children.insert(n,r);return new At(this.value,i)}}remove(e){if(me(e))return this.children.isEmpty()?new At(null):new At(null,this.children);{const t=ce(e),n=this.children.get(t);if(n){const r=n.remove(ue(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new At(null):new At(this.value,i)}return this}}get(e){if(me(e))return this.value;{const t=ce(e),n=this.children.get(t);return n?n.get(ue(e)):null}}setTree(e,t){if(me(e))return t;{const n=ce(e),r=(this.children.get(n)||new At(null)).setTree(ue(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new At(this.value,i)}}fold(e){return this.fold_(ae(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(fe(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ae(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(me(e))return null;{const r=ce(e),i=this.children.get(r);return i?i.findOnPath_(ue(e),fe(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ae(),t)}foreachOnPath_(e,t,n){if(me(e))return this;{this.value&&n(t,this.value);const r=ce(e),i=this.children.get(r);return i?i.foreachOnPath_(ue(e),fe(t,r),n):new At(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(fe(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
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
 */class Dt{constructor(e){this.writeTree_=e}static empty(){return new Dt(new At(null))}}function jt(e,t,n){if(me(t))return new Dt(new At(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=_e(i,t);return s=s.updateChild(o,n),new Dt(e.writeTree_.set(i,s))}{const r=new At(n),i=e.writeTree_.setTree(t,r);return new Dt(i)}}}function Lt(e,t,n){let r=e;return D(n,(e,n)=>{r=jt(r,fe(t,e),n)}),r}function Mt(e,t){if(me(t))return Dt.empty();{const n=e.writeTree_.setTree(t,new At(null));return new Dt(n)}}function Ft(e,t){return null!=Ut(e,t)}function Ut(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(_e(n.path,t)):null}function $t(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(qe,(e,n)=>{t.push(new Te(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Te(e,n.value))}),t}function qt(e,t){if(me(t))return e;{const n=Ut(e,t);return new Dt(null!=n?new At(n):e.writeTree_.subtree(t))}}function Wt(e){return e.writeTree_.isEmpty()}function Ht(e,t){return function e(t,n,r){if(null!=n.value)return r.updateChild(t,n.value);{let i=null;return n.children.inorderTraversal((n,o)=>{".priority"===n?(Object(s.e)(null!==o.value,"Priority writes must always be leaf nodes"),i=o.value):r=e(fe(t,n),o,r)}),r.getChild(t).isEmpty()||null===i||(r=r.updateChild(fe(t,".priority"),i)),r}}
/**
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
 */(ae(),e.writeTree_,t)}function Vt(e,t){return rn(t,e)}function zt(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s.e)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;for(;i&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&Bt(t,r.path)?i=!1:ge(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return function(e){e.visibleWrites=Gt(e.allWrites,Kt,ae()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Mt(e.visibleWrites,r.path);else{D(r.children,t=>{e.visibleWrites=Mt(e.visibleWrites,fe(r.path,t))})}return!0}return!1}function Bt(e,t){if(e.snap)return ge(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ge(fe(e.path,n),t))return!0;return!1}function Kt(e){return e.visible}function Gt(e,t,n){let r=Dt.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)ge(n,e)?(t=_e(n,e),r=jt(r,t,o.snap)):ge(e,n)&&(t=_e(e,n),r=jt(r,ae(),o.snap.getChild(t)));else{if(!o.children)throw Object(s.f)("WriteRecord should have .snap or .children");if(ge(n,e))t=_e(n,e),r=Lt(r,t,o.children);else if(ge(e,n))if(t=_e(e,n),me(t))r=Lt(r,ae(),o.children);else{const e=Object(s.G)(o.children,ce(t));if(e){const n=e.getChild(ue(t));r=jt(r,ae(),n)}}}}}return r}function Jt(e,t,n,r,i){if(r||i){const s=qt(e.visibleWrites,t);if(!i&&Wt(s))return n;if(i||null!=n||Ft(s,ae())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(ge(e.path,t)||ge(t,e.path))};return Ht(Gt(e.allWrites,s,t),n||Je.EMPTY_NODE)}return null}{const r=Ut(e.visibleWrites,t);if(null!=r)return r;{const r=qt(e.visibleWrites,t);if(Wt(r))return n;if(null!=n||Ft(r,ae())){return Ht(r,n||Je.EMPTY_NODE)}return null}}}function Yt(e,t,n,r){return Jt(e.writeTree,e.treePath,t,n,r)}function Qt(e,t){return function(e,t,n){let r=Je.EMPTY_NODE;const i=Ut(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(qe,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=qt(e.visibleWrites,t);return n.forEachChild(qe,(e,t)=>{const n=Ht(qt(i,new oe(e)),t);r=r.updateImmediateChild(e,n)}),$t(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}return $t(qt(e.visibleWrites,t)).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}(e.writeTree,e.treePath,t)}function Xt(e,t,n,r){return function(e,t,n,r,i){Object(s.e)(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=fe(t,n);if(Ft(e.visibleWrites,o))return null;{const t=qt(e.visibleWrites,o);return Wt(t)?i.getChild(n):Ht(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Zt(e,t){return function(e,t){return Ut(e.visibleWrites,t)}(e.writeTree,fe(e.treePath,t))}function en(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const c=qt(e.visibleWrites,t),l=Ut(c,ae());if(null!=l)a=l;else{if(null==n)return[];a=Ht(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();for(;c&&e.length<i;)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function tn(e,t,n){return function(e,t,n,r){const i=fe(t,n),s=Ut(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n)){return Ht(qt(e.visibleWrites,i),r.getNode().getImmediateChild(n))}return null}(e.writeTree,e.treePath,t,n)}function nn(e,t){return rn(fe(e.treePath,t),e.writeTree)}function rn(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class sn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s.e)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s.e)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,it(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,rt(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,nt(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(s.f)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,it(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */const on=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class an{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Tt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Pt(this.viewCache_),i=en(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
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
 */function cn(e,t,n,r,i){const o=new sn;let a,c;if(n.type===gt.OVERWRITE){const l=n;l.source.fromUser?a=hn(e,t,l.path,l.snap,r,i,o):(Object(s.e)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!me(l.path),a=un(e,t,l.path,l.snap,r,i,c,o))}else if(n.type===gt.MERGE){const l=n;l.source.fromUser?a=function(e,t,n,r,i,s,o){let a=t;return r.foreach((r,c)=>{const l=fe(n,r);dn(t,ce(l))&&(a=hn(e,a,l,c,i,s,o))}),r.foreach((r,c)=>{const l=fe(n,r);dn(t,ce(l))||(a=hn(e,a,l,c,i,s,o))}),a}(e,t,l.path,l.children,r,i,o):(Object(s.e)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=fn(e,t,l.path,l.children,r,i,c,o))}else if(n.type===gt.ACK_USER_WRITE){const c=n;a=c.revert?function(e,t,n,r,i,o){let a;if(null!=Zt(r,n))return t;{const c=new an(r,t,i),l=t.eventCache.getNode();let u;if(me(n)||".priority"===ce(n)){let n;if(t.serverCache.isFullyInitialized())n=Yt(r,Pt(t));else{const e=t.serverCache.getNode();Object(s.e)(e instanceof Je,"serverChildren would be complete if leaf node"),n=Qt(r,e)}n=n,u=e.filter.updateFullNode(l,n,o)}else{const i=ce(n);let s=tn(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=l.getImmediateChild(i)),u=null!=s?e.filter.updateChild(l,i,s,ue(n),c,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,Je.EMPTY_NODE,ue(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Yt(r,Pt(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Zt(r,ae()),St(t,u,a,e.filter.filtersNodes())}}
/**
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
 */(e,t,c.path,r,i,o):function(e,t,n,r,i,s,o){if(null!=Zt(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(me(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return un(e,t,n,c.getNode().getChild(n),i,s,a,o);if(me(n)){let r=new At(null);return c.getNode().forEachChild(Se,(e,t)=>{r=r.set(new oe(e),t)}),fn(e,t,n,r,i,s,a,o)}return t}{let l=new At(null);return r.foreach((e,t)=>{const r=fe(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),fn(e,t,n,l,i,s,a,o)}}(e,t,c.path,c.affectedTree,r,i,o)}else{if(n.type!==gt.LISTEN_COMPLETE)throw Object(s.f)("Unknown operation type: "+n.type);a=function(e,t,n,r,i){const s=t.serverCache,o=Nt(t,s.getNode(),s.isFullyInitialized()||me(n),s.isFiltered());return ln(e,o,n,r,on,i)}(e,t,n.path,r,o)}const l=o.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Rt(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(tt(Rt(t)))}}(t,a,l),{viewCache:a,changes:l}}function ln(e,t,n,r,i,o){const a=t.eventCache;if(null!=Zt(r,n))return t;{let c,l;if(me(n))if(Object(s.e)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Pt(t),i=Qt(r,n instanceof Je?n:Je.EMPTY_NODE);c=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const n=Yt(r,Pt(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ce(n);if(".priority"===u){Object(s.e)(1===le(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const o=Xt(r,n,i,l);c=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=ue(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Xt(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=tn(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,i,o):a.getNode()}}return St(t,c,a.isFullyInitialized()||me(n),e.filter.filtersNodes())}}function un(e,t,n,r,i,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(me(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ce(n);if(!c.isCompleteForPath(n)&&le(n)>1)return t;const i=ue(n),s=c.getNode().getImmediateChild(e).updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,i,on,null)}const h=Nt(t,l,c.isFullyInitialized()||me(n),u.filtersNodes());return ln(e,h,n,i,new an(i,h,s),a)}function hn(e,t,n,r,i,s,o){const a=t.eventCache;let c,l;const u=new an(i,t,s);if(me(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=St(t,l,!0,e.filter.filtersNodes());else{const i=ce(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=St(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=ue(n),l=a.getNode().getImmediateChild(i);let h;if(me(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===he(s)&&e.getChild(pe(s)).isEmpty()?e:e.updateChild(s,r):Je.EMPTY_NODE}if(l.equals(h))c=t;else{c=St(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function dn(e,t){return e.eventCache.isCompleteForChild(t)}function pn(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function fn(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=me(n)?r:new At(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const c=pn(0,t.serverCache.getNode().getImmediateChild(n),r);l=un(e,l,new oe(n),c,i,s,o,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!c){const c=pn(0,t.serverCache.getNode().getImmediateChild(n),r);l=un(e,l,new oe(n),c,i,s,o,a)}}),l}class mn{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new st(n.getIndex()),i=(s=n).loadsAllData()?new st(s.getIndex()):s.hasLimit()?new at(s):new ot(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(Je.EMPTY_NODE,o.getNode(),null),l=i.updateFullNode(Je.EMPTY_NODE,a.getNode(),null),u=new Tt(c,o.isFullyInitialized(),r.filtersNodes()),h=new Tt(l,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Ot(h,u),this.eventGenerator_=new kt(this.query_)}get query(){return this.query_}}function _n(e,t){const n=Pt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!me(t)&&!n.getImmediateChild(ce(t)).isEmpty())?n.getChild(t):null}function vn(e){return 0===e.eventRegistrations_.length}function gn(e,t,n){const r=[];if(n){Object(s.e)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function yn(e,t,n,r){t.type===gt.MERGE&&null!==t.source.queryId&&(Object(s.e)(Pt(e.viewCache_),"We should always have a full cache before handling merges"),Object(s.e)(Rt(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=cn(e.processor_,i,t,n,r);var a,c;return a=e.processor_,c=o.viewCache,Object(s.e)(c.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),Object(s.e)(c.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),Object(s.e)(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,bn(e,o.changes,o.viewCache.eventCache.getNode(),null)}function bn(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach(t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}),Et(e,i,"child_removed",t,r,n),Et(e,i,"child_added",t,r,n),Et(e,i,"child_moved",s,r,n),Et(e,i,"child_changed",t,r,n),Et(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
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
 */let wn,Cn;class In{constructor(){this.views=new Map}}function Tn(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return Object(s.e)(null!=o,"SyncTree gave us an op for an invalid query."),yn(o,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(yn(s,t,n,r));return i}}function kn(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Yt(n,i?r:null),s=!1;e?s=!0:r instanceof Je?(e=Qt(n,r),s=!1):(e=Je.EMPTY_NODE,s=!1);const o=Ot(new Tt(e,s,!1),new Tt(r,i,!1));return new mn(t,o)}return o}function En(e,t,n,r,i,s){const o=kn(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){n.getNode().forEachChild(qe,(e,t)=>{r.push(nt(e,t))})}return n.isFullyInitialized()&&r.push(tt(n.getNode())),bn(e,r,n.getNode(),t)}(o,n)}function On(e,t,n,r){const i=t._queryIdentifier,o=[];let a=[];const c=xn(e);if("default"===i)for(const[t,i]of e.views.entries())a=a.concat(gn(i,n,r)),vn(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||o.push(i.query));else{const t=e.views.get(i);t&&(a=a.concat(gn(t,n,r)),vn(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return c&&!xn(e)&&o.push(new(Object(s.e)(wn,"Reference.ts has not been loaded"),wn)(t._repo,t._path)),{removed:o,events:a}}function Sn(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Nn(e,t){let n=null;for(const r of e.views.values())n=n||_n(r,t);return n}function Rn(e,t){if(t._queryParams.loadsAllData())return An(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Pn(e,t){return null!=Rn(e,t)}function xn(e){return null!=An(e)}function An(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */let Dn=1;class jn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new At(null),this.pendingWriteTree_={visibleWrites:Dt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ln(e,t,n,r,i){return function(e,t,n,r,i){Object(s.e)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=jt(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Hn(e,new Ct({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Mn(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(zt(e.pendingWriteTree_,t)){let t=new At(null);return null!=r.snap?t=t.set(ae(),!0):D(r.children,e=>{t=t.set(new oe(e),!0)}),Hn(e,new bt(r.path,t,n))}return[]}function Fn(e,t,n){return Hn(e,new Ct({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Un(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||Pn(s,t))){const a=On(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=a.removed;o=a.events;const l=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),u=e.syncPointTree_.findOnPath(i,(e,t)=>xn(t));if(l&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold((e,t,n)=>{if(t&&xn(t)){return[An(t)]}{let e=[];return t&&(e=Sn(t)),D(n,(t,n)=>{e=e.concat(n)}),e}})}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=Vn(e,r);e.listenProvider_.startListening(Yn(i),zn(e,i),s.hashFn,s.onComplete)}}}if(!u&&c.length>0&&!r)if(l){const n=null;e.listenProvider_.stopListening(Yn(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(Bn(t));e.listenProvider_.stopListening(Yn(t),n)});!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Bn(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return o}function $n(e,t,n){const r=t._path;let i=null,o=!1;e.syncPointTree_.foreachOnPath(r,(e,t)=>{const n=_e(e,r);i=i||Nn(t,n),o=o||xn(t)});let a,c=e.syncPointTree_.get(r);if(c?(o=o||xn(c),i=i||Nn(c,ae())):(c=new In,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=i)a=!0;else{a=!1,i=Je.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild((e,t)=>{const n=Nn(t,ae());n&&(i=i.updateImmediateChild(e,n))})}const l=Pn(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=Bn(t);Object(s.e)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Dn++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=En(c,t,n,Vt(e.pendingWriteTree_,r),i,a);if(!l&&!o){const n=Rn(c,t);u=u.concat(function(e,t,n){const r=t._path,i=zn(e,t),o=Vn(e,n),a=e.listenProvider_.startListening(Yn(t),i,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(r);if(i)Object(s.e)(!xn(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!me(e)&&t&&xn(t))return[An(t).query];{let e=[];return t&&(e=e.concat(Sn(t).map(e=>e.query))),D(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Yn(r),zn(e,r))}}return a}
/**
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
 */(e,t,n))}return u}function qn(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=Nn(n,_e(e,t));if(r)return r});return Jt(r,t,i,n,!0)}function Wn(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const i=_e(e,n);r=r||Nn(t,i)});let i=e.syncPointTree_.get(n);i?r=r||Nn(i,ae()):(i=new In,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new Tt(r,!0,!1):null;return function(e){return Rt(e.viewCache_)}(kn(i,t,Vt(e.pendingWriteTree_,t._path),s?o.getNode():Je.EMPTY_NODE,s))}function Hn(e,t){return function e(t,n,r,i){if(me(t.path))return function e(t,n,r,i){const s=n.get(ae());null==r&&null!=s&&(r=Nn(s,ae()));let o=[];n.children.inorderTraversal((n,s)=>{const a=r?r.getImmediateChild(n):null,c=nn(i,n),l=t.operationForChild(n);l&&(o=o.concat(e(l,s,a,c)))}),s&&(o=o.concat(Tn(s,t,i,r)));return o}(t,n,r,i);{const s=n.get(ae());null==r&&null!=s&&(r=Nn(s,ae()));let o=[];const a=ce(t.path),c=t.operationForChild(a),l=n.children.get(a);if(l&&c){const t=r?r.getImmediateChild(a):null,n=nn(i,a);o=o.concat(e(c,l,t,n))}return s&&(o=o.concat(Tn(s,t,i,r))),o}}(t,e.syncPointTree_,null,Vt(e.pendingWriteTree_,ae()))}function Vn(e,t){const n=t.query,r=zn(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||Je.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=Kn(e,n);if(r){const n=Gn(r),i=n.path,s=n.queryId,o=_e(i,t);return Jn(e,i,new wt(yt(s),o))}return[]}(e,n._path,r):function(e,t){return Hn(e,new wt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Un(e,n,null,r)}}}}function zn(e,t){const n=Bn(t);return e.queryToTagMap.get(n)}function Bn(e){return e._path.toString()+"$"+e._queryIdentifier}function Kn(e,t){return e.tagToQueryMap.get(t)}function Gn(e){const t=e.indexOf("$");return Object(s.e)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new oe(e.substr(0,t))}}function Jn(e,t,n){const r=e.syncPointTree_.get(t);Object(s.e)(r,"Missing sync point for query tag that we're tracking");return Tn(r,n,Vt(e.pendingWriteTree_,t),null)}function Yn(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Object(s.e)(Cn,"Reference.ts has not been loaded"),Cn)(e._repo,e._path):e}class Qn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qn(t)}node(){return this.node_}}class Xn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=fe(this.path_,e);return new Xn(this.syncTree_,t)}node(){return qn(this.syncTree_,this.path_)}}const Zn=function(e,t,n){return e&&"object"==typeof e?(Object(s.e)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?er(e[".sv"],t,n):"object"==typeof e[".sv"]?tr(e[".sv"],t):void Object(s.e)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},er=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:Object(s.e)(!1,"Unexpected server value: "+e)}},tr=function(e,t,n){e.hasOwnProperty("increment")||Object(s.e)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&Object(s.e)(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(s.e)(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return"number"!=typeof o?r:o+r},nr=function(e,t,n,r){return ir(t,new Xn(n,e),r)},rr=function(e,t,n){return ir(e,new Qn(t),n)};function ir(e,t,n){const r=e.getPriority().val(),i=Zn(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Zn(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new $e(s,Qe(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new $e(i))),r.forEachChild(qe,(e,r)=>{const i=ir(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))}),s}}
/**
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
 */class sr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function or(e,t){let n=t instanceof oe?t:new oe(t),r=e,i=ce(n);for(;null!==i;){const e=Object(s.G)(r.node.children,i)||{children:{},childCount:0};r=new sr(i,r,e),n=ue(n),i=ce(n)}return r}function ar(e){return e.node.value}function cr(e,t){e.node.value=t,dr(e)}function lr(e){return e.node.childCount>0}function ur(e,t){D(e.node.children,(n,r)=>{t(new sr(n,e,r))})}function hr(e){return new oe(null===e.parent?e.name:hr(e.parent)+"/"+e.name)}function dr(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===ar(e)&&!lr(e)}(n),i=Object(s.k)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,dr(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,dr(e))}
/**
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
 */(e.parent,e.name,e)}const pr=/[\[\].#$\/\u0000-\u001F\u007F]/,fr=/[\[\].#$\u0000-\u001F\u007F]/,mr=function(e){return"string"==typeof e&&0!==e.length&&!pr.test(e)},_r=function(e){return"string"==typeof e&&0!==e.length&&!fr.test(e)},vr=function(e,t,n,r){r&&void 0===t||gr(Object(s.p)(e,"value"),t,n)},gr=function(e,t,n){const r=n instanceof oe?new ye(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+we(r));if("function"==typeof t)throw new Error(e+"contains a function "+we(r)+" with contents = "+t.toString());if(E(t))throw new Error(e+"contains "+t.toString()+" "+we(r));if("string"==typeof t&&t.length>10485760/3&&Object(s.H)(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+we(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(D(t,(t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!mr(t)))throw new Error(e+" contains an invalid key ("+t+") "+we(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(s.H)(t),be(e)}(r,t),gr(e,o,r),function(e){const t=e.parts_.pop();e.byteLength_-=Object(s.H)(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)}),n&&i)throw new Error(e+' contains ".value" child '+we(r)+" in addition to actual children.")}},yr=function(e,t,n,r){if(!(r&&void 0===n||_r(n)))throw new Error(Object(s.p)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},br=function(e,t){if(".info"===ce(t))throw new Error(e+" failed = Can't modify data under /.info/")},wr=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!mr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),_r(e)}(n))throw new Error(Object(s.p)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class Cr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ir(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||ve(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Tr(e,t,n){Ir(e,n),Er(e,e=>ve(e,t))}function kr(e,t,n){Ir(e,n),Er(e,e=>ge(e,t)||ge(t,e))}function Er(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Or(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Or(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();g&&w("event: "+n.toString()),F(r)}}}
/**
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
 */class Sr{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Cr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pt(),this.transactionQueueTree_=new sr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Nr(e,t,n){if(e.stats_=J(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ht(e.repoInfo_,(t,n,r,i)=>{xr(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Ar(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s.J)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ie(e.repoInfo_,t,(t,n,r,i)=>{xr(e,t,n,r,i)},t=>{Ar(e,t)},t=>{!function(e,t){D(t,(t,n)=>{Dr(e,t,n)})}(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){const n=e.toString();return G[n]||(G[n]=t()),G[n]}(e.repoInfo_,()=>new vt(e.stats_,e.server_)),e.infoData_=new dt,e.infoSyncTree_=new jn({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Fn(e.infoSyncTree_,t._path,o),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),Dr(e,"connected",!1),e.serverSyncTree_=new jn({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const s=i(n,r);kr(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Rr(e){const t=e.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Pr(e){return(t=(t={timestamp:Rr(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function xr(e,t,n,r,i){e.dataUpdateCount++;const o=new oe(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Object(s.D)(n,e=>Qe(e));a=function(e,t,n,r){const i=Kn(e,r);if(i){const r=Gn(i),s=r.path,o=r.queryId,a=_e(s,t),c=At.fromObject(n);return Jn(e,s,new It(yt(o),a,c))}return[]}(e.serverSyncTree_,o,t,i)}else{const t=Qe(n);a=function(e,t,n,r){const i=Kn(e,r);if(null!=i){const r=Gn(i),s=r.path,o=r.queryId,a=_e(s,t);return Jn(e,s,new Ct(yt(o),a,n))}return[]}(e.serverSyncTree_,o,t,i)}else if(r){const t=Object(s.D)(n,e=>Qe(e));a=function(e,t,n){const r=At.fromObject(n);return Hn(e,new It({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,t)}else{const t=Qe(n);a=Fn(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Hr(e,o)),kr(e.eventQueue_,c,a)}function Ar(e,t){Dr(e,"connected",t),!1===t&&function(e){Ur(e,"onDisconnectEvents");const t=Pr(e),n=pt();mt(e.onDisconnect_,ae(),(r,i)=>{const s=nr(r,i,e.serverSyncTree_,t);ft(n,r,s)});let r=[];mt(n,ae(),(t,n)=>{r=r.concat(Fn(e.serverSyncTree_,t,n));const i=Kr(e,t);Hr(e,i)}),e.onDisconnect_=pt(),kr(e.eventQueue_,ae(),r)}(e)}function Dr(e,t,n){const r=new oe("/.info/"+t),i=Qe(n);e.infoData_.updateSnapshot(r,i);const s=Fn(e.infoSyncTree_,r,i);kr(e.eventQueue_,r,s)}function jr(e){return e.nextWriteId_++}function Lr(e,t,n,r,i){Ur(e,"set",{path:t.toString(),value:n,priority:r});const s=Pr(e),o=Qe(n,r),a=qn(e.serverSyncTree_,t),c=rr(o,a,s),l=jr(e),u=Ln(e.serverSyncTree_,t,c,l,!0);Ir(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,r)=>{const s="ok"===n;s||k("set at "+t+" failed: "+n);const o=Mn(e.serverSyncTree_,l,!s);kr(e.eventQueue_,t,o),$r(e,i,n,r)});const h=Kr(e,t);Hr(e,h),kr(e.eventQueue_,h,[])}function Mr(e,t,n){let r;r=".info"===ce(t._path)?Un(e.infoSyncTree_,t,n):Un(e.serverSyncTree_,t,n),Tr(e.eventQueue_,t._path,r)}function Fr(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Ur(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),w(n,...t)}function $r(e,t,n,r){t&&F(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}})}function qr(e,t,n){return qn(e.serverSyncTree_,t,n)||Je.EMPTY_NODE}function Wr(e,t=e.transactionQueueTree_){if(t||Br(e,t),ar(t)){const n=zr(e,t);Object(s.e)(n.length>0,"Sending zero length transaction queue");n.every(e=>0===e.status)&&function(e,t,n){const r=n.map(e=>e.currentWriteId),i=qr(e,t,r);let o=i;const a=i.hash();for(let e=0;e<n.length;e++){const r=n[e];Object(s.e)(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=_e(t,r.path);o=o.updateChild(i,r.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,r=>{Ur(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Mn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();Br(e,or(e.transactionQueueTree_,t)),Wr(e,e.transactionQueueTree_),kr(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)F(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Hr(e,t)}},a)}(e,hr(t),n)}else lr(t)&&ur(t,t=>{Wr(e,t)})}function Hr(e,t){const n=Vr(e,t),r=hr(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const l=t[c],u=_e(n,l.path);let h,d=!1;if(Object(s.e)(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,h=l.abortReason,i=i.concat(Mn(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)d=!0,h="maxretry",i=i.concat(Mn(e.serverSyncTree_,l.currentWriteId,!0));else{const n=qr(e,l.path,o);l.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){gr("transaction failed: Data returned ",r,l.path);let t=Qe(r);"object"==typeof r&&null!=r&&Object(s.k)(r,".priority")||(t=t.updatePriority(n.getPriority()));const a=l.currentWriteId,c=Pr(e),u=rr(t,n,c);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=u,l.currentWriteId=jr(e),o.splice(o.indexOf(a),1),i=i.concat(Ln(e.serverSyncTree_,l.path,u,l.currentWriteId,l.applyLocally)),i=i.concat(Mn(e.serverSyncTree_,a,!0))}else d=!0,h="nodata",i=i.concat(Mn(e.serverSyncTree_,l.currentWriteId,!0))}kr(e.eventQueue_,n,i),i=[],d&&(t[c].status=2,a=t[c].unwatcher,setTimeout(a,Math.floor(0)),t[c].onComplete&&("nodata"===h?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(h),!1,null))))}var a;Br(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)F(r[e]);Wr(e,e.transactionQueueTree_)}(e,zr(e,n),r),r}function Vr(e,t){let n,r=e.transactionQueueTree_;for(n=ce(t);null!==n&&void 0===ar(r);)r=or(r,n),n=ce(t=ue(t));return r}function zr(e,t){const n=[];return function e(t,n,r){const i=ar(n);if(i)for(let e=0;e<i.length;e++)r.push(i[e]);ur(n,n=>{e(t,n,r)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Br(e,t){const n=ar(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,cr(t,n.length>0?n:void 0)}ur(t,t=>{Br(e,t)})}function Kr(e,t){const n=hr(Vr(e,t)),r=or(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,t=>{Gr(e,t)}),Gr(e,r),function e(t,n,r,i){r&&!i&&n(t),ur(t,t=>{e(t,n,!0,i)}),r&&i&&n(t)}(r,t=>{Gr(e,t)}),n}function Gr(e,t){const n=ar(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s.e)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s.e)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Mn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?cr(t,void 0):n.length=o+1,kr(e.eventQueue_,hr(t),i);for(let e=0;e<r.length;e++)F(r[e])}}
/**
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
 */const Jr=function(e,t){const n=Yr(e),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new V(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new oe(n.pathString)}},Yr=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
/**
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
 */
class Qr{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s.J)(this.snapshot.exportVal())}}class Xr{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class Zr{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(s.e)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */
/**
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
 */
class ei{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return me(this._path)?null:he(this._path)}get ref(){return new ti(this._repo,this._path)}get _queryIdentifier(){const e=ut(this._queryParams),t=x(e);return"{}"===t?"default":t}get _queryObject(){return ut(this._queryParams)}isEqual(e){if(!((e=Object(s.r)(e))instanceof ei))return!1;const t=this._repo===e._repo,n=ve(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class ti extends ei{constructor(e,t){super(e,t,new ct,!1)}get parent(){const e=pe(this._path);return null===e?null:new ti(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class ni{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new oe(e),n=ii(this.ref,e);return new ni(this._node.getChild(t),n,qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,(t,n)=>e(new ni(n,ii(this.ref,t),qe)))}hasChild(e){const t=new oe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ri(e,t){return(e=Object(s.r)(e))._checkNotDeleted("ref"),void 0!==t?ii(e._root,t):e._root}function ii(e,t){var n,r,i,o;return null===ce((e=Object(s.r)(e))._path)?(n="child",r="path",o=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),yr(n,r,i,o)):yr("child","path",t,!1),new ti(e._repo,fe(e._path,t))}function si(e,t){e=Object(s.r)(e),br("set",e._path),vr("set",t,e._path,!1);const n=new s.a;return Lr(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function oi(e){return function(e,t){const n=Wn(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const r=Qe(n).withIndex(t._queryParams.getIndex()),i=Fn(e.serverSyncTree_,t._path,r);return Tr(e.eventQueue_,t._path,i),Promise.resolve(r)},n=>(Ur(e,"get for query "+Object(s.J)(t)+" failed: "+n),Promise.reject(new Error(n))))}((e=Object(s.r)(e))._repo,e).then(t=>new ni(t,new ti(e._repo,e._path),e._queryParams.getIndex()))}class ai{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Qr("value",this,new ni(e.snapshotNode,new ti(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Xr(this,e,t):null}matches(e){return e instanceof ai&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ci{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Xr(this,e,t):null}createEvent(e,t){Object(s.e)(null!=e.childName,"Child events should have a childName.");const n=ii(new ti(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Qr(e.type,this,new ni(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ci&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function li(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Mr(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Zr(n,s||void 0),a="value"===t?new ai(o):new ci(t,o);return function(e,t,n){let r;r=".info"===ce(t._path)?$n(e.infoSyncTree_,t,n):$n(e.serverSyncTree_,t,n),Tr(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>Mr(e._repo,e,a)}function ui(e,t,n,r){return li(e,"value",t,n,r)}!function(e){Object(s.e)(!wn,"__referenceConstructor has already been defined"),wn=e}(ti),function(e){Object(s.e)(!Cn,"__referenceConstructor has already been defined"),Cn=e}(ti);
/**
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
 */
const hi={};let di=!1;function pi(t,n,r,i,s){let o=i||t.options.databaseURL;void 0===o&&(t.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),w("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=Jr(o,s),l=c.repoInfo,u=void 0;void 0!==e&&e.env&&(u=e.env.FIREBASE_DATABASE_EMULATOR_HOST),u?(a=!0,o=`http://${u}?ns=${l.namespace}`,c=Jr(o,s),l=c.repoInfo):a=!c.repoInfo.secure;const h=s&&a?new W(W.OWNER):new q(t.name,t.options,n);wr("Invalid Firebase Database URL",c),me(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let i=hi[t.name];i||(i={},hi[t.name]=i);let s=i[e.toURLString()];s&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Sr(e,di,n,r),i[e.toURLString()]=s,s}(l,t,h,new $(t.name,r));return new fi(d,t)}class fi{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Nr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ti(this._repo,ae())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=hi[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Fr(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function mi(e=Object(r.d)(),t){return Object(r.b)(e,"database").getImmediate({identifier:t})}Ie.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ie.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
/**
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
 */
var _i;
/**
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
 */!function(e){c=e}(r.a),Object(r.c)(new i.a("database",(e,{instanceIdentifier:t})=>pi(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),Object(r.f)(a,"0.13.0",_i),Object(r.f)(a,"0.13.0","esm2017")}).call(this,n(9))},,function(e,t,n){"use strict";var r=n(1);n.d(t,"a",(function(){return r.e}));
/**
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
 */
Object(r.f)("firebase","9.8.1","app")},,,,,function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new s(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(20),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(8))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,s,o,a,c=1,l={},u=!1,h=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){f(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){f(e.data)},r=function(e){s.port2.postMessage(e)}):h&&"onreadystatechange"in h.createElement("script")?(i=h.documentElement,r=function(e){var t=h.createElement("script");t.onreadystatechange=function(){f(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(f,0,e)}:(o="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&f(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(o+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return l[c]=i,r(c),c++},d.clearImmediate=p}function p(e){delete l[e]}function f(e){if(u)setTimeout(f,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(8),n(9))},,,function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),s=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([i]).join("\n")}var o,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},,function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],o=s[0],a={id:e+":"+i,css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(a):n.push(r[o]={id:o,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},o=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,l=!1,u=function(){},h=null,d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,i){l=n,h=i||{};var o=r(e,t);return f(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i];(c=s[a.id]).refs--,n.push(c)}t?f(o=r(e,t)):o=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete s[c.id]}}}}function f(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(_(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(i=0;i<n.parts.length;i++)o.push(_(n.parts[i]));s[n.id]={id:n.id,refs:1,parts:o}}}}function m(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function _(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(l)return u;r.parentNode.removeChild(r)}if(d){var i=c++;r=a||(a=m()),t=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=m(),t=b.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var v,g=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function y(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function b(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),h.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}]]);