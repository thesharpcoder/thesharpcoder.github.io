(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return N})),n.d(t,"h",(function(){return I})),n.d(t,"i",(function(){return S})),n.d(t,"j",(function(){return T})),n.d(t,"k",(function(){return s})),n.d(t,"l",(function(){return A})),n.d(t,"m",(function(){return D})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return h})),n.d(t,"p",(function(){return p})),n.d(t,"q",(function(){return k})),n.d(t,"r",(function(){return m})),n.d(t,"s",(function(){return v})),n.d(t,"t",(function(){return l})),n.d(t,"u",(function(){return d})),n.d(t,"v",(function(){return f})),n.d(t,"w",(function(){return E})),n.d(t,"x",(function(){return C})),n.d(t,"y",(function(){return g}));
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,u=i>>2,l=(3&i)<<4|a>>4;let d=(15&a)<<2|c>>6,h=63&c;s||(h=64,o||(d=64)),r.push(n[u],n[l],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==s)throw Error();const c=i<<2|o>>4;if(r.push(c),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==s){const e=a<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){return function(e){const t=r(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")},a=function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */function s(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=s(e[n],t[n]));return e}
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
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
function u(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function l(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}function h(){return"object"==typeof self&&self.self===self}function p(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function m(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function v(){return"object"==typeof indexedDB}function g(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function y(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}class b extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(w,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new b(r,a,n)}}const w=/\{\$([^}]+)}/g;
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
function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function k(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function T(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(O(n)&&O(o)){if(!T(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function O(e){return null!==e&&"object"==typeof e}
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
 */function E(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function C(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function A(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function S(e,t){const n=new R(e,t);return n.subscribe.bind(n)}class R{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P(){}
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
 */function N(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
function D(e){return e&&e._delegate?e._delegate:e}}).call(this,n(9))},function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return be})),n.d(t,"c",(function(){return Se})),n.d(t,"d",(function(){return De})),n.d(t,"e",(function(){return je})),n.d(t,"f",(function(){return Le})),n.d(t,"g",(function(){return Oe})),n.d(t,"h",(function(){return Ne})),n.d(t,"i",(function(){return mn})),n.d(t,"j",(function(){return ar})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return cn})),n.d(t,"m",(function(){return xe})),n.d(t,"n",(function(){return Me})),n.d(t,"o",(function(){return $e})),n.d(t,"p",(function(){return w})),n.d(t,"q",(function(){return fe})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return Ft})),n.d(t,"t",(function(){return O})),n.d(t,"u",(function(){return Mn})),n.d(t,"v",(function(){return Rn})),n.d(t,"w",(function(){return Q})),n.d(t,"y",(function(){return at})),n.d(t,"z",(function(){return xt})),n.d(t,"A",(function(){return ir})),n.d(t,"B",(function(){return $t})),n.d(t,"C",(function(){return st})),n.d(t,"D",(function(){return ot})),n.d(t,"E",(function(){return ve})),n.d(t,"G",(function(){return ut})),n.d(t,"H",(function(){return d})),n.d(t,"I",(function(){return ft})),n.d(t,"J",(function(){return Ct})),n.d(t,"K",(function(){return Rt})),n.d(t,"L",(function(){return xn})),n.d(t,"M",(function(){return Z})),n.d(t,"N",(function(){return Xt})),n.d(t,"O",(function(){return ht})),n.d(t,"P",(function(){return Ze})),n.d(t,"Q",(function(){return dn})),n.d(t,"R",(function(){return On})),n.d(t,"S",(function(){return jn})),n.d(t,"T",(function(){return Dt})),n.d(t,"U",(function(){return Qe})),n.d(t,"V",(function(){return hn})),n.d(t,"W",(function(){return Tn})),n.d(t,"X",(function(){return Ln})),n.d(t,"Y",(function(){return mt})),n.d(t,"Z",(function(){return it})),n.d(t,"ab",(function(){return dt})),n.d(t,"bb",(function(){return ze})),n.d(t,"cb",(function(){return Xe})),n.d(t,"db",(function(){return et})),n.d(t,"eb",(function(){return lt})),n.d(t,"fb",(function(){return pt})),n.d(t,"gb",(function(){return ln})),n.d(t,"hb",(function(){return kn})),n.d(t,"ib",(function(){return Dn})),n.d(t,"jb",(function(){return We})),n.d(t,"kb",(function(){return yt})),n.d(t,"lb",(function(){return bt})),n.d(t,"mb",(function(){return fn})),n.d(t,"nb",(function(){return gt})),n.d(t,"ob",(function(){return vt})),n.d(t,"pb",(function(){return ct})),n.d(t,"x",(function(){return wr})),n.d(t,"F",(function(){return br}));var r=n(0),i=n(2);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(4),s=n(3);
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
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=
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
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},h=l,p=new r.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),f=new a.b("@firebase/auth");function m(e,...t){f.logLevel<=a.a.ERROR&&f.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
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
 */function v(e,...t){throw _(e,...t)}function g(e,...t){return _(e,...t)}function y(e,t,n){const i=Object.assign(Object.assign({},h()),{[t]:n});return new r.b("auth","Firebase",i).create(t,{appName:e.name})}function b(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&v(e,"argument-error"),y(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function w(e,t,...n){if(!e)throw _(t,...n)}function I(e){const t="INTERNAL ASSERTION FAILED: "+e;throw m(t),new Error(t)}function k(e,t){e||I(t)}
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
 */const T=new Map;function O(e){k(e instanceof Function,"Expected a class definition");let t=T.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,T.set(e,t),t)}
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
function E(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===A()||"https:"===A()}function A(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r.t)()||Object(r.v)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(C()||Object(r.p)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function R(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void I("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void I("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void I("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},D=new S(3e4,6e4);
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
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function j(e,t,n,i,o={}){return x(e,o,async()=>{let o={},a={};i&&("GET"===t?a=i:o={body:JSON.stringify(i)});const s=Object(r.w)(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()($(e,e.config.apiHost,n,s),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function x(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw F(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",o);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw y(e,s,a);v(e,s)}}catch(t){if(t instanceof r.c)throw t;v(e,"network-request-failed")}}async function M(e,t,n,r,i={}){const o=await j(e,t,n,r,i);return"mfaPendingCredential"in o&&v(e,"multi-factor-auth-required",{_serverResponse:o}),o}function $(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(g(this.auth,"network-request-failed")),D.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
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
function V(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function z(e){return 1e3*Number(e)}function B(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r.e)(n);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(e){return m("Caught error parsing JWT payload as JSON",e),null}}
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
async function H(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class W{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function K(e){var t;const n=e.auth,r=await e.getIdToken(),i=await H(e,async function(e,t){return j(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));w(null==i?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const s=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const c=(u=e.providerData,l=s,[...u.filter(e=>!l.some(t=>t.providerId===e.providerId)),...l]);var u,l;const d=e.isAnonymous,h=!(e.email&&a.passwordHash||(null==c?void 0:c.length)),p=!!d&&h,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new W(a.createdAt,a.lastLoginAt),isAnonymous:p};Object.assign(e,f)}
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
class G{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(void 0!==e.idToken,"internal-error"),w(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=B(e);return w(t,"internal-error"),w(void 0!==t.exp,"internal-error"),w(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:o}=await
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
async function(e,t){const n=await x(e,{},async()=>{const n=Object(r.w)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=$(e,i,"/v1/token","key="+o),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(a,{method:"POST",headers:s,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new G;return n&&(w("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(w("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(w("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new G,this.toJSON())}_performRefresh(){return I("not implemented")}}
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
 */function J(e,t){w("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Y{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await H(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Object(r.m)(e),i=await n.getIdToken(t),o=B(i);w(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a="object"==typeof o.firebase?o.firebase:void 0,s=null==a?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:V(z(o.auth_time)),issuedAtTime:V(z(o.iat)),expirationTime:V(z(o.exp)),signInProvider:s||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Object(r.m)(e);await K(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Y(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await K(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await H(this,async function(e,t){return j(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:I,stsTokenManager:k}=t;w(y&&k,e,"internal-error");const T=G.fromJSON(this.name,k);w("string"==typeof y,e,"internal-error"),J(l,e.name),J(d,e.name),w("boolean"==typeof b,e,"internal-error"),w("boolean"==typeof _,e,"internal-error"),J(h,e.name),J(p,e.name),J(f,e.name),J(m,e.name),J(v,e.name),J(g,e.name);const O=new Y({uid:y,auth:e,email:d,emailVerified:b,displayName:l,isAnonymous:_,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:T,createdAt:v,lastLoginAt:g});return I&&Array.isArray(I)&&(O.providerData=I.map(e=>Object.assign({},e))),m&&(O._redirectEventId=m),O}static async _fromIdTokenResponse(e,t,n=!1){const r=new G;r.updateFromServerResponse(t);const i=new Y({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await K(i),i}}
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
 */class X{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}X.type="NONE";const Z=X;
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
 */function Q(e,t,n){return`firebase:${e}:${t}:${n}`}class ee{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Q(this.userKey,r.apiKey,i),this.fullPersistenceKey=Q("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Y._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ee(O(Z),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||O(Z);const o=Q(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(o);if(t){const r=Y._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const s=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(e){}})),new ee(i,e,n)):new ee(i,e,n)}}
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
 */function te(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(oe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ne(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(se(t))return"Blackberry";if(ce(t))return"Webos";if(re(t))return"Safari";if((t.includes("chrome/")||ie(t))&&!t.includes("edge/"))return"Chrome";if(ae(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ne(e=Object(r.n)()){return/firefox\//i.test(e)}function re(e=Object(r.n)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ie(e=Object(r.n)()){return/crios\//i.test(e)}function oe(e=Object(r.n)()){return/iemobile/i.test(e)}function ae(e=Object(r.n)()){return/android/i.test(e)}function se(e=Object(r.n)()){return/blackberry/i.test(e)}function ce(e=Object(r.n)()){return/webos/i.test(e)}function ue(e=Object(r.n)()){return/iphone|ipad|ipod/i.test(e)}function le(e=Object(r.n)()){return ue(e)||ae(e)||ce(e)||se(e)||/windows phone/i.test(e)||oe(e)}
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
function de(e,t=[]){let n;switch(e){case"Browser":n=te(Object(r.n)());break;case"Worker":n=`${te(Object(r.n)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${o}`}
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
 */class he{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e.message})}}}
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
 */class pe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new me(this),this.idTokenSubscription=new me(this),this.beforeStateQueue=new he(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=O(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ee.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==o||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await K(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r.m)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(O(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&O(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await ee.create(this,[O(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=de(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function fe(e){return Object(r.m)(e)}class me{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r.i)(e=>this.observer=e)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ve(e,t,n){const r=fe(e);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=ge(t),{host:a,port:s}=function(e){const t=ge(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ye(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ye(t)}}}(t),c=null===s?"":":"+s;r.config.emulator={url:`${o}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function ge(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ye(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class be{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return I("not implemented")}_getIdTokenResponse(e){return I("not implemented")}_linkToIdToken(e,t){return I("not implemented")}_getReauthenticationResolver(e){return I("not implemented")}}
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
 */async function _e(e,t){return j(e,"POST","/v1/accounts:resetPassword",L(e,t))}async function we(e,t){return j(e,"POST","/v1/accounts:update",t)}async function Ie(e,t){return j(e,"POST","/v1/accounts:sendOobCode",L(e,t))}
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
class ke extends be{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ke(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ke(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return we(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Te(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
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
 */class Oe extends be{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Oe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const a=new Oe(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return Te(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Te(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Te(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(r.w)(t)}return e}}
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
 */const Ee={USER_NOT_FOUND:"user-not-found"};
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
class Ce extends be{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ce({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ce({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ee)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ce({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */class Ae{constructor(e){var t,n,i,o,a,s;const c=Object(r.x)(Object(r.l)(e)),u=null!==(t=c.apiKey)&&void 0!==t?t:null,l=null!==(n=c.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);w(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(a=c.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(s=c.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Object(r.x)(Object(r.l)(e)).link,n=t?Object(r.x)(Object(r.l)(t)).deep_link_id:null,i=Object(r.x)(Object(r.l)(e)).deep_link_id;return(i?Object(r.x)(Object(r.l)(i)).link:null)||i||n||t||e}(e);try{return new Ae(t)}catch(e){return null}}}
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
class Se{constructor(){this.providerId=Se.PROVIDER_ID}static credential(e,t){return ke._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ae.parseLink(t);return w(n,"argument-error"),ke._fromEmailAndCode(e,n.code,n.tenantId)}}Se.PROVIDER_ID="password",Se.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Se.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Re{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Pe extends Re{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ne extends Pe{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return w("providerId"in t&&"signInMethod"in t,"argument-error"),Oe._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),Oe._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ne.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ne.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:a}=e;if(!(n||r||t||i))return null;if(!a)return null;try{return new Ne(a)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch(e){return null}}}
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
 */class De extends Pe{constructor(){super("facebook.com")}static credential(e){return Oe._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch(e){return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com",De.PROVIDER_ID="facebook.com";
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
class Le extends Pe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Oe._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Le.credential(t,n)}catch(e){return null}}}Le.GOOGLE_SIGN_IN_METHOD="google.com",Le.PROVIDER_ID="google.com";
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
class je extends Pe{constructor(){super("github.com")}static credential(e){return Oe._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch(e){return null}}}je.GITHUB_SIGN_IN_METHOD="github.com",je.PROVIDER_ID="github.com";class xe extends be{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Te(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Te(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Te(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new xe(n,i):null}static _create(e,t){return new xe(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
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
 */class Me extends Re{constructor(e){w(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return Me.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Me.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=xe.fromJSON(e);return w(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return xe._create(n,t)}catch(e){return null}}}
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
 */class $e extends Pe{constructor(){super("twitter.com")}static credential(e,t){return Oe._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return $e.credential(t,n)}catch(e){return null}}}
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
async function Ue(e,t){return M(e,"POST","/v1/accounts:signUp",L(e,t))}
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
 */$e.TWITTER_SIGN_IN_METHOD="twitter.com",$e.PROVIDER_ID="twitter.com";class Fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Y._fromIdTokenResponse(e,n,r),o=Ve(n);return new Fe({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ve(n);return new Fe({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ve(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */async function ze(e){var t;const n=fe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Fe({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ue(n,{returnSecureToken:!0}),i=await Fe._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
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
 */class Be extends r.c{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Be.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Be(e,t,n,r)}}function He(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Be._fromErrorAndOperation(e,n,t,r);throw n})}
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
 */function qe(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
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
 */async function We(e,t){const n=Object(r.m)(e);await Ge(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return j(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=qe(i||[]);return n.providerData=n.providerData.filter(e=>o.has(e.providerId)),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ke(e,t,n=!1){const r=await H(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Fe._forOperation(e,"link",r)}async function Ge(e,t,n){await K(t);const r=!1===e?"provider-already-linked":"no-such-provider";w(qe(t.providerData).has(n)===e,t.auth,r)}
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
 */async function Je(e,t,n=!1){const{auth:r}=e;try{const i=await H(e,He(r,"reauthenticate",t,e),n);w(i.idToken,r,"internal-error");const o=B(i.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(e.uid===a,r,"user-mismatch"),Fe._forOperation(e,"reauthenticate",i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&v(r,"user-mismatch"),e}}
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
 */async function Ye(e,t,n=!1){const r=await He(e,"signIn",t),i=await Fe._fromIdTokenResponse(e,"signIn",r);return n||await e._updateCurrentUser(i.user),i}async function Xe(e,t){return Ye(fe(e),t)}async function Ze(e,t){const n=Object(r.m)(e);return await Ge(!1,n,t.providerId),Ke(n,t)}async function Qe(e,t){return Je(Object(r.m)(e),t)}
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
async function et(e,t){const n=fe(e),r=await async function(e,t){return M(e,"POST","/v1/accounts:signInWithCustomToken",L(e,t))}(n,{token:t,returnSecureToken:!0}),i=await Fe._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
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
 */class tt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?nt._fromServerResponse(e,t):v(e,"internal-error")}}class nt extends tt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new nt(t)}}
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
 */function rt(e,t,n){var r;w((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),w(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(w(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(w(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
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
 */async function it(e,t,n){const i=Object(r.m)(e),o={requestType:"PASSWORD_RESET",email:t};n&&rt(i,o,n),await async function(e,t){return Ie(e,t)}(i,o)}async function ot(e,t,n){await _e(Object(r.m)(e),{oobCode:t,newPassword:n})}async function at(e,t){await async function(e,t){return j(e,"POST","/v1/accounts:update",L(e,t))}(Object(r.m)(e),{oobCode:t})}async function st(e,t){const n=Object(r.m)(e),i=await _e(n,{oobCode:t}),o=i.requestType;switch(w(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(i.mfaInfo,n,"internal-error");default:w(i.email,n,"internal-error")}let a=null;return i.mfaInfo&&(a=tt._fromServerResponse(fe(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:a},operation:o}}async function ct(e,t){const{data:n}=await st(Object(r.m)(e),t);return n.email}async function ut(e,t,n){const r=fe(e),i=await Ue(r,{returnSecureToken:!0,email:t,password:n}),o=await Fe._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function lt(e,t,n){return Xe(Object(r.m)(e),Se.credential(t,n))}
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
 */async function dt(e,t,n){const i=Object(r.m)(e),o={requestType:"EMAIL_SIGNIN",email:t};w(n.handleCodeInApp,i,"argument-error"),n&&rt(i,o,n),await async function(e,t){return Ie(e,t)}(i,o)}function ht(e,t){const n=Ae.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}async function pt(e,t,n){const i=Object(r.m)(e),o=Se.credentialWithLink(t,n||E());return w(o._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Xe(i,o)}
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
async function ft(e,t){const n={identifier:t,continueUri:C()?E():"http://localhost"},{signinMethods:i}=await async function(e,t){return j(e,"POST","/v1/accounts:createAuthUri",L(e,t))}(Object(r.m)(e),n);return i||[]}async function mt(e,t){const n=Object(r.m)(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&rt(n.auth,i,t);const{email:o}=await async function(e,t){return Ie(e,t)}(n.auth,i);o!==e.email&&await e.reload()}async function vt(e,t,n){const i=Object(r.m)(e),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&rt(i.auth,o,n);const{email:a}=await async function(e,t){return Ie(e,t)}(i.auth,o);a!==e.email&&await e.reload()}
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
async function gt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r.m)(e),o={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await H(i,async function(e,t){return j(e,"POST","/v1/accounts:update",t)}(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const s=i.providerData.find(({providerId:e})=>"password"===e);s&&(s.displayName=i.displayName,s.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function yt(e,t){return _t(Object(r.m)(e),t,null)}function bt(e,t){return _t(Object(r.m)(e),null,t)}async function _t(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const o=await H(e,we(r,i));await e._updateTokensIfNecessary(o,!0)}
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
 */class wt{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class It extends wt{constructor(e,t,n,r){super(e,t,n),this.username=r}}class kt extends wt{constructor(e,t){super(e,"facebook.com",t)}}class Tt extends It{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class Ot extends wt{constructor(e,t){super(e,"google.com",t)}}class Et extends It{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Ct(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=B(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r){return new wt(o,"anonymous"!==r&&"custom"!==r?r:null)}}if(!r)return null;switch(r){case"facebook.com":return new kt(o,i);case"github.com":return new Tt(o,i);case"google.com":return new Ot(o,i);case"twitter.com":return new Et(o,i,e.screenName||null);case"custom":case"anonymous":return new wt(o,null);default:return new wt(o,r,i)}}(n)}
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
 */class At{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new At("enroll",e)}static _fromMfaPendingCredential(e){return new At("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return At._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return At._fromIdtoken(e.multiFactorSession.idToken)}return null}}
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
 */class St{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=fe(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>tt._fromServerResponse(n,e));w(r.mfaPendingCredential,n,"internal-error");const o=At._fromMfaPendingCredential(r.mfaPendingCredential);return new St(o,i,async e=>{const i=await e._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const a=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Fe._fromIdTokenResponse(n,t.operationType,a);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return w(t.user,n,"internal-error"),Fe._forOperation(t.user,t.operationType,a);default:v(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Rt(e,t){var n;const i=Object(r.m)(e),o=t;return w(t.customData.operationType,i,"argument-error"),w(null===(n=o.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),St._fromError(i,o)}
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
 */class Pt{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>tt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new Pt(e)}async getSession(){return At._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await H(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),r=await H(this.user,(i=this.user.auth,o={idToken:n,mfaEnrollmentId:t},j(i,"POST","/v2/accounts/mfaEnrollment:withdraw",L(i,o))));var i,o;this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==e.code)throw e}}}const Nt=new WeakMap;function Dt(e){const t=Object(r.m)(e);return Nt.has(t)||Nt.set(t,Pt._fromUser(t)),Nt.get(t)}
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
class Lt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class jt extends Lt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(r.n)();return re(e)||ue(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=le(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);Object(r.r)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jt.type="LOCAL";const xt=jt;
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
 */class Mt extends Lt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mt.type="SESSION";const $t=Mt;
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
class Ut{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ut(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async e=>e(t.origin,i)),s=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ft(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Ut.receivers=[];class Vt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,s)=>{const c=Ft("",20);r.port1.start();const u=setTimeout(()=>{s(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
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
 */function zt(){return window}
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
function Bt(){return void 0!==zt().WorkerGlobalScope&&"function"==typeof zt().importScripts}
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
const Ht="firebaseLocalStorageDb";class qt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wt(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Kt(){const e=indexedDB.open(Ht,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Ht);return new qt(e).toPromise()}(),t(await Kt()))})})}async function Gt(e,t,n){const r=Wt(e,!0).put({fbase_key:t,value:n});return new qt(r).toPromise()}function Jt(e,t){const n=Wt(e,!0).delete(t);return new qt(n).toPromise()}class Yt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Kt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ut._getInstance(Bt()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Vt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kt();return await Gt(e,"__sak","1"),await Jt(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=Wt(e,!1).get(t),r=await new qt(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Wt(e,!1).getAll();return new qt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Yt.type="LOCAL";const Xt=Yt;
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
 */function Zt(e){return new Promise((t,n)=>{const r=document.createElement("script");
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
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)})}function Qt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
 */class en{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new tn(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class tn{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;w(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
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
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const nn=Qt("rcb"),rn=new S(3e4,6e4);class on{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!zt().grecaptcha}load(e,t=""){return w(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(zt().grecaptcha):new Promise((n,i)=>{const o=zt().setTimeout(()=>{i(g(e,"network-request-failed"))},rn.get());zt()[nn]=()=>{zt().clearTimeout(o),delete zt()[nn];const r=zt().grecaptcha;if(!r)return void i(g(e,"internal-error"));const a=r.render;r.render=(e,t)=>{const n=a(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};Zt("https://www.google.com/recaptcha/api.js??"+Object(r.w)({onload:nn,render:"explicit",hl:t})).catch(()=>{clearTimeout(o),i(g(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!zt().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class an{async load(e){return new en(e)}clearedOneInstance(){}}
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
 */const sn={theme:"light",type:"image"};class cn{constructor(e,t=Object.assign({},sn),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=fe(n),this.isInvisible="invisible"===this.parameters.size,w("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;w(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new an:new on,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){const n=zt()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(C()&&!Bt(),this.auth,"internal-error"),await function(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
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
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
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
async function(e){return(await j(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class un{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ce._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ln(e,t,n){const i=fe(e),o=await pn(i,t,Object(r.m)(n));return new un(o,e=>Xe(i,e))}async function dn(e,t,n){const i=Object(r.m)(e);await Ge(!1,i,"phone");const o=await pn(i.auth,t,Object(r.m)(n));return new un(o,e=>Ze(i,e))}async function hn(e,t,n){const i=Object(r.m)(e),o=await pn(i.auth,t,Object(r.m)(n));return new un(o,e=>Qe(i,e))}async function pn(e,t,n){var r;const i=await n.verify();try{let o;if(w("string"==typeof i,e,"argument-error"),w("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){w("enroll"===t.type,e,"internal-error");return(await function(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;w(n,e,"missing-multi-factor-info");return(await function(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return j(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function fn(e,t){await Ke(Object(r.m)(e),t)}
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
 */class mn{constructor(e){this.providerId=mn.PROVIDER_ID,this.auth=fe(e)}verifyPhoneNumber(e,t){return pn(this.auth,e,Object(r.m)(t))}static credential(e,t){return Ce._fromVerification(e,t)}static credentialFromResult(e){const t=e;return mn.credentialFromTaggedObject(t)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ce._fromTokenResponse(t,n):null}}
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
function vn(e,t){return t?O(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */mn.PROVIDER_ID="phone",mn.PHONE_SIGN_IN_METHOD="phone";class gn extends be{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Te(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Te(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Te(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yn(e){return Ye(e.auth,new gn(e),e.bypassAuthState)}function bn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Je(n,new gn(e),e.bypassAuthState)}async function _n(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Ke(n,new gn(e),e.bypassAuthState)}
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
 */class wn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yn;case"linkViaPopup":case"linkViaRedirect":return _n;case"reauthViaPopup":case"reauthViaRedirect":return bn;default:v(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const In=new S(2e3,1e4);async function kn(e,t,n){const r=fe(e);b(e,t,Re);const i=vn(r,n);return new En(r,"signInViaPopup",t,i).executeNotNull()}async function Tn(e,t,n){const i=Object(r.m)(e);b(i.auth,t,Re);const o=vn(i.auth,n);return new En(i.auth,"reauthViaPopup",t,o,i).executeNotNull()}async function On(e,t,n){const i=Object(r.m)(e);b(i.auth,t,Re);const o=vn(i.auth,n);return new En(i.auth,"linkViaPopup",t,o,i).executeNotNull()}class En extends wn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=Ft();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,In.get())};e()}}En.currentPopupAction=null;
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
const Cn=new Map;class An extends wn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Cn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Nn(t),r=Pn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Cn.set(this.auth._key(),e)}return this.bypassAuthState||Cn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Sn(e,t){return Pn(e)._set(Nn(t),"true")}function Rn(e,t){Cn.set(e._key(),t)}function Pn(e){return O(e._redirectPersistence)}function Nn(e){return Q("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Dn(e,t,n){return async function(e,t,n){const r=fe(e);b(e,t,Re);const i=vn(r,n);return await Sn(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function Ln(e,t,n){return async function(e,t,n){const i=Object(r.m)(e);b(i.auth,t,Re);const o=vn(i.auth,n);await Sn(o,i.auth);const a=await $n(i);return o._openRedirect(i.auth,t,"reauthViaRedirect",a)}(e,t,n)}function jn(e,t,n){return async function(e,t,n){const i=Object(r.m)(e);b(i.auth,t,Re);const o=vn(i.auth,n);await Ge(!1,i,t.providerId),await Sn(o,i.auth);const a=await $n(i);return o._openRedirect(i.auth,t,"linkViaRedirect",a)}(e,t,n)}async function xn(e,t){return await fe(e)._initializationPromise,Mn(e,t,!1)}async function Mn(e,t,n=!1){const r=fe(e),i=vn(r,t),o=new An(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}async function $n(e){const t=Ft(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */class Un{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vn(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Vn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fn(e))}saveEventToCache(e){this.cachedEventUids.add(Fn(e)),this.lastProcessedEventTime=Date.now()}}function Fn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Vn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function zn(e,t={}){return j(e,"GET","/v1/projects",t)}
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
 */const Bn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hn=/^https?/;function qn(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Hn.test(n))return!1;if(Bn.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Wn=new S(3e4,6e4);function Kn(){const e=zt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Gn=null;function Jn(e){return Gn=Gn||function(e){return new Promise((t,n)=>{var r,i,o;function a(){Kn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Kn(),n(g(e,"network-request-failed"))},timeout:Wn.get()})}if(null===(i=null===(r=zt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=zt().gapi)||void 0===o?void 0:o.load)){const t=Qt("iframefcb");return zt()[t]=()=>{gapi.load?a():n(g(e,"network-request-failed"))},Zt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}a()}}).catch(e=>{throw Gn=null,e})}(e),Gn}
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
 */const Yn=new S(5e3,15e3),Xn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qn(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,o={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},a=Zn.get(e.config.apiHost);a&&(o.eid=a);const s=e._getFrameworks();return s.length&&(o.fw=s.join(",")),`${n}?${Object(r.w)(o).slice(1)}`}
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
const er={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function nr(e,t,n,i=500,o=600){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},er),{width:i.toString(),height:o.toString(),top:a,left:s}),l=Object(r.n)().toLowerCase();n&&(c=ie(l)?"_blank":n),ne(l)&&(t=t||"http://localhost",u.scrollbars="yes");const d=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Object(r.n)()){var t;return ue(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",c),new tr(null);const h=window.open(t||"",c,d);w(h,e,"popup-blocked");try{h.focus()}catch(e){}return new tr(h)}function rr(e,t,n,o,a,s){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.SDK_VERSION,eventId:a};if(t instanceof Re){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r.q)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))c[e]=t}if(t instanceof Pe){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return R(e,"emulator/auth/handler")}
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
 */(e)}?${Object(r.w)(u).slice(1)}`}const ir=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$t,this._completeRedirectFn=Mn,this._overrideRedirectResult=Rn}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return nr(e,rr(e,t,n,E(),r),Ft())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=rr(e,t,n,E(),r),zt().location.href=i,new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await async function(e){const t=await Jn(e),n=zt().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:Qn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),o=zt().setTimeout(()=>{r(i)},Yn.get());function a(){zt().clearTimeout(o),n(t)}t.ping(a).then(a,()=>{r(i)})}))}(e),n=new Un(e);return t.register("authEvent",t=>{w(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await zn(e);for(const e of t)try{if(qn(e))return}catch(e){}v(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return le()||re()||ue()}};class or extends class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return I("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new or(e)}_finalizeEnroll(e,t,n){return function(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ar{constructor(){}static assertion(e){return or._fromCredential(e)}}ar.FACTOR_ID="phone";var sr;
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
class cr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
function ur(){return window}
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
 */sr="Browser",Object(i._registerComponent)(new s.a("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{w(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),w(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:sr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:de(sr)},a=new pe(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(O);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(i._registerComponent)(new s.a("auth-internal",e=>(e=>new cr(e))(fe(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i.registerVersion)("@firebase/auth","0.20.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(sr)),Object(i.registerVersion)("@firebase/auth","0.20.1","esm2017");async function lr(e,t,n){var r;const{BuildInfo:i}=ur();k(t.sessionId,"AuthEvent did not contain a session ID");const o=await async function(e){const t=function(e){if(k(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
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
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,"0")).join("")}(t.sessionId),a={};return ue()?a.ibi=i.packageName:ae()?a.apn=i.packageName:v(e,"operation-not-supported-in-this-environment"),i.displayName&&(a.appDisplayName=i.displayName),a.sessionId=o,rr(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,a)}function dr(e){const{cordova:t}=ur();return new Promise(n=>{t.plugins.browsertab.isAvailable(i=>{let o=null;i?t.plugins.browsertab.openUrl(e):o=t.InAppBrowser.open(e,function(e=Object(r.n)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_blank":"_system","location=yes"),n(o)})})}class hr extends Un{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}async function pr(e){const t=await vr()._get(gr(e));return t&&await vr()._remove(gr(e)),t}function fr(e,t){var n,r;const i=function(e){const t=yr(e),n=t.link?decodeURIComponent(t.link):void 0,r=yr(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return yr(i).link||i||r||n||e}(t);if(i.includes("/__/auth/callback")){const t=yr(i),o=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,a=null===(r=null===(n=null==o?void 0:o.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],s=a?g(a):null;return s?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:s,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function mr(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function vr(){return O(xt)}function gr(e){return Q("authEvent",e.config.apiKey,e.name)}function yr(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r.x)(n.join("?"))}
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
 */const br=class{constructor(){this._redirectPersistence=$t,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Mn,this._overrideRedirectResult=Rn}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new hr(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){v(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,i,o,a,s,c,u,l;const d=ur();w("function"==typeof(null===(t=null==d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(void 0!==(null===(n=null==d?void 0:d.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w("function"==typeof(null===(o=null===(i=null===(r=null==d?void 0:d.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w("function"==typeof(null===(c=null===(s=null===(a=null==d?void 0:d.cordova)||void 0===a?void 0:a.plugins)||void 0===s?void 0:s.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w("function"==typeof(null===(l=null===(u=null==d?void 0:d.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Cn.clear(),await this._originValidation(e);const o=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:mr(),postBody:null,tenantId:e.tenantId,error:g(e,"no-auth-event")}}(e,n,r);await function(e,t){return vr()._set(gr(e),t)}(e,o);const a=await lr(e,o,t);return async function(e,t,n){const{cordova:r}=ur();let i=()=>{};try{await new Promise((o,a)=>{let s=null;function c(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function u(){s||(s=window.setTimeout(()=>{a(g(e,"redirect-cancelled-by-user"))},2e3))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),ae()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),s&&window.clearTimeout(s)}})}finally{i()}}(e,i,await dr(a))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=ur(),n={};ue()?n.iosBundleId=t.packageName:ae()?n.androidPackageName=t.packageName:v(e,"operation-not-supported-in-this-environment"),await zn(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=ur(),o=setTimeout(async()=>{await pr(e),t.onEvent(_r())},500),a=async n=>{clearTimeout(o);const r=await pr(e);let i=null;r&&(null==n?void 0:n.url)&&(i=fr(r,n.url)),t.onEvent(i||_r())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,a);const s=r,c=i.packageName.toLowerCase()+"://";ur().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&a({url:e}),"function"==typeof s)try{s(e)}catch(e){console.error(e)}}}};function _r(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:g("no-auth-event")}}
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
 */function wr(e,t){fe(e)._logFramework(t)}},function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return k})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return l})),n.d(t,"_addComponent",(function(){return f})),n.d(t,"_addOrOverwriteComponent",(function(){return m})),n.d(t,"_apps",(function(){return h})),n.d(t,"_clearComponents",(function(){return b})),n.d(t,"_components",(function(){return p})),n.d(t,"_getProvider",(function(){return g})),n.d(t,"_registerComponent",(function(){return v})),n.d(t,"_removeServiceInstance",(function(){return y})),n.d(t,"deleteApp",(function(){return C})),n.d(t,"getApp",(function(){return O})),n.d(t,"getApps",(function(){return E})),n.d(t,"initializeApp",(function(){return T})),n.d(t,"onLog",(function(){return S})),n.d(t,"registerVersion",(function(){return A})),n.d(t,"setLogLevel",(function(){return R}));var r=n(3),i=n(4),o=n(0);n.d(t,"FirebaseError",(function(){return o.c}));var a=n(12);
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
 */class s{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const c="@firebase/app",u=new i.b("@firebase/app"),l="[DEFAULT]",d={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},h=new Map,p=new Map;function f(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function m(e,t){e.container.addOrOverwriteComponent(t)}function v(e){const t=e.name;if(p.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;p.set(t,e);for(const t of h.values())f(t,e);return!0}function g(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function y(e,t,n=l){g(e,t).clearInstance(n)}function b(){p.clear()}
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
 */const _={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},w=new o.b("app","Firebase",_);
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
class I{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted",{appName:this._name})}}
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
 */const k="9.8.1";function T(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:l,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw w.create("bad-app-name",{appName:String(i)});const a=h.get(i);if(a){if(Object(o.j)(e,a.options)&&Object(o.j)(n,a.config))return a;throw w.create("duplicate-app",{appName:i})}const s=new r.b(i);for(const e of p.values())s.addComponent(e);const c=new I(e,n,s);return h.set(i,c),c}function O(e=l){const t=h.get(e);if(!t)throw w.create("no-app",{appName:e});return t}function E(){return Array.from(h.values())}async function C(e){const t=e.name;h.has(t)&&(h.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function A(e,t,n){var i;let o=null!==(i=d[e])&&void 0!==i?i:e;n&&(o+="-"+n);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${o}" with version "${t}":`];return a&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}v(new r.a(o+"-version",()=>({library:o,version:t}),"VERSION"))}function S(e,t){if(null!==e&&"function"!=typeof e)throw w.create("invalid-log-argument");Object(i.d)(e,t)}function R(e){Object(i.c)(e)}
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
 */const P="firebase-heartbeat-store";let N=null;function D(){return N||(N=Object(a.a)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(P)}}}).catch(e=>{throw w.create("storage-open",{originalErrorMessage:e.message})})),N}async function L(e,t){try{const n=(await D()).transaction(P,"readwrite"),r=n.objectStore(P);return await r.put(t,j(e)),n.done}catch(e){throw w.create("storage-set",{originalErrorMessage:e.message})}}function j(e){return`${e.name}!${e.options.appId}`}
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
 */class x{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=M();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=M(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),U(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),U(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(o.f)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function M(){return(new Date).toISOString().substring(0,10)}class ${constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o.s)()&&Object(o.y)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await D()).transaction(P).objectStore(P).get(j(e))}catch(e){throw w.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return L(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return L(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function U(e){return Object(o.f)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var F;F="",v(new r.a("platform-logger",e=>new s(e),"PRIVATE")),v(new r.a("heartbeat",e=>new x(e),"PRIVATE")),A(c,"0.7.24",F),A(c,"0.7.24","esm2017"),A("fire-js","")},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n(0);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));
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
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=s[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const a=o.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:a,args:o,type:t.name})}}}},function(e,t,n){"use strict";var r=n(6);n.d(t,"a",(function(){return r.a}));
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
r.a.registerVersion("firebase","9.8.1","app-compat")},function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),i=n(3),o=n(2),a=n(4);
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
class s{constructor(e,t){this._delegate=e,this.firebase=t,Object(o._addComponent)(e,new i.a("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(o.deleteApp)(this._delegate)))}_getService(e,t=o._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(o._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){Object(o._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const c={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.b("app-compat","Firebase",c);const l=
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
function e(){const t=
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
function(e){const t={},n={__esModule:!0,initializeApp:function(i,a={}){const s=o.initializeApp(i,a);if(Object(r.h)(t,s.name))return t[s.name];const c=new e(s,n);return t[s.name]=c,c},app:i,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:function(t){const a=t.name,s=a.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=i())=>{if("function"!=typeof e[s])throw u.create("invalid-app-argument",{appName:a});return e[s]()};void 0!==t.serviceProps&&Object(r.k)(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){return this._getService.bind(this,a).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:o}};function i(e){if(e=e||o._DEFAULT_ENTRY_NAME,!Object(r.h)(t,e))throw u.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),i.App=e,n}(s);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(r.k)(t,e)},createSubscribe:r.i,ErrorFactory:r.b,deepExtend:r.k}),t}(),d=new a.b("@firebase/app-compat");
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
if(Object(r.o)()&&void 0!==self.firebase){d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const h=l;
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
var p;Object(o.registerVersion)("@firebase/app-compat","0.1.25",p)},,function(e,t,n){"use strict";function r(e,t,n,r,i,o,a,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}n.d(t,"a",(function(){return r}))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e,n){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({});function i(e){return null==e}function o(e){return null!=e}function a(e){return!0===e}function s(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function c(e){return null!==e&&"object"==typeof e}var u=Object.prototype.toString;function l(e){return"[object Object]"===u.call(e)}function d(e){return"[object RegExp]"===u.call(e)}function h(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function p(e){return o(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function f(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===u?JSON.stringify(e,null,2):String(e)}function m(e){var t=parseFloat(e);return isNaN(t)?e:t}function v(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}v("slot,component",!0);var g=v("key,ref,slot,slot-scope,is");function y(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function _(e,t){return b.call(e,t)}function w(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var I=/-(\w)/g,k=w((function(e){return e.replace(I,(function(e,t){return t?t.toUpperCase():""}))})),T=w((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),O=/\B([A-Z])/g,E=w((function(e){return e.replace(O,"-$1").toLowerCase()}));var C=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function A(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function S(e,t){for(var n in t)e[n]=t[n];return e}function R(e){for(var t={},n=0;n<e.length;n++)e[n]&&S(t,e[n]);return t}function P(e,t,n){}var N=function(e,t,n){return!1},D=function(e){return e};function L(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return L(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var a=Object.keys(e),s=Object.keys(t);return a.length===s.length&&a.every((function(n){return L(e[n],t[n])}))}catch(e){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(L(e[n],t))return n;return-1}function x(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var M=["component","directive","filter"],$=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:P,parsePlatformTagName:D,mustUseProp:N,async:!0,_lifecycleHooks:$},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function V(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+F.source+".$_\\d]");var B,H="__proto__"in{},q="undefined"!=typeof window,W="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,K=W&&WXEnvironment.platform.toLowerCase(),G=q&&window.navigator.userAgent.toLowerCase(),J=G&&/msie|trident/.test(G),Y=G&&G.indexOf("msie 9.0")>0,X=G&&G.indexOf("edge/")>0,Z=(G&&G.indexOf("android"),G&&/iphone|ipad|ipod|ios/.test(G)||"ios"===K),Q=(G&&/chrome\/\d+/.test(G),G&&/phantomjs/.test(G),G&&G.match(/firefox\/(\d+)/)),ee={}.watch,te=!1;if(q)try{var ne={};Object.defineProperty(ne,"passive",{get:function(){te=!0}}),window.addEventListener("test-passive",null,ne)}catch(e){}var re=function(){return void 0===B&&(B=!q&&!W&&void 0!==e&&(e.process&&"server"===e.process.env.VUE_ENV)),B},ie=q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function oe(e){return"function"==typeof e&&/native code/.test(e.toString())}var ae,se="undefined"!=typeof Symbol&&oe(Symbol)&&"undefined"!=typeof Reflect&&oe(Reflect.ownKeys);ae="undefined"!=typeof Set&&oe(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ce=P,ue=0,le=function(){this.id=ue++,this.subs=[]};le.prototype.addSub=function(e){this.subs.push(e)},le.prototype.removeSub=function(e){y(this.subs,e)},le.prototype.depend=function(){le.target&&le.target.addDep(this)},le.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},le.target=null;var de=[];function he(e){de.push(e),le.target=e}function pe(){de.pop(),le.target=de[de.length-1]}var fe=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},me={child:{configurable:!0}};me.child.get=function(){return this.componentInstance},Object.defineProperties(fe.prototype,me);var ve=function(e){void 0===e&&(e="");var t=new fe;return t.text=e,t.isComment=!0,t};function ge(e){return new fe(void 0,void 0,void 0,String(e))}function ye(e){var t=new fe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var be=Array.prototype,_e=Object.create(be);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(e){var t=be[e];V(_e,e,(function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o}))}));var we=Object.getOwnPropertyNames(_e),Ie=!0;function ke(e){Ie=e}var Te=function(e){this.value=e,this.dep=new le,this.vmCount=0,V(e,"__ob__",this),Array.isArray(e)?(H?function(e,t){e.__proto__=t}(e,_e):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];V(e,o,t[o])}}(e,_e,we),this.observeArray(e)):this.walk(e)};function Oe(e,t){var n;if(c(e)&&!(e instanceof fe))return _(e,"__ob__")&&e.__ob__ instanceof Te?n=e.__ob__:Ie&&!re()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Te(e)),t&&n&&n.vmCount++,n}function Ee(e,t,n,r,i){var o=new le,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set;s&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Oe(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return le.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&Se(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!=t&&r!=r||s&&!c||(c?c.call(e,t):n=t,u=!i&&Oe(t),o.notify())}})}}function Ce(e,t,n){if(Array.isArray(e)&&h(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Ee(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Ae(e,t){if(Array.isArray(e)&&h(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||_(e,t)&&(delete e[t],n&&n.dep.notify())}}function Se(e){for(var t=void 0,n=0,r=e.length;n<r;n++)(t=e[n])&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Se(t)}Te.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Ee(e,t[n])},Te.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Oe(e[t])};var Re=U.optionMergeStrategies;function Pe(e,t){if(!t)return e;for(var n,r,i,o=se?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)"__ob__"!==(n=o[a])&&(r=e[n],i=t[n],_(e,n)?r!==i&&l(r)&&l(i)&&Pe(r,i):Ce(e,n,i));return e}function Ne(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?Pe(r,i):i}:t?e?function(){return Pe("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function De(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Le(e,t,n,r){var i=Object.create(e||null);return t?S(i,t):i}Re.data=function(e,t,n){return n?Ne(e,t,n):t&&"function"!=typeof t?e:Ne(e,t)},$.forEach((function(e){Re[e]=De})),M.forEach((function(e){Re[e+"s"]=Le})),Re.watch=function(e,t,n,r){if(e===ee&&(e=void 0),t===ee&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in S(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Re.props=Re.methods=Re.inject=Re.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return S(i,e),t&&S(i,t),i},Re.provide=Ne;var je=function(e,t){return void 0===t?e:t};function xe(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[k(i)]={type:null});else if(l(n))for(var a in n)i=n[a],o[k(a)]=l(i)?i:{type:i};else 0;e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?S({from:o},a):{from:a}}else 0}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=xe(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=xe(e,t.mixins[r],n);var o,a={};for(o in e)s(o);for(o in t)_(e,o)||s(o);function s(r){var i=Re[r]||je;a[r]=i(e[r],t[r],n,r)}return a}function Me(e,t,n,r){if("string"==typeof n){var i=e[t];if(_(i,n))return i[n];var o=k(n);if(_(i,o))return i[o];var a=T(o);return _(i,a)?i[a]:i[n]||i[o]||i[a]}}function $e(e,t,n,r){var i=t[e],o=!_(n,e),a=n[e],s=ze(Boolean,i.type);if(s>-1)if(o&&!_(i,"default"))a=!1;else if(""===a||a===E(e)){var c=ze(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!_(t,"default"))return;var r=t.default;0;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Fe(t.type)?r.call(e):r}(r,i,e);var u=Ie;ke(!0),Oe(a),ke(u)}return a}var Ue=/^\s*function (\w+)/;function Fe(e){var t=e&&e.toString().match(Ue);return t?t[1]:""}function Ve(e,t){return Fe(e)===Fe(t)}function ze(e,t){if(!Array.isArray(t))return Ve(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Ve(t[n],e))return n;return-1}function Be(e,t,n){he();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){qe(e,r,"errorCaptured hook")}}qe(e,t,n)}finally{pe()}}function He(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&p(o)&&!o._handled&&(o.catch((function(e){return Be(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(e){Be(e,r,i)}return o}function qe(e,t,n){if(U.errorHandler)try{return U.errorHandler.call(null,e,t,n)}catch(t){t!==e&&We(t,null,"config.errorHandler")}We(e,t,n)}function We(e,t,n){if(!q&&!W||"undefined"==typeof console)throw e;console.error(e)}var Ke,Ge=!1,Je=[],Ye=!1;function Xe(){Ye=!1;var e=Je.slice(0);Je.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&oe(Promise)){var Ze=Promise.resolve();Ke=function(){Ze.then(Xe),Z&&setTimeout(P)},Ge=!0}else if(J||"undefined"==typeof MutationObserver||!oe(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Ke=void 0!==n&&oe(n)?function(){n(Xe)}:function(){setTimeout(Xe,0)};else{var Qe=1,et=new MutationObserver(Xe),tt=document.createTextNode(String(Qe));et.observe(tt,{characterData:!0}),Ke=function(){Qe=(Qe+1)%2,tt.data=String(Qe)},Ge=!0}function nt(e,t){var n;if(Je.push((function(){if(e)try{e.call(t)}catch(e){Be(e,t,"nextTick")}else n&&n(t)})),Ye||(Ye=!0,Ke()),!e&&"undefined"!=typeof Promise)return new Promise((function(e){n=e}))}var rt=new ae;function it(e){!function e(t,n){var r,i,o=Array.isArray(t);if(!o&&!c(t)||Object.isFrozen(t)||t instanceof fe)return;if(t.__ob__){var a=t.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(o)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,rt),rt.clear()}var ot=w((function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}}));function at(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return He(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)He(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function st(e,t,n,r,o,s){var c,u,l,d;for(c in e)u=e[c],l=t[c],d=ot(c),i(u)||(i(l)?(i(u.fns)&&(u=e[c]=at(u,s)),a(d.once)&&(u=e[c]=o(d.name,u,d.capture)),n(d.name,u,d.capture,d.passive,d.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)i(e[c])&&r((d=ot(c)).name,t[c],d.capture)}function ct(e,t,n){var r;e instanceof fe&&(e=e.data.hook||(e.data.hook={}));var s=e[t];function c(){n.apply(this,arguments),y(r.fns,c)}i(s)?r=at([c]):o(s.fns)&&a(s.merged)?(r=s).fns.push(c):r=at([s,c]),r.merged=!0,e[t]=r}function ut(e,t,n,r,i){if(o(t)){if(_(t,n))return e[n]=t[n],i||delete t[n],!0;if(_(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function lt(e){return s(e)?[ge(e)]:Array.isArray(e)?function e(t,n){var r,c,u,l,d=[];for(r=0;r<t.length;r++)i(c=t[r])||"boolean"==typeof c||(u=d.length-1,l=d[u],Array.isArray(c)?c.length>0&&(dt((c=e(c,(n||"")+"_"+r))[0])&&dt(l)&&(d[u]=ge(l.text+c[0].text),c.shift()),d.push.apply(d,c)):s(c)?dt(l)?d[u]=ge(l.text+c):""!==c&&d.push(ge(c)):dt(c)&&dt(l)?d[u]=ge(l.text+c.text):(a(t._isVList)&&o(c.tag)&&i(c.key)&&o(n)&&(c.key="__vlist"+n+"_"+r+"__"),d.push(c)));return d}(e):void 0}function dt(e){return o(e)&&o(e.text)&&!1===e.isComment}function ht(e,t){if(e){for(var n=Object.create(null),r=se?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var a=e[o].from,s=t;s;){if(s._provided&&_(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}else 0}}return n}}function pt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(ft)&&delete n[u];return n}function ft(e){return e.isComment&&!e.asyncFactory||" "===e.text}function mt(e){return e.isComment&&e.asyncFactory}function vt(e,t,n){var i,o=Object.keys(t).length>0,a=e?!!e.$stable:!o,s=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&n&&n!==r&&s===n.$key&&!o&&!n.$hasNormal)return n;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=gt(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=yt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),V(i,"$stable",a),V(i,"$key",s),V(i,"$hasNormal",o),i}function gt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({}),t=(e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:lt(e))&&e[0];return e&&(!t||1===e.length&&t.isComment&&!mt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function yt(e,t){return function(){return e[t]}}function bt(e,t){var n,r,i,a,s;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))if(se&&e[Symbol.iterator]){n=[];for(var u=e[Symbol.iterator](),l=u.next();!l.done;)n.push(t(l.value,n.length)),l=u.next()}else for(a=Object.keys(e),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=t(e[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function _t(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=S(S({},r),n)),i=o(n)||("function"==typeof t?t():t)):i=this.$slots[e]||("function"==typeof t?t():t);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function wt(e){return Me(this.$options,"filters",e)||D}function It(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function kt(e,t,n,r,i){var o=U.keyCodes[t]||n;return i&&r&&!U.keyCodes[t]?It(i,r):o?It(o,e):r?E(r)!==t:void 0===e}function Tt(e,t,n,r,i){if(n)if(c(n)){var o;Array.isArray(n)&&(n=R(n));var a=function(a){if("class"===a||"style"===a||g(a))o=e;else{var s=e.attrs&&e.attrs.type;o=r||U.mustUseProp(t,s,a)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=k(a),u=E(a);c in o||u in o||(o[a]=n[a],i&&((e.on||(e.on={}))["update:"+a]=function(e){n[a]=e}))};for(var s in n)a(s)}else;return e}function Ot(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||Ct(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r}function Et(e,t,n){return Ct(e,"__once__"+t+(n?"_"+n:""),!0),e}function Ct(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&At(e[r],t+"_"+r,n);else At(e,t,n)}function At(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function St(e,t){if(t)if(l(t)){var n=e.on=e.on?S({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Rt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Rt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function Pt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Nt(e,t){return"string"==typeof e?t+e:e}function Dt(e){e._o=Et,e._n=m,e._s=f,e._l=bt,e._t=_t,e._q=L,e._i=j,e._m=Ot,e._f=wt,e._k=kt,e._b=Tt,e._v=ge,e._e=ve,e._u=Rt,e._g=St,e._d=Pt,e._p=Nt}function Lt(e,t,n,i,o){var s,c=this,u=o.options;_(i,"_uid")?(s=Object.create(i))._original=i:(s=i,i=i._original);var l=a(u._compiled),d=!l;this.data=e,this.props=t,this.children=n,this.parent=i,this.listeners=e.on||r,this.injections=ht(u.inject,i),this.slots=function(){return c.$slots||vt(e.scopedSlots,c.$slots=pt(n,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return vt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=vt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var o=Vt(s,e,t,n,r,d);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return Vt(s,e,t,n,r,d)}}function jt(e,t,n,r,i){var o=ye(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function xt(e,t){for(var n in t)e[k(n)]=t[n]}Dt(Lt.prototype);var Mt={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Mt.prepatch(n,n)}else{(e.componentInstance=function(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns);return new e.componentOptions.Ctor(n)}(e,Yt)).$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions;!function(e,t,n,i,o){0;var a=i.data.scopedSlots,s=e.$scopedSlots,c=!!(a&&!a.$stable||s!==r&&!s.$stable||a&&e.$scopedSlots.$key!==a.$key||!a&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c);e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i);if(e.$options._renderChildren=o,e.$attrs=i.data.attrs||r,e.$listeners=n||r,t&&e.$options.props){ke(!1);for(var l=e._props,d=e.$options._propKeys||[],h=0;h<d.length;h++){var p=d[h],f=e.$options.props;l[p]=$e(p,f,t,e)}ke(!0),e.$options.propsData=t}n=n||r;var m=e.$options._parentListeners;e.$options._parentListeners=n,Jt(e,n,m),u&&(e.$slots=pt(o,i.context),e.$forceUpdate());0}(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,en(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,nn.push(t)):Qt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,Zt(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);en(t,"deactivated")}}(t,!0):t.$destroy())}},$t=Object.keys(Mt);function Ut(e,t,n,s,u){if(!i(e)){var l=n.$options._base;if(c(e)&&(e=l.extend(e)),"function"==typeof e){var d;if(i(e.cid)&&void 0===(e=function(e,t){if(a(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=Bt;n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n);if(a(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var r=e.owners=[n],s=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(r,n)}));var d=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},h=x((function(n){e.resolved=Ht(n,t),s?r.length=0:d(!0)})),f=x((function(t){o(e.errorComp)&&(e.error=!0,d(!0))})),m=e(h,f);return c(m)&&(p(m)?i(e.resolved)&&m.then(h,f):p(m.component)&&(m.component.then(h,f),o(m.error)&&(e.errorComp=Ht(m.error,t)),o(m.loading)&&(e.loadingComp=Ht(m.loading,t),0===m.delay?e.loading=!0:u=setTimeout((function(){u=null,i(e.resolved)&&i(e.error)&&(e.loading=!0,d(!1))}),m.delay||200)),o(m.timeout)&&(l=setTimeout((function(){l=null,i(e.resolved)&&f(null)}),m.timeout)))),s=!1,e.loading?e.loadingComp:e.resolved}}(d=e,l)))return function(e,t,n,r,i){var o=ve();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(d,t,n,s,u);t=t||{},kn(e),o(t.model)&&function(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var i=t.on||(t.on={}),a=i[r],s=t.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}(e.options,t);var h=function(e,t,n){var r=t.options.props;if(!i(r)){var a={},s=e.attrs,c=e.props;if(o(s)||o(c))for(var u in r){var l=E(u);ut(a,c,u,l,!0)||ut(a,s,u,l,!1)}return a}}(t,e);if(a(e.options.functional))return function(e,t,n,i,a){var s=e.options,c={},u=s.props;if(o(u))for(var l in u)c[l]=$e(l,u,t||r);else o(n.attrs)&&xt(c,n.attrs),o(n.props)&&xt(c,n.props);var d=new Lt(n,c,a,i,e),h=s.render.call(null,d._c,d);if(h instanceof fe)return jt(h,n,d.parent,s,d);if(Array.isArray(h)){for(var p=lt(h)||[],f=new Array(p.length),m=0;m<p.length;m++)f[m]=jt(p[m],n,d.parent,s,d);return f}}(e,h,t,n,s);var f=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var m=t.slot;t={},m&&(t.slot=m)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<$t.length;n++){var r=$t[n],i=t[r],o=Mt[r];i===o||i&&i._merged||(t[r]=i?Ft(o,i):o)}}(t);var v=e.options.name||u;return new fe("vue-component-"+e.cid+(v?"-"+v:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:f,tag:u,children:s},d)}}}function Ft(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function Vt(e,t,n,r,u,l){return(Array.isArray(n)||s(n))&&(u=r,r=n,n=void 0),a(l)&&(u=2),function(e,t,n,r,s){if(o(n)&&o(n.__ob__))return ve();o(n)&&o(n.is)&&(t=n.is);if(!t)return ve();0;Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);2===s?r=lt(r):1===s&&(r=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(r));var u,l;if("string"==typeof t){var d;l=e.$vnode&&e.$vnode.ns||U.getTagNamespace(t),u=U.isReservedTag(t)?new fe(U.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!o(d=Me(e.$options,"components",t))?new fe(t,n,r,void 0,void 0,e):Ut(d,n,e,r,t)}else u=Ut(t,n,e,r);return Array.isArray(u)?u:o(u)?(o(l)&&function e(t,n,r){t.ns=n,"foreignObject"===t.tag&&(n=void 0,r=!0);if(o(t.children))for(var s=0,c=t.children.length;s<c;s++){var u=t.children[s];o(u.tag)&&(i(u.ns)||a(r)&&"svg"!==u.tag)&&e(u,n,r)}}(u,l),o(n)&&function(e){c(e.style)&&it(e.style);c(e.class)&&it(e.class)}(n),u):ve()}(e,t,n,r,u)}var zt,Bt=null;function Ht(e,t){return(e.__esModule||se&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function qt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||mt(n)))return n}}function Wt(e,t){zt.$on(e,t)}function Kt(e,t){zt.$off(e,t)}function Gt(e,t){var n=zt;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Jt(e,t,n){zt=e,st(t,n||{},Wt,Kt,Gt,e),zt=void 0}var Yt=null;function Xt(e){var t=Yt;return Yt=e,function(){Yt=t}}function Zt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Qt(e,t){if(t){if(e._directInactive=!1,Zt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Qt(e.$children[n]);en(e,"activated")}}function en(e,t){he();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)He(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),pe()}var tn=[],nn=[],rn={},on=!1,an=!1,sn=0;var cn=0,un=Date.now;if(q&&!J){var ln=window.performance;ln&&"function"==typeof ln.now&&un()>document.createEvent("Event").timeStamp&&(un=function(){return ln.now()})}function dn(){var e,t;for(cn=un(),an=!0,tn.sort((function(e,t){return e.id-t.id})),sn=0;sn<tn.length;sn++)(e=tn[sn]).before&&e.before(),t=e.id,rn[t]=null,e.run();var n=nn.slice(),r=tn.slice();sn=tn.length=nn.length=0,rn={},on=an=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Qt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&en(r,"updated")}}(r),ie&&U.devtools&&ie.emit("flush")}var hn=0,pn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++hn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ae,this.newDepIds=new ae,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!z.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};pn.prototype.get=function(){var e;he(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Be(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&it(e),pe(),this.cleanupDeps()}return e},pn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},pn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},pn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==rn[t]){if(rn[t]=!0,an){for(var n=tn.length-1;n>sn&&tn[n].id>e.id;)n--;tn.splice(n+1,0,e)}else tn.push(e);on||(on=!0,nt(dn))}}(this)},pn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';He(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},pn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},pn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},pn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var fn={enumerable:!0,configurable:!0,get:P,set:P};function mn(e,t,n){fn.get=function(){return this[t][n]},fn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,fn)}function vn(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&ke(!1);var o=function(o){i.push(o);var a=$e(o,t,n,e);Ee(r,o,a),o in e||mn(e,"_props",o)};for(var a in t)o(a);ke(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?P:C(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;l(t=e._data="function"==typeof t?function(e,t){he();try{return e.call(t,t)}catch(e){return Be(e,t,"data()"),{}}finally{pe()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];0,r&&_(r,o)||(a=void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&mn(e,"_data",o))}var a;Oe(t,!0)}(e):Oe(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=re();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;0,r||(n[i]=new pn(e,a||P,P,gn)),i in e||yn(e,i,o)}}(e,t.computed),t.watch&&t.watch!==ee&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)wn(e,n,r[i]);else wn(e,n,r)}}(e,t.watch)}var gn={lazy:!0};function yn(e,t,n){var r=!re();"function"==typeof n?(fn.get=r?bn(t):_n(n),fn.set=P):(fn.get=n.get?r&&!1!==n.cache?bn(t):_n(n.get):P,fn.set=n.set||P),Object.defineProperty(e,t,fn)}function bn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),le.target&&t.depend(),t.value}}function _n(e){return function(){return e.call(this,this)}}function wn(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var In=0;function kn(e){var t=e.options;if(e.super){var n=kn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&S(e.extendOptions,r),(t=e.options=xe(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function Tn(e){this._init(e)}function On(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name;var a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=xe(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)mn(e.prototype,"_props",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)yn(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach((function(e){a[e]=n[e]})),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=S({},a.options),i[r]=a,a}}function En(e){return e&&(e.Ctor.options.name||e.tag)}function Cn(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!d(e)&&e.test(t)}function An(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=a.name;s&&!t(s)&&Sn(n,o,r,i)}}}function Sn(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,y(n,t)}!function(e){e.prototype._init=function(e){var t=this;t._uid=In++,t._isVue=!0,e&&e._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(t,e):t.$options=xe(kn(t.constructor),e||{},t),t._renderProxy=t,t._self=t,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(t),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Jt(e,t)}(t),function(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=pt(t._renderChildren,i),e.$scopedSlots=r,e._c=function(t,n,r,i){return Vt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Vt(e,t,n,r,i,!0)};var o=n&&n.data;Ee(e,"$attrs",o&&o.attrs||r,null,!0),Ee(e,"$listeners",t._parentListeners||r,null,!0)}(t),en(t,"beforeCreate"),function(e){var t=ht(e.$options.inject,e);t&&(ke(!1),Object.keys(t).forEach((function(n){Ee(e,n,t[n])})),ke(!0))}(t),vn(t),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(t),en(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(Tn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Ce,e.prototype.$delete=Ae,e.prototype.$watch=function(e,t,n){if(l(t))return wn(this,e,t,n);(n=n||{}).user=!0;var r=new pn(this,e,t,n);if(n.immediate){var i='callback for immediate watcher "'+r.expression+'"';he(),He(t,this,[r.value],this,i),pe()}return function(){r.teardown()}}}(Tn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var s=a.length;s--;)if((o=a[s])===t||o.fn===t){a.splice(s,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?A(n):n;for(var r=A(arguments,1),i='event handler for "'+e+'"',o=0,a=n.length;o<a;o++)He(n[o],t,r,t,i)}return t}}(Tn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Xt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){en(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||y(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),en(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(Tn),function(e){Dt(e.prototype),e.prototype.$nextTick=function(e){return nt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=vt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{Bt=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){Be(n,t,"render"),e=t._vnode}finally{Bt=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof fe||(e=ve()),e.parent=i,e}}(Tn);var Rn=[String,RegExp,Array],Pn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Rn,exclude:Rn,max:[String,Number]},methods:{cacheVNode:function(){var e=this.cache,t=this.keys,n=this.vnodeToCache,r=this.keyToCache;if(n){var i=n.tag,o=n.componentInstance,a=n.componentOptions;e[r]={name:En(a),tag:i,componentInstance:o},t.push(r),this.max&&t.length>parseInt(this.max)&&Sn(e,t[0],t,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Sn(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){An(e,(function(e){return Cn(t,e)}))})),this.$watch("exclude",(function(t){An(e,(function(e){return!Cn(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=qt(e),n=t&&t.componentOptions;if(n){var r=En(n),i=this.include,o=this.exclude;if(i&&(!r||!Cn(i,r))||o&&r&&Cn(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,y(s,c),s.push(c)):(this.vnodeToCache=t,this.keyToCache=c),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return U}};Object.defineProperty(e,"config",t),e.util={warn:ce,extend:S,mergeOptions:xe,defineReactive:Ee},e.set=Ce,e.delete=Ae,e.nextTick=nt,e.observable=function(e){return Oe(e),e},e.options=Object.create(null),M.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,S(e.options.components,Pn),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=xe(this.options,e),this}}(e),On(e),function(e){M.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}(e)}(Tn),Object.defineProperty(Tn.prototype,"$isServer",{get:re}),Object.defineProperty(Tn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Tn,"FunctionalRenderContext",{value:Lt}),Tn.version="2.6.14";var Nn=v("style,class"),Dn=v("input,textarea,option,select,progress"),Ln=v("contenteditable,draggable,spellcheck"),jn=v("events,caret,typing,plaintext-only"),xn=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Mn="http://www.w3.org/1999/xlink",$n=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Un=function(e){return $n(e)?e.slice(6,e.length):""},Fn=function(e){return null==e||!1===e};function Vn(e){for(var t=e.data,n=e,r=e;o(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=zn(r.data,t));for(;o(n=n.parent);)n&&n.data&&(t=zn(t,n.data));return function(e,t){if(o(e)||o(t))return Bn(e,Hn(t));return""}(t.staticClass,t.class)}function zn(e,t){return{staticClass:Bn(e.staticClass,t.staticClass),class:o(e.class)?[e.class,t.class]:t.class}}function Bn(e,t){return e?t?e+" "+t:e:t||""}function Hn(e){return Array.isArray(e)?function(e){for(var t,n="",r=0,i=e.length;r<i;r++)o(t=Hn(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):c(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var qn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Wn=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Kn=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Gn=function(e){return Wn(e)||Kn(e)};var Jn=Object.create(null);var Yn=v("text,number,password,search,email,tel,url");var Xn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(e,t){return document.createElementNS(qn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),Zn={create:function(e,t){Qn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Qn(e,!0),Qn(t))},destroy:function(e){Qn(e,!0)}};function Qn(e,t){var n=e.data.ref;if(o(n)){var r=e.context,i=e.componentInstance||e.elm,a=r.$refs;t?Array.isArray(a[n])?y(a[n],i):a[n]===i&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])?a[n].indexOf(i)<0&&a[n].push(i):a[n]=[i]:a[n]=i}}var er=new fe("",{},[]),tr=["create","activate","update","remove","destroy"];function nr(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&function(e,t){if("input"!==e.tag)return!0;var n,r=o(n=e.data)&&o(n=n.attrs)&&n.type,i=o(n=t.data)&&o(n=n.attrs)&&n.type;return r===i||Yn(r)&&Yn(i)}(e,t)||a(e.isAsyncPlaceholder)&&i(t.asyncFactory.error))}function rr(e,t,n){var r,i,a={};for(r=t;r<=n;++r)o(i=e[r].key)&&(a[i]=r);return a}var ir={create:or,update:or,destroy:function(e){or(e,er)}};function or(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===er,a=t===er,s=sr(e.data.directives,e.context),c=sr(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,ur(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(ur(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var d=function(){for(var n=0;n<u.length;n++)ur(u[n],"inserted",t,e)};o?ct(t,"insert",d):d()}l.length&&ct(t,"postpatch",(function(){for(var n=0;n<l.length;n++)ur(l[n],"componentUpdated",t,e)}));if(!o)for(n in s)c[n]||ur(s[n],"unbind",e,e,a)}(e,t)}var ar=Object.create(null);function sr(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=ar),i[cr(r)]=r,r.def=Me(t.$options,"directives",r.name);return i}function cr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function ur(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){Be(r,n.context,"directive "+e.name+" "+t+" hook")}}var lr=[Zn,ir];function dr(e,t){var n=t.componentOptions;if(!(o(n)&&!1===n.Ctor.options.inheritAttrs||i(e.data.attrs)&&i(t.data.attrs))){var r,a,s=t.elm,c=e.data.attrs||{},u=t.data.attrs||{};for(r in o(u.__ob__)&&(u=t.data.attrs=S({},u)),u)a=u[r],c[r]!==a&&hr(s,r,a,t.data.pre);for(r in(J||X)&&u.value!==c.value&&hr(s,"value",u.value),c)i(u[r])&&($n(r)?s.removeAttributeNS(Mn,Un(r)):Ln(r)||s.removeAttribute(r))}}function hr(e,t,n,r){r||e.tagName.indexOf("-")>-1?pr(e,t,n):xn(t)?Fn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Ln(t)?e.setAttribute(t,function(e,t){return Fn(t)||"false"===t?"false":"contenteditable"===e&&jn(t)?t:"true"}(t,n)):$n(t)?Fn(n)?e.removeAttributeNS(Mn,Un(t)):e.setAttributeNS(Mn,t,n):pr(e,t,n)}function pr(e,t,n){if(Fn(n))e.removeAttribute(t);else{if(J&&!Y&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var fr={create:dr,update:dr};function mr(e,t){var n=t.elm,r=t.data,a=e.data;if(!(i(r.staticClass)&&i(r.class)&&(i(a)||i(a.staticClass)&&i(a.class)))){var s=Vn(t),c=n._transitionClasses;o(c)&&(s=Bn(s,Hn(c))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var vr,gr={create:mr,update:mr};function yr(e,t,n){var r=vr;return function i(){var o=t.apply(null,arguments);null!==o&&wr(e,i,n,r)}}var br=Ge&&!(Q&&Number(Q[1])<=53);function _r(e,t,n,r){if(br){var i=cn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}vr.addEventListener(e,t,te?{capture:n,passive:r}:n)}function wr(e,t,n,r){(r||vr).removeEventListener(e,t._wrapper||t,n)}function Ir(e,t){if(!i(e.data.on)||!i(t.data.on)){var n=t.data.on||{},r=e.data.on||{};vr=t.elm,function(e){if(o(e.__r)){var t=J?"change":"input";e[t]=[].concat(e.__r,e[t]||[]),delete e.__r}o(e.__c)&&(e.change=[].concat(e.__c,e.change||[]),delete e.__c)}(n),st(n,r,_r,wr,yr,t.context),vr=void 0}}var kr,Tr={create:Ir,update:Ir};function Or(e,t){if(!i(e.data.domProps)||!i(t.data.domProps)){var n,r,a=t.elm,s=e.data.domProps||{},c=t.data.domProps||{};for(n in o(c.__ob__)&&(c=t.data.domProps=S({},c)),s)n in c||(a[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n&&"PROGRESS"!==a.tagName){a._value=r;var u=i(r)?"":String(r);Er(a,u)&&(a.value=u)}else if("innerHTML"===n&&Kn(a.tagName)&&i(a.innerHTML)){(kr=kr||document.createElement("div")).innerHTML="<svg>"+r+"</svg>";for(var l=kr.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}else if(r!==s[n])try{a[n]=r}catch(e){}}}}function Er(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var n=e.value,r=e._vModifiers;if(o(r)){if(r.number)return m(n)!==m(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}(e,t))}var Cr={create:Or,update:Or},Ar=w((function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach((function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}})),t}));function Sr(e){var t=Rr(e.style);return e.staticStyle?S(e.staticStyle,t):t}function Rr(e){return Array.isArray(e)?R(e):"string"==typeof e?Ar(e):e}var Pr,Nr=/^--/,Dr=/\s*!important$/,Lr=function(e,t,n){if(Nr.test(t))e.style.setProperty(t,n);else if(Dr.test(n))e.style.setProperty(E(t),n.replace(Dr,""),"important");else{var r=xr(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},jr=["Webkit","Moz","ms"],xr=w((function(e){if(Pr=Pr||document.createElement("div").style,"filter"!==(e=k(e))&&e in Pr)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<jr.length;n++){var r=jr[n]+t;if(r in Pr)return r}}));function Mr(e,t){var n=t.data,r=e.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var a,s,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},d=u||l,h=Rr(t.data.style)||{};t.data.normalizedStyle=o(h.__ob__)?S({},h):h;var p=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Sr(i.data))&&S(r,n);(n=Sr(e.data))&&S(r,n);for(var o=e;o=o.parent;)o.data&&(n=Sr(o.data))&&S(r,n);return r}(t,!0);for(s in d)i(p[s])&&Lr(c,s,"");for(s in p)(a=p[s])!==d[s]&&Lr(c,s,null==a?"":a)}}var $r={create:Mr,update:Mr},Ur=/\s+/;function Fr(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ur).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Vr(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ur).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function zr(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&S(t,Br(e.name||"v")),S(t,e),t}return"string"==typeof e?Br(e):void 0}}var Br=w((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Hr=q&&!Y,qr="transition",Wr="transitionend",Kr="animation",Gr="animationend";Hr&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(qr="WebkitTransition",Wr="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Kr="WebkitAnimation",Gr="webkitAnimationEnd"));var Jr=q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Yr(e){Jr((function(){Jr(e)}))}function Xr(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Fr(e,t))}function Zr(e,t){e._transitionClasses&&y(e._transitionClasses,t),Vr(e,t)}function Qr(e,t,n){var r=ti(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s="transition"===i?Wr:Gr,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout((function(){c<a&&u()}),o+1),e.addEventListener(s,l)}var ei=/\b(transform|all)(,|$)/;function ti(e,t){var n,r=window.getComputedStyle(e),i=(r[qr+"Delay"]||"").split(", "),o=(r[qr+"Duration"]||"").split(", "),a=ni(i,o),s=(r[Kr+"Delay"]||"").split(", "),c=(r[Kr+"Duration"]||"").split(", "),u=ni(s,c),l=0,d=0;return"transition"===t?a>0&&(n="transition",l=a,d=o.length):"animation"===t?u>0&&(n="animation",l=u,d=c.length):d=(n=(l=Math.max(a,u))>0?a>u?"transition":"animation":null)?"transition"===n?o.length:c.length:0,{type:n,timeout:l,propCount:d,hasTransform:"transition"===n&&ei.test(r[qr+"Property"])}}function ni(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return ri(t)+ri(e[n])})))}function ri(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ii(e,t){var n=e.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=zr(e.data.transition);if(!i(r)&&!o(n._enterCb)&&1===n.nodeType){for(var a=r.css,s=r.type,u=r.enterClass,l=r.enterToClass,d=r.enterActiveClass,h=r.appearClass,p=r.appearToClass,f=r.appearActiveClass,v=r.beforeEnter,g=r.enter,y=r.afterEnter,b=r.enterCancelled,_=r.beforeAppear,w=r.appear,I=r.afterAppear,k=r.appearCancelled,T=r.duration,O=Yt,E=Yt.$vnode;E&&E.parent;)O=E.context,E=E.parent;var C=!O._isMounted||!e.isRootInsert;if(!C||w||""===w){var A=C&&h?h:u,S=C&&f?f:d,R=C&&p?p:l,P=C&&_||v,N=C&&"function"==typeof w?w:g,D=C&&I||y,L=C&&k||b,j=m(c(T)?T.enter:T);0;var M=!1!==a&&!Y,$=si(N),U=n._enterCb=x((function(){M&&(Zr(n,R),Zr(n,S)),U.cancelled?(M&&Zr(n,A),L&&L(n)):D&&D(n),n._enterCb=null}));e.data.show||ct(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,U)})),P&&P(n),M&&(Xr(n,A),Xr(n,S),Yr((function(){Zr(n,A),U.cancelled||(Xr(n,R),$||(ai(j)?setTimeout(U,j):Qr(n,s,U)))}))),e.data.show&&(t&&t(),N&&N(n,U)),M||$||U()}}}function oi(e,t){var n=e.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=zr(e.data.transition);if(i(r)||1!==n.nodeType)return t();if(!o(n._leaveCb)){var a=r.css,s=r.type,u=r.leaveClass,l=r.leaveToClass,d=r.leaveActiveClass,h=r.beforeLeave,p=r.leave,f=r.afterLeave,v=r.leaveCancelled,g=r.delayLeave,y=r.duration,b=!1!==a&&!Y,_=si(p),w=m(c(y)?y.leave:y);0;var I=n._leaveCb=x((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&(Zr(n,l),Zr(n,d)),I.cancelled?(b&&Zr(n,u),v&&v(n)):(t(),f&&f(n)),n._leaveCb=null}));g?g(k):k()}function k(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),h&&h(n),b&&(Xr(n,u),Xr(n,d),Yr((function(){Zr(n,u),I.cancelled||(Xr(n,l),_||(ai(w)?setTimeout(I,w):Qr(n,s,I)))}))),p&&p(n,I),b||_||I())}}function ai(e){return"number"==typeof e&&!isNaN(e)}function si(e){if(i(e))return!1;var t=e.fns;return o(t)?si(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function ci(e,t){!0!==t.data.show&&ii(t)}var ui=function(e){var t,n,r={},c=e.modules,u=e.nodeOps;for(t=0;t<tr.length;++t)for(r[tr[t]]=[],n=0;n<c.length;++n)o(c[n][tr[t]])&&r[tr[t]].push(c[n][tr[t]]);function l(e){var t=u.parentNode(e);o(t)&&u.removeChild(t,e)}function d(e,t,n,i,s,c,l){if(o(e.elm)&&o(c)&&(e=c[l]=ye(e)),e.isRootInsert=!s,!function(e,t,n,i){var s=e.data;if(o(s)){var c=o(e.componentInstance)&&s.keepAlive;if(o(s=s.hook)&&o(s=s.init)&&s(e,!1),o(e.componentInstance))return h(e,t),p(n,e.elm,i),a(c)&&function(e,t,n,i){var a,s=e;for(;s.componentInstance;)if(s=s.componentInstance._vnode,o(a=s.data)&&o(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](er,s);t.push(s);break}p(n,e.elm,i)}(e,t,n,i),!0}}(e,t,n,i)){var d=e.data,m=e.children,v=e.tag;o(v)?(e.elm=e.ns?u.createElementNS(e.ns,v):u.createElement(v,e),y(e),f(e,m,t),o(d)&&g(e,t),p(n,e.elm,i)):a(e.isComment)?(e.elm=u.createComment(e.text),p(n,e.elm,i)):(e.elm=u.createTextNode(e.text),p(n,e.elm,i))}}function h(e,t){o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,m(e)?(g(e,t),y(e)):(Qn(e),t.push(e))}function p(e,t,n){o(e)&&(o(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function f(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)d(t[r],n,e.elm,null,!0,t,r)}else s(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function m(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return o(e.tag)}function g(e,n){for(var i=0;i<r.create.length;++i)r.create[i](er,e);o(t=e.data.hook)&&(o(t.create)&&t.create(er,e),o(t.insert)&&n.push(e))}function y(e){var t;if(o(t=e.fnScopeId))u.setStyleScope(e.elm,t);else for(var n=e;n;)o(t=n.context)&&o(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent;o(t=Yt)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function b(e,t,n,r,i,o){for(;r<=i;++r)d(n[r],o,e,t,!1,n,r)}function _(e){var t,n,i=e.data;if(o(i))for(o(t=i.hook)&&o(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)_(e.children[n])}function w(e,t,n){for(;t<=n;++t){var r=e[t];o(r)&&(o(r.tag)?(I(r),_(r)):l(r.elm))}}function I(e,t){if(o(t)||o(e.data)){var n,i=r.remove.length+1;for(o(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),o(n=e.componentInstance)&&o(n=n._vnode)&&o(n.data)&&I(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);o(n=e.data.hook)&&o(n=n.remove)?n(e,t):t()}else l(e.elm)}function k(e,t,n,r){for(var i=n;i<r;i++){var a=t[i];if(o(a)&&nr(e,a))return i}}function T(e,t,n,s,c,l){if(e!==t){o(t.elm)&&o(s)&&(t=s[c]=ye(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))o(t.asyncFactory.resolved)?C(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var p,f=t.data;o(f)&&o(p=f.hook)&&o(p=p.prepatch)&&p(e,t);var v=e.children,g=t.children;if(o(f)&&m(t)){for(p=0;p<r.update.length;++p)r.update[p](e,t);o(p=f.hook)&&o(p=p.update)&&p(e,t)}i(t.text)?o(v)&&o(g)?v!==g&&function(e,t,n,r,a){var s,c,l,h=0,p=0,f=t.length-1,m=t[0],v=t[f],g=n.length-1,y=n[0],_=n[g],I=!a;for(0;h<=f&&p<=g;)i(m)?m=t[++h]:i(v)?v=t[--f]:nr(m,y)?(T(m,y,r,n,p),m=t[++h],y=n[++p]):nr(v,_)?(T(v,_,r,n,g),v=t[--f],_=n[--g]):nr(m,_)?(T(m,_,r,n,g),I&&u.insertBefore(e,m.elm,u.nextSibling(v.elm)),m=t[++h],_=n[--g]):nr(v,y)?(T(v,y,r,n,p),I&&u.insertBefore(e,v.elm,m.elm),v=t[--f],y=n[++p]):(i(s)&&(s=rr(t,h,f)),i(c=o(y.key)?s[y.key]:k(y,t,h,f))?d(y,r,e,m.elm,!1,n,p):nr(l=t[c],y)?(T(l,y,r,n,p),t[c]=void 0,I&&u.insertBefore(e,l.elm,m.elm)):d(y,r,e,m.elm,!1,n,p),y=n[++p]);h>f?b(e,i(n[g+1])?null:n[g+1].elm,n,p,g,r):p>g&&w(t,h,f)}(h,v,g,n,l):o(g)?(o(e.text)&&u.setTextContent(h,""),b(h,null,g,0,g.length-1,n)):o(v)?w(v,0,v.length-1):o(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),o(f)&&o(p=f.hook)&&o(p=p.postpatch)&&p(e,t)}}}function O(e,t,n){if(a(n)&&o(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var E=v("attrs,class,staticClass,staticStyle,key");function C(e,t,n,r){var i,s=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&o(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(t,!0),o(i=t.componentInstance)))return h(t,n),!0;if(o(s)){if(o(u))if(e.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,d=e.firstChild,p=0;p<u.length;p++){if(!d||!C(d,u[p],n,r)){l=!1;break}d=d.nextSibling}if(!l||d)return!1}else f(t,u,n);if(o(c)){var m=!1;for(var v in c)if(!E(v)){m=!0,g(t,n);break}!m&&c.class&&it(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,s){if(!i(t)){var c,l=!1,h=[];if(i(e))l=!0,d(t,h);else{var p=o(e.nodeType);if(!p&&nr(e,t))T(e,t,h,null,null,s);else{if(p){if(1===e.nodeType&&e.hasAttribute("data-server-rendered")&&(e.removeAttribute("data-server-rendered"),n=!0),a(n)&&C(e,t,h))return O(t,h,!0),e;c=e,e=new fe(u.tagName(c).toLowerCase(),{},[],void 0,c)}var f=e.elm,v=u.parentNode(f);if(d(t,h,f._leaveCb?null:v,u.nextSibling(f)),o(t.parent))for(var g=t.parent,y=m(t);g;){for(var b=0;b<r.destroy.length;++b)r.destroy[b](g);if(g.elm=t.elm,y){for(var I=0;I<r.create.length;++I)r.create[I](er,g);var k=g.data.hook.insert;if(k.merged)for(var E=1;E<k.fns.length;E++)k.fns[E]()}else Qn(g);g=g.parent}o(v)?w([e],0,0):o(e.tag)&&_(e)}}return O(t,h,l),t.elm}o(e)&&_(e)}}({nodeOps:Xn,modules:[fr,gr,Tr,Cr,$r,q?{create:ci,activate:ci,remove:function(e,t){!0!==e.data.show?oi(e,t):t()}}:{}].concat(lr)});Y&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&gi(e,"input")}));var li={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ct(n,"postpatch",(function(){li.componentUpdated(e,t,n)})):di(e,t,n.context),e._vOptions=[].map.call(e.options,fi)):("textarea"===n.tag||Yn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",mi),e.addEventListener("compositionend",vi),e.addEventListener("change",vi),Y&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){di(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,fi);if(i.some((function(e,t){return!L(e,r[t])})))(e.multiple?t.value.some((function(e){return pi(e,i)})):t.value!==t.oldValue&&pi(t.value,i))&&gi(e,"change")}}};function di(e,t,n){hi(e,t,n),(J||X)&&setTimeout((function(){hi(e,t,n)}),0)}function hi(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=j(r,fi(a))>-1,a.selected!==o&&(a.selected=o);else if(L(fi(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function pi(e,t){return t.every((function(t){return!L(t,e)}))}function fi(e){return"_value"in e?e._value:e.value}function mi(e){e.target.composing=!0}function vi(e){e.target.composing&&(e.target.composing=!1,gi(e.target,"input"))}function gi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function yi(e){return!e.componentInstance||e.data&&e.data.transition?e:yi(e.componentInstance._vnode)}var bi={model:li,show:{bind:function(e,t,n){var r=t.value,i=(n=yi(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,ii(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=yi(n)).data&&n.data.transition?(n.data.show=!0,r?ii(n,(function(){e.style.display=e.__vOriginalDisplay})):oi(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},_i={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function wi(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?wi(qt(t.children)):e}function Ii(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[k(o)]=i[o];return t}function ki(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var Ti=function(e){return e.tag||mt(e)},Oi=function(e){return"show"===e.name},Ei={name:"transition",props:_i,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Ti)).length){0;var r=this.mode;0;var i=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return i;var o=wi(i);if(!o)return i;if(this._leaving)return ki(e,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:s(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var c=(o.data||(o.data={})).transition=Ii(this),u=this._vnode,l=wi(u);if(o.data.directives&&o.data.directives.some(Oi)&&(o.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(o,l)&&!mt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var d=l.data.transition=S({},c);if("out-in"===r)return this._leaving=!0,ct(d,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),ki(e,i);if("in-out"===r){if(mt(o))return u;var h,p=function(){h()};ct(c,"afterEnter",p),ct(c,"enterCancelled",p),ct(d,"delayLeave",(function(e){h=e}))}}return i}}},Ci=S({tag:String,moveClass:String},_i);function Ai(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Si(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ri(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete Ci.mode;var Pi={Transition:Ei,TransitionGroup:{props:Ci,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Xt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Ii(this),s=0;s<i.length;s++){var c=i[s];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a;else;}if(r){for(var u=[],l=[],d=0;d<r.length;d++){var h=r[d];h.data.transition=a,h.data.pos=h.elm.getBoundingClientRect(),n[h.key]?u.push(h):l.push(h)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Ai),e.forEach(Si),e.forEach(Ri),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Xr(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Wr,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Wr,e),n._moveCb=null,Zr(n,t))})}})))},methods:{hasMove:function(e,t){if(!Hr)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Vr(n,e)})),Fr(n,t),n.style.display="none",this.$el.appendChild(n);var r=ti(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Tn.config.mustUseProp=function(e,t,n){return"value"===n&&Dn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Tn.config.isReservedTag=Gn,Tn.config.isReservedAttr=Nn,Tn.config.getTagNamespace=function(e){return Kn(e)?"svg":"math"===e?"math":void 0},Tn.config.isUnknownElement=function(e){if(!q)return!0;if(Gn(e))return!1;if(e=e.toLowerCase(),null!=Jn[e])return Jn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Jn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Jn[e]=/HTMLUnknownElement/.test(t.toString())},S(Tn.options.directives,bi),S(Tn.options.components,Pi),Tn.prototype.__patch__=q?ui:P,Tn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ve),en(e,"beforeMount"),r=function(){e._update(e._render(),n)},new pn(e,r,P,{before:function(){e._isMounted&&!e._isDestroyed&&en(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,en(e,"mounted")),e}(this,e=e&&q?function(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}(e):void 0,t)},q&&setTimeout((function(){U.devtools&&ie&&ie.emit("init",Tn)}),0),t.a=Tn}).call(this,n(9),n(27).setImmediate)},function(e,t,n){"use strict";n(23)},function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));let r,i;const o=new WeakMap,a=new WeakMap,s=new WeakMap,c=new WeakMap,u=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||s.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(f(this),t),p(o.get(this))}:function(...t){return p(e.apply(f(this),t))}:function(t,...n){const r=e.call(f(this),t,...n);return s.set(r,t.sort?t.sort():[t]),p(r)}}function h(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(a.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});a.set(e,t)}(e),t=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,l):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(p(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),u.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=h(e);return t!==e&&(c.set(e,t),u.set(t,e)),t}const f=e=>u.get(e);function m(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=p(a);return r&&a.addEventListener("upgradeneeded",e=>{r(p(a.result),e.oldVersion,e.newVersion,p(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),s.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const v=["get","getKey","getAll","getAllKeys","count"],g=["put","add","delete","clear"],y=new Map;function b(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(y.get(t))return y.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=g.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!v.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return y.set(t,o),o}l=(e=>({...e,get:(t,n,r)=>b(t,n)||e.get(t,n,r),has:(t,n)=>!!b(t,n)||e.has(t,n)}))(l)},function(e,t,n){"use strict";
/*!
  * vue-router v3.5.4
  * (c) 2022 Evan You
  * @license MIT
  */function r(e,t){for(var n in t)e[n]=t[n];return e}var i=/[!'()*]/g,o=function(e){return"%"+e.charCodeAt(0).toString(16)},a=/%2C/g,s=function(e){return encodeURIComponent(e).replace(i,o).replace(a,",")};function c(e){try{return decodeURIComponent(e)}catch(e){0}return e}var u=function(e){return null==e||"object"==typeof e?e:String(e)};function l(e){var t={};return(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return s(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(s(t)):r.push(s(t)+"="+s(e)))})),r.join("&")}return s(t)+"="+s(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var h=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=f(o)}catch(e){}var a={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:g(t,i),matched:e?v(e):[]};return n&&(a.redirectedFrom=g(n,i)),Object.freeze(a)}function f(e){if(Array.isArray(e))return e.map(f);if(e&&"object"==typeof e){var t={};for(var n in e)t[n]=f(e[n]);return t}return e}var m=p(null,{path:"/"});function v(e){for(var t=[];e;)t.unshift(e),e=e.parent;return t}function g(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;return void 0===i&&(i=""),(n||"/")+(t||d)(r)+i}function y(e,t,n){return t===m?e===t:!!t&&(e.path&&t.path?e.path.replace(h,"")===t.path.replace(h,"")&&(n||e.hash===t.hash&&b(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&b(e.query,t.query)&&b(e.params,t.params))))}function b(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n];if(r[i]!==n)return!1;var a=t[n];return null==o||null==a?o===a:"object"==typeof o&&"object"==typeof a?b(o,a):String(o)===String(a)}))}function _(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var a=0;a<o.length;a++)i._isBeingDestroyed||o[a](i)}}}}var w={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,o=t.parent,a=t.data;a.routerView=!0;for(var s=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),d=0,h=!1;o&&o._routerRoot!==o;){var p=o.$vnode?o.$vnode.data:{};p.routerView&&d++,p.keepAlive&&o._directInactive&&o._inactive&&(h=!0),o=o.$parent}if(a.routerViewDepth=d,h){var f=l[c],m=f&&f.component;return m?(f.configProps&&I(m,a,f.route,f.configProps),s(m,a,i)):s()}var v=u.matched[d],g=v&&v.components[c];if(!v||!g)return l[c]=null,s();l[c]={component:g},a.registerRouteInstance=function(e,t){var n=v.instances[c];(t&&n!==e||!t&&n===e)&&(v.instances[c]=t)},(a.hook||(a.hook={})).prepatch=function(e,t){v.instances[c]=t.componentInstance},a.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==v.instances[c]&&(v.instances[c]=e.componentInstance),_(u)};var y=v.props&&v.props[c];return y&&(r(l[c],{route:u,configProps:y}),I(g,a,u,y)),s(g,a,i)}};function I(e,t,n,i){var o=t.props=function(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}(n,i);if(o){o=t.props=r({},o);var a=t.attrs=t.attrs||{};for(var s in o)e.props&&s in e.props||(a[s]=o[s],delete o[s])}}function k(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),a=0;a<o.length;a++){var s=o[a];".."===s?i.pop():"."!==s&&i.push(s)}return""!==i[0]&&i.unshift(""),i.join("/")}function T(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var O=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},E=F,C=N,A=function(e,t){return L(N(e,t),t)},S=L,R=U,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function N(e,t){for(var n,r=[],i=0,o=0,a="",s=t&&t.delimiter||"/";null!=(n=P.exec(e));){var c=n[0],u=n[1],l=n.index;if(a+=e.slice(o,l),o=l+c.length,u)a+=u[1];else{var d=e[o],h=n[2],p=n[3],f=n[4],m=n[5],v=n[6],g=n[7];a&&(r.push(a),a="");var y=null!=h&&null!=d&&d!==h,b="+"===v||"*"===v,_="?"===v||"*"===v,w=n[2]||s,I=f||m;r.push({name:p||i++,prefix:h||"",delimiter:w,optional:_,repeat:b,partial:y,asterisk:!!g,pattern:I?x(I):g?".*":"[^"+j(w)+"]+?"})}}return o<e.length&&(a+=e.substr(o)),a&&r.push(a),r}function D(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function L(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",$(t)));return function(t,r){for(var i="",o=t||{},a=(r||{}).pretty?D:encodeURIComponent,s=0;s<e.length;s++){var c=e[s];if("string"!=typeof c){var u,l=o[c.name];if(null==l){if(c.optional){c.partial&&(i+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(O(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(u=a(l[d]),!n[s].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");i+=(0===d?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?encodeURI(l).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):a(l),!n[s].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');i+=c.prefix+u}}else i+=c}return i}}function j(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function x(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function M(e,t){return e.keys=t,e}function $(e){return e&&e.sensitive?"":"i"}function U(e,t,n){O(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,o="",a=0;a<e.length;a++){var s=e[a];if("string"==typeof s)o+=j(s);else{var c=j(s.prefix),u="(?:"+s.pattern+")";t.push(s),s.repeat&&(u+="(?:"+c+u+")*"),o+=u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")"}}var l=j(n.delimiter||"/"),d=o.slice(-l.length)===l;return r||(o=(d?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&d?"":"(?="+l+"|$)",M(new RegExp("^"+o,$(n)),t)}function F(e,t,n){return O(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return M(e,t)}(e,t):O(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(F(e[i],t,n).source);return M(new RegExp("(?:"+r.join("|")+")",$(n)),t)}(e,t,n):function(e,t,n){return U(N(e,n),t,n)}(e,t,n)}E.parse=C,E.compile=A,E.tokensToFunction=S,E.tokensToRegExp=R;var V=Object.create(null);function z(e,t,n){t=t||{};try{var r=V[e]||(V[e]=E.compile(e));return"string"==typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(e){return""}finally{delete t[0]}}function B(e,t,n,i){var o="string"==typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){var a=(o=r({},e)).params;return a&&"object"==typeof a&&(o.params=r({},a)),o}if(!o.path&&o.params&&t){(o=r({},o))._normalized=!0;var s=r(r({},t.params),o.params);if(t.name)o.name=t.name,o.params=s;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;o.path=z(c,s,t.path)}else 0;return o}var d=function(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}(o.path||""),h=t&&t.path||"/",p=d.path?k(d.path,h,n||o.append):h,f=function(e,t,n){void 0===t&&(t={});var r,i=n||l;try{r=i(e||"")}catch(e){r={}}for(var o in t){var a=t[o];r[o]=Array.isArray(a)?a.map(u):u(a)}return r}(d.query,o.query,i&&i.options.parseQuery),m=o.hash||d.hash;return m&&"#"!==m.charAt(0)&&(m="#"+m),{_normalized:!0,path:p,query:f,hash:m}}var H,q=function(){},W={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),a=o.location,s=o.route,c=o.href,u={},l=n.options.linkActiveClass,d=n.options.linkExactActiveClass,f=null==l?"router-link-active":l,m=null==d?"router-link-exact-active":d,v=null==this.activeClass?f:this.activeClass,g=null==this.exactActiveClass?m:this.exactActiveClass,b=s.redirectedFrom?p(null,B(s.redirectedFrom),null,n):s;u[g]=y(i,b,this.exactPath),u[v]=this.exact||this.exactPath?u[g]:function(e,t){return 0===e.path.replace(h,"/").indexOf(t.path.replace(h,"/"))&&(!t.hash||e.hash===t.hash)&&function(e,t){for(var n in t)if(!(n in e))return!1;return!0}(e.query,t.query)}(i,b);var _=u[g]?this.ariaCurrentValue:null,w=function(e){K(e)&&(t.replace?n.replace(a,q):n.push(a,q))},I={click:K};Array.isArray(this.event)?this.event.forEach((function(e){I[e]=w})):I[this.event]=w;var k={class:u},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:s,navigate:w,isActive:u[v],isExactActive:u[g]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?e():e("span",{},T)}if("a"===this.tag)k.on=I,k.attrs={href:c,"aria-current":_};else{var O=function e(t){var n;if(t)for(var r=0;r<t.length;r++){if("a"===(n=t[r]).tag)return n;if(n.children&&(n=e(n.children)))return n}}(this.$slots.default);if(O){O.isStatic=!1;var E=O.data=r({},O.data);for(var C in E.on=E.on||{},E.on){var A=E.on[C];C in I&&(E.on[C]=Array.isArray(A)?A:[A])}for(var S in I)S in E.on?E.on[S].push(I[S]):E.on[S]=w;var R=O.data.attrs=r({},O.data.attrs);R.href=c,R["aria-current"]=_}else k.on=I}return e(this.tag,k,this.$slots.default)}};function K(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}var G="undefined"!=typeof window;function J(e,t,n,r,i){var o=t||[],a=n||Object.create(null),s=r||Object.create(null);e.forEach((function(e){!function e(t,n,r,i,o,a){var s=i.path,c=i.name;0;var u=i.pathToRegexpOptions||{},l=function(e,t,n){n||(e=e.replace(/\/$/,""));if("/"===e[0])return e;if(null==t)return e;return T(t.path+"/"+e)}(s,o,u.strict);"boolean"==typeof i.caseSensitive&&(u.sensitive=i.caseSensitive);var d={path:l,regex:Y(l,u),components:i.components||{default:i.component},alias:i.alias?"string"==typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:c,parent:o,matchAs:a,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};i.children&&i.children.forEach((function(i){var o=a?T(a+"/"+i.path):void 0;e(t,n,r,i,d,o)}));n[d.path]||(t.push(d.path),n[d.path]=d);if(void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],p=0;p<h.length;++p){0;var f={path:h[p],children:i.children};e(t,n,r,f,o,d.path||"/")}c&&(r[c]||(r[c]=d))}(o,a,s,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:a,nameMap:s}}function Y(e,t){return E(e,[],t)}function X(e,t){var n=J(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function a(e,n,a){var s=B(e,n,!1,t),u=s.name;if(u){var l=o[u];if(!l)return c(null,s);var d=l.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!=typeof s.params&&(s.params={}),n&&"object"==typeof n.params)for(var h in n.params)!(h in s.params)&&d.indexOf(h)>-1&&(s.params[h]=n.params[h]);return s.path=z(l.path,s.params),c(l,s,a)}if(s.path){s.params={};for(var p=0;p<r.length;p++){var f=r[p],m=i[f];if(Z(m.regex,s.path,s.params))return c(m,s,a)}}return c(null,s)}function s(e,n){var r=e.redirect,i="function"==typeof r?r(p(e,n,null,t)):r;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return c(null,n);var s=i,u=s.name,l=s.path,d=n.query,h=n.hash,f=n.params;if(d=s.hasOwnProperty("query")?s.query:d,h=s.hasOwnProperty("hash")?s.hash:h,f=s.hasOwnProperty("params")?s.params:f,u){o[u];return a({_normalized:!0,name:u,query:d,hash:h,params:f},void 0,n)}if(l){var m=function(e,t){return k(e,t.parent?t.parent.path:"/",!0)}(l,e);return a({_normalized:!0,path:z(m,f),query:d,hash:h},void 0,n)}return c(null,n)}function c(e,n,r){return e&&e.redirect?s(e,r||n):e&&e.matchAs?function(e,t,n){var r=a({_normalized:!0,path:z(n,t.params)});if(r){var i=r.matched,o=i[i.length-1];return t.params=r.params,c(o,t)}return c(null,t)}(0,n,e.matchAs):p(e,n,r,t)}return{match:a,addRoute:function(e,t){var n="object"!=typeof e?o[e]:void 0;J([t||e],r,i,o,n),n&&n.alias.length&&J(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)},getRoutes:function(){return r.map((function(e){return i[e]}))},addRoutes:function(e){J(e,r,i,o)}}}function Z(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var a=e.keys[i-1];a&&(n[a.name||"pathMatch"]="string"==typeof r[i]?c(r[i]):r[i])}return!0}var Q=G&&window.performance&&window.performance.now?window.performance:Date;function ee(){return Q.now().toFixed(3)}var te=ee();function ne(){return te}function re(e){return te=e}var ie=Object.create(null);function oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=ne(),window.history.replaceState(n,"",t),window.addEventListener("popstate",ce),function(){window.removeEventListener("popstate",ce)}}function ae(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=function(){var e=ne();if(e)return ie[e]}(),a=i.call(e,t,n,r?o:null);a&&("function"==typeof a.then?a.then((function(e){pe(e,o)})).catch((function(e){0})):pe(a,o))}))}}function se(){var e=ne();e&&(ie[e]={x:window.pageXOffset,y:window.pageYOffset})}function ce(e){se(),e.state&&e.state.key&&re(e.state.key)}function ue(e){return de(e.x)||de(e.y)}function le(e){return{x:de(e.x)?e.x:window.pageXOffset,y:de(e.y)?e.y:window.pageYOffset}}function de(e){return"number"==typeof e}var he=/^#\d/;function pe(e,t){var n,r="object"==typeof e;if(r&&"string"==typeof e.selector){var i=he.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(i){var o=e.offset&&"object"==typeof e.offset?e.offset:{};t=function(e,t){var n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{x:r.left-n.left-t.x,y:r.top-n.top-t.y}}(i,o={x:de((n=o).x)?n.x:0,y:de(n.y)?n.y:0})}else ue(e)&&(t=le(e))}else r&&ue(e)&&(t=le(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var fe,me=G&&((-1===(fe=window.navigator.userAgent).indexOf("Android 2.")&&-1===fe.indexOf("Android 4.0")||-1===fe.indexOf("Mobile Safari")||-1!==fe.indexOf("Chrome")||-1!==fe.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function ve(e,t){se();var n=window.history;try{if(t){var i=r({},n.state);i.key=ne(),n.replaceState(i,"",e)}else n.pushState({key:re(ee())},"",e)}catch(n){window.location[t?"replace":"assign"](e)}}function ge(e){ve(e,!0)}function ye(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var be={redirected:2,aborted:4,cancelled:8,duplicated:16};function _e(e,t){return Ie(e,t,be.redirected,'Redirected when going from "'+e.fullPath+'" to "'+function(e){if("string"==typeof e)return e;if("path"in e)return e.path;var t={};return ke.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}(t)+'" via a navigation guard.')}function we(e,t){return Ie(e,t,be.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Ie(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var ke=["params","query","hash"];function Te(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Oe(e,t){return Te(e)&&e._isRouter&&(null==t||e.type===t)}function Ee(e){return function(t,n,r){var i=!1,o=0,a=null;Ce(e,(function(e,t,n,s){if("function"==typeof e&&void 0===e.cid){i=!0,o++;var c,u=Re((function(t){var i;((i=t).__esModule||Se&&"Module"===i[Symbol.toStringTag])&&(t=t.default),e.resolved="function"==typeof t?t:H.extend(t),n.components[s]=t,--o<=0&&r()})),l=Re((function(e){var t="Failed to resolve async component "+s+": "+e;a||(a=Te(e)?e:new Error(t),r(a))}));try{c=e(u,l)}catch(e){l(e)}if(c)if("function"==typeof c.then)c.then(u,l);else{var d=c.component;d&&"function"==typeof d.then&&d.then(u,l)}}})),i||r()}}function Ce(e,t){return Ae(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Ae(e){return Array.prototype.concat.apply([],e)}var Se="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Re(e){var t=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var Pe=function(e,t){this.router=e,this.base=function(e){if(!e)if(G){var t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else e="/";"/"!==e.charAt(0)&&(e="/"+e);return e.replace(/\/$/,"")}(t),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function Ne(e,t,n,r){var i=Ce(e,(function(e,r,i,o){var a=function(e,t){"function"!=typeof e&&(e=H.extend(e));return e.options[t]}(e,t);if(a)return Array.isArray(a)?a.map((function(e){return n(e,r,i,o)})):n(a,r,i,o)}));return Ae(r?i.reverse():i)}function De(e,t){if(t)return function(){return e.apply(t,arguments)}}Pe.prototype.listen=function(e){this.cb=e},Pe.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},Pe.prototype.onError=function(e){this.errorCbs.push(e)},Pe.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(e){throw this.errorCbs.forEach((function(t){t(e)})),e}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(Oe(e,be.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},Pe.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o,a,s=function(e){!Oe(e)&&Te(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},c=e.matched.length-1,u=i.matched.length-1;if(y(e,i)&&c===u&&e.matched[c]===i.matched[u])return this.ensureURL(),e.hash&&ae(this.router,i,e,!1),s(((a=Ie(o=i,e,be.duplicated,'Avoided redundant navigation to current location: "'+o.fullPath+'".')).name="NavigationDuplicated",a));var l=function(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r&&e[n]===t[n];n++);return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}(this.current.matched,e.matched),d=l.updated,h=l.deactivated,p=l.activated,f=[].concat(function(e){return Ne(e,"beforeRouteLeave",De,!0)}(h),this.router.beforeHooks,function(e){return Ne(e,"beforeRouteUpdate",De)}(d),p.map((function(e){return e.beforeEnter})),Ee(p)),m=function(t,n){if(r.pending!==e)return s(we(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),s(function(e,t){return Ie(e,t,be.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}(i,e))):Te(t)?(r.ensureURL(!0),s(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(s(_e(i,e)),"object"==typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(e){s(e)}};ye(f,m,(function(){ye(function(e){return Ne(e,"beforeRouteEnter",(function(e,t,n,r){return function(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"==typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}(e,n,r)}))}(p).concat(r.router.resolveHooks),m,(function(){if(r.pending!==e)return s(we(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){_(e)}))}))}))},Pe.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},Pe.prototype.setupListeners=function(){},Pe.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=m,this.pending=null};var Le=function(e){function t(t,n){e.call(this,t,n),this._startLocation=je(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=me&&n;r&&this.listeners.push(oe());var i=function(){var n=e.current,i=je(e.base);e.current===m&&i===e._startLocation||e.transitionTo(i,(function(e){r&&ae(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){ve(T(r.base+e.fullPath)),ae(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){ge(T(r.base+e.fullPath)),ae(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(je(this.base)!==this.current.fullPath){var t=T(this.base+this.current.fullPath);e?ve(t):ge(t)}},t.prototype.getCurrentLocation=function(){return je(this.base)},t}(Pe);function je(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(T(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var xe=function(e){function t(t,n,r){e.call(this,t,n),r&&function(e){var t=je(e);if(!/^\/#/.test(t))return window.location.replace(T(e+"/#"+t)),!0}(this.base)||Me()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router.options.scrollBehavior,n=me&&t;n&&this.listeners.push(oe());var r=function(){var t=e.current;Me()&&e.transitionTo($e(),(function(r){n&&ae(e.router,r,t,!0),me||Ve(r.fullPath)}))},i=me?"popstate":"hashchange";window.addEventListener(i,r),this.listeners.push((function(){window.removeEventListener(i,r)}))}},t.prototype.push=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){Fe(e.fullPath),ae(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this.current;this.transitionTo(e,(function(e){Ve(e.fullPath),ae(r.router,e,i,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;$e()!==t&&(e?Fe(t):Ve(t))},t.prototype.getCurrentLocation=function(){return $e()},t}(Pe);function Me(){var e=$e();return"/"===e.charAt(0)||(Ve("/"+e),!1)}function $e(){var e=window.location.href,t=e.indexOf("#");return t<0?"":e=e.slice(t+1)}function Ue(e){var t=window.location.href,n=t.indexOf("#");return(n>=0?t.slice(0,n):t)+"#"+e}function Fe(e){me?ve(Ue(e)):window.location.hash=e}function Ve(e){me?ge(Ue(e)):window.location.replace(Ue(e))}var ze=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){Oe(e,be.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(Pe),Be=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=X(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!me&&!1!==e.fallback,this.fallback&&(t="hash"),G||(t="abstract"),this.mode=t,t){case"history":this.history=new Le(this,e.base);break;case"hash":this.history=new xe(this,e.base,this.fallback);break;case"abstract":this.history=new ze(this,e.base);break;default:0}},He={currentRoute:{configurable:!0}};function qe(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}Be.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},He.currentRoute.get=function(){return this.history&&this.history.current},Be.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof Le||n instanceof xe){var r=function(e){n.setupListeners(),function(e){var r=n.current,i=t.options.scrollBehavior;me&&i&&"fullPath"in e&&ae(t,e,r,!1)}(e)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},Be.prototype.beforeEach=function(e){return qe(this.beforeHooks,e)},Be.prototype.beforeResolve=function(e){return qe(this.resolveHooks,e)},Be.prototype.afterEach=function(e){return qe(this.afterHooks,e)},Be.prototype.onReady=function(e,t){this.history.onReady(e,t)},Be.prototype.onError=function(e){this.history.onError(e)},Be.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!=typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},Be.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!=typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},Be.prototype.go=function(e){this.history.go(e)},Be.prototype.back=function(){this.go(-1)},Be.prototype.forward=function(){this.go(1)},Be.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},Be.prototype.resolve=function(e,t,n){var r=B(e,t=t||this.history.current,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath;return{location:r,route:i,href:function(e,t,n){var r="hash"===n?"#"+t:t;return e?T(e+"/"+r):r}(this.history.base,o,this.mode),normalizedTo:r,resolved:i}},Be.prototype.getRoutes=function(){return this.matcher.getRoutes()},Be.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Be.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Be.prototype,He),Be.install=function e(t){if(!e.installed||H!==t){e.installed=!0,H=t;var n=function(e){return void 0!==e},r=function(e,t){var r=e.$options._parentVnode;n(r)&&n(r=r.data)&&n(r=r.registerRouteInstance)&&r(e,t)};t.mixin({beforeCreate:function(){n(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",w),t.component("RouterLink",W);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}},Be.version="3.5.4",Be.isNavigationFailure=Oe,Be.NavigationFailureType=be,Be.START_LOCATION=m,G&&window.Vue&&window.Vue.use(Be),t.a=Be},function(e,t,n){"use strict";var r=n(2);
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
Object(r.registerVersion)("firebase","9.8.1","app")},,function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=s(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||l||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(2),i=n(4),o=n(0),a=n(3),s=n(12);const c={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},u=new o.b("installations","Installations",c);function l(e){return e instanceof o.c&&e.code.includes("request-failed")}
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
 */function d({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function h(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function p(e,t){const n=(await t.json()).error;return u.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function f({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function m(e,{refreshToken:t}){const n=f(e);return n.append("Authorization",function(e){return"FIS_v2 "+e}
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
 */(t)),n}async function v(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function g(e){return new Promise(t=>{setTimeout(t,e)})}
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
const y=/^[cdef][\w-]{21}$/;function b(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
 */(e);return y.test(t)?t:""}catch(e){return""}}function _(e){return`${e.appName}!${e.appId}`}
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
 */const w=new Map;function I(e,t){const n=_(e);k(n,t),function(e,t){const n=O();n&&n.postMessage({key:e,fid:t});E()}(n,t)}function k(e,t){const n=w.get(e);if(n)for(const e of n)e(t)}let T=null;function O(){return!T&&"BroadcastChannel"in self&&(T=new BroadcastChannel("[Firebase] FID Change"),T.onmessage=e=>{k(e.data.key,e.data.fid)}),T}function E(){0===w.size&&T&&(T.close(),T=null)}
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
 */const C="firebase-installations-store";let A=null;function S(){return A||(A=Object(s.a)("firebase-installations-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(C)}}})),A}async function R(e,t){const n=_(e),r=(await S()).transaction(C,"readwrite"),i=r.objectStore(C),o=await i.get(n);return await i.put(t,n),await r.done,o&&o.fid===t.fid||I(e,t.fid),t}async function P(e){const t=_(e),n=(await S()).transaction(C,"readwrite");await n.objectStore(C).delete(t),await n.done}async function N(e,t){const n=_(e),r=(await S()).transaction(C,"readwrite"),i=r.objectStore(C),o=await i.get(n),a=t(o);return void 0===a?await i.delete(n):await i.put(a,n),await r.done,!a||o&&o.fid===a.fid||I(e,a.fid),a}
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
 */async function D(e){let t;const n=await N(e.appConfig,n=>{const r=function(e){return x(e||{fid:b(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(u.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=d(e),i=f(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.5.9"},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await v(()=>fetch(r,s));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:h(e.authToken)}}throw await p("Create Installation",c)}(e,t);return R(e.appConfig,n)}catch(n){throw l(n)&&409===n.customData.serverCode?await P(e.appConfig):await R(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:L(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function L(e){let t=await j(e.appConfig);for(;1===t.registrationStatus;)await g(100),t=await j(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await D(e);return n||t}return t}function j(e){return N(e,e=>{if(!e)throw u.create("installation-not-found");return x(e)})}function x(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function M({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${d(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=m(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={installation:{sdkVersion:"w:0.5.9",appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await v(()=>fetch(r,s));if(c.ok){return h(await c.json())}throw await p("Generate Auth Token",c)}async function $(e,t=!1){let n;const r=await N(e.appConfig,r=>{if(!F(r))throw u.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await U(e.appConfig);for(;1===n.authToken.requestStatus;)await g(100),n=await U(e.appConfig);const r=n.authToken;return 0===r.requestStatus?$(e,t):r}(e,t),r;{if(!navigator.onLine)throw u.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await M(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await R(e.appConfig,r),n}catch(n){if(!l(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await R(e.appConfig,n)}else await P(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function U(e){return N(e,e=>{if(!F(e))throw u.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */})}function F(e){return void 0!==e&&2===e.registrationStatus}
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
async function V(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await D(e);t&&await t}
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
 */(n);return(await $(n,t)).token}function z(e){return u.create("missing-app-config-values",{valueName:e})}
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
 */const B=e=>{const t=e.getProvider("app").getImmediate();return{app:t,appConfig:
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
function(e){if(!e||!e.options)throw z("App Configuration");if(!e.name)throw z("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw z(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),heartbeatServiceProvider:Object(r._getProvider)(t,"heartbeat"),_delete:()=>Promise.resolve()}},H=e=>{const t=e.getProvider("app").getImmediate(),n=Object(r._getProvider)(t,"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await D(t);return r?r.catch(console.error):$(t).catch(console.error),n.fid}(n),getToken:e=>V(n,e)}};Object(r._registerComponent)(new a.a("installations",B,"PUBLIC")),Object(r._registerComponent)(new a.a("installations-internal",H,"PRIVATE")),Object(r.registerVersion)("@firebase/installations","0.5.9"),Object(r.registerVersion)("@firebase/installations","0.5.9","esm2017");
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
const q="https://www.googletagmanager.com/gtag/js",W=new i.b("@firebase/analytics");
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
function K(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function G(e,t,n,r){return async function(i,o,a){try{"event"===i?await async function(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await K(n);for(const n of e){const e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(e){W.error(e)}}(e,t,n,o,a):"config"===i?await async function(e,t,n,r,i,o){const a=r[i];try{if(a)await t[a];else{const e=(await K(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){W.error(e)}e("config",i,o)}(e,t,n,r,o,a):e("set",o)}catch(e){W.error(e)}}}
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
const J={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Y=new o.b("analytics","Analytics",J);const X=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Z(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Q(e,t=X,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw Y.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw Y.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ee;return setTimeout(async()=>{c.abort()},void 0!==n?n:6e4),async function e(t,{throttleEndTimeMillis:n,backoffCount:r},i,a=X){const{appId:s,measurementId:c}=t;try{await function(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Y.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(i,n)}catch(e){if(c)return W.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+c+` provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:c};throw e}try{const e=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Z(r)},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(o,i);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Y.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(t);return a.deleteThrottleMetadata(s),e}catch(n){if(!function(e){if(!(e instanceof o.c&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(n)){if(a.deleteThrottleMetadata(s),c)return W.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+c+` provided in the "measurementId" field in the local Firebase config. [${n.message}]`),{appId:s,measurementId:c};throw n}const u=503===Number(n.customData.httpStatus)?Object(o.g)(r,a.intervalMillis,30):Object(o.g)(r,a.intervalMillis),l={throttleEndTimeMillis:Date.now()+u,backoffCount:r+1};return a.setThrottleMetadata(s,l),W.debug(`Calling attemptFetch again in ${u} millis`),e(t,l,i,a)}}({appId:r,apiKey:i,measurementId:a},s,c,t)}class ee{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}
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
 */async function te(e,t,n,r,i,a,s){var c;const u=Q(e);u.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&W.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>W.error(e)),t.push(u);const l=async function(){if(!Object(o.s)())return W.warn(Y.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Object(o.y)()}catch(e){return W.warn(Y.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}().then(e=>e?r.getId():void 0),[d,h]=await Promise.all([u,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(q))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${q}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(a,d.measurementId),i("js",new Date);const p=null!==(c=null==s?void 0:s.config)&&void 0!==c?c:{};return p.origin="firebase",p.update=!0,null!=h&&(p.firebase_id=h),i("config",d.measurementId,p),d.measurementId}
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
 */class ne{constructor(e){this.app=e}_delete(){return delete re[this.app.options.appId],Promise.resolve()}}let re={},ie=[];const oe={};let ae,se,ce="dataLayer",ue="gtag",le=!1;function de(e,t,n){!function(){const e=[];if(Object(o.p)()&&e.push("This is a browser extension environment."),Object(o.d)()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=Y.create("invalid-analytics-context",{errorInfo:t});W.warn(n.message)}}();const r=e.options.appId;if(!r)throw Y.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Y.create("no-api-key");W.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+e.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=re[r])throw Y.create("already-exists",{id:r});if(!le){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(ce);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(o=window[i]),window[i]=G(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}(re,ie,oe,ce,ue);se=e,ae=t,le=!0}re[r]=te(e,ie,oe,t,ae,ce,n);return new ne(e)}
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
 */function he(e,t,n,r){e=Object(o.m)(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(se,re[e.app.options.appId],t,n,r).catch(e=>W.error(e))}Object(r._registerComponent)(new a.a("analytics",(e,{options:t})=>de(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),Object(r._registerComponent)(new a.a("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,r)=>he(t,e,n,r)}}catch(e){throw Y.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Object(r.registerVersion)("@firebase/analytics","0.7.9"),Object(r.registerVersion)("@firebase/analytics","0.7.9","esm2017")},,,,,,function(e,t,n){"use strict";(function(e){var t=n(6),r=n(1),i=n(3),o=n(0);function a(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function s(e=Object(o.n)()){return!("file:"!==a()&&"ionic:"!==a()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function c(e=Object(o.n)()){return Object(o.r)()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=Object(o.n)()){return/Edge\/\d+/.test(e)}(e)}function u(){try{const e=self.localStorage,t=r.s();if(e)return e.setItem(t,"1"),e.removeItem(t),!c()||Object(o.s)()}catch(e){return l()&&Object(o.s)()}return!1}function l(){return void 0!==e&&"WorkerGlobalScope"in e&&"importScripts"in e}function d(){return("http:"===a()||"https:"===a()||Object(o.p)()||s())&&!(Object(o.v)()||Object(o.u)())&&u()&&!l()}function h(){return s()&&"undefined"!=typeof document}
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
const p={LOCAL:"local",NONE:"none",SESSION:"session"},f=r.p;async function m(e){await e._initializationPromise;const t=v(),n=r.w("persistence",e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function v(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
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
 */const g=r.p;class y{constructor(){this.browserResolver=r.t(r.A),this.cordovaResolver=r.t(r.F),this.underlyingResolver=null,this._redirectPersistence=r.B,this._completeRedirectFn=r.u,this._overrideRedirectResult=r.v}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return h()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return g(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!h()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},1e3);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
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
 */function b(e){return e.unwrap()}function _(e){const{_tokenResponse:t}=e instanceof o.c?e.customData:e;if(!t)return null;if(!(e instanceof o.c)&&"temporaryProof"in t&&"phoneNumber"in t)return r.i.credentialFromResult(e);const n=t.providerId;if(!n||n===r.k.PASSWORD)return null;let i;switch(n){case r.k.GOOGLE:i=r.f;break;case r.k.FACEBOOK:i=r.d;break;case r.k.GITHUB:i=r.e;break;case r.k.TWITTER:i=r.o;break;default:const{oauthIdToken:e,oauthAccessToken:o,oauthTokenSecret:a,pendingToken:s,nonce:c}=t;return o||a||e||s?s?n.startsWith("saml.")?r.m._create(n,s):r.g._fromParams({providerId:n,signInMethod:n,pendingToken:s,idToken:e,accessToken:o}):new r.h(n).credential({idToken:e,accessToken:o,rawNonce:c}):null}return e instanceof o.c?i.credentialFromError(e):i.credentialFromResult(e)}function w(e,t){return t.catch(t=>{throw t instanceof o.c&&function(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){t.resolver=new k(e,r.K(e,t))}else if(i){const e=_(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(i=e,_(i)),additionalUserInfo:r.J(e),user:T.getOrCreate(n)};
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
var i})}async function I(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>w(e,n.confirm(t))}}class k{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return w(b(this.auth),this.resolver.resolveSignIn(e))}}
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
 */class T{constructor(e){this._delegate=e,this.multiFactor=r.T(e)}static getOrCreate(e){return T.USER_MAP.has(e)||T.USER_MAP.set(e,new T(e)),T.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return w(this.auth,r.P(this._delegate,e))}async linkWithPhoneNumber(e,t){return I(this.auth,r.Q(this._delegate,e,t))}async linkWithPopup(e){return w(this.auth,r.R(this._delegate,e,y))}async linkWithRedirect(e){return await m(r.q(this.auth)),r.S(this._delegate,e,y)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return w(this.auth,r.U(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return I(this.auth,r.V(this._delegate,e,t))}reauthenticateWithPopup(e){return w(this.auth,r.W(this._delegate,e,y))}async reauthenticateWithRedirect(e){return await m(r.q(this.auth)),r.X(this._delegate,e,y)}sendEmailVerification(e){return r.Y(this._delegate,e)}async unlink(e){return await r.jb(this._delegate,e),this}updateEmail(e){return r.kb(this._delegate,e)}updatePassword(e){return r.lb(this._delegate,e)}updatePhoneNumber(e){return r.mb(this._delegate,e)}updateProfile(e){return r.nb(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r.ob(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}T.USER_MAP=new WeakMap;
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
const O=r.p;class E{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;O(n,"invalid-api-key",{appName:e.name}),O(n,"invalid-api-key",{appName:e.name});const i="undefined"!=typeof window?y:void 0;this._delegate=t.initialize({options:{persistence:A(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r.H),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?T.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r.E(this._delegate,e,t)}applyActionCode(e){return r.y(this._delegate,e)}checkActionCode(e){return r.C(this._delegate,e)}confirmPasswordReset(e,t){return r.D(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return w(this._delegate,r.G(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r.I(this._delegate,e)}isSignInWithEmailLink(e){return r.O(this._delegate,e)}async getRedirectResult(){O(d(),this._delegate,"operation-not-supported-in-this-environment");const e=await r.L(this._delegate,y);return e?w(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r.x(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:o}=C(e,t,n);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:o}=C(e,t,n);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return r.ab(this._delegate,e,t)}sendPasswordResetEmail(e,t){return r.Z(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){f(Object.values(p).includes(t),e,"invalid-persistence-type"),Object(o.v)()?f(t!==p.SESSION,e,"unsupported-persistence-type"):Object(o.u)()?f(t===p.NONE,e,"unsupported-persistence-type"):l()?f(t===p.NONE||t===p.LOCAL&&Object(o.s)(),e,"unsupported-persistence-type"):f(t===p.NONE||u(),e,"unsupported-persistence-type")}(this._delegate,e),e){case p.SESSION:t=r.B;break;case p.LOCAL:t=await r.t(r.N)._isAvailable()?r.N:r.z;break;case p.NONE:t=r.M;break;default:return r.r("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return w(this._delegate,r.bb(this._delegate))}signInWithCredential(e){return w(this._delegate,r.cb(this._delegate,e))}signInWithCustomToken(e){return w(this._delegate,r.db(this._delegate,e))}signInWithEmailAndPassword(e,t){return w(this._delegate,r.eb(this._delegate,e,t))}signInWithEmailLink(e,t){return w(this._delegate,r.fb(this._delegate,e,t))}signInWithPhoneNumber(e,t){return I(this._delegate,r.gb(this._delegate,e,t))}async signInWithPopup(e){return O(d(),this._delegate,"operation-not-supported-in-this-environment"),w(this._delegate,r.hb(this._delegate,e,y))}async signInWithRedirect(e){return O(d(),this._delegate,"operation-not-supported-in-this-environment"),await m(this._delegate),r.ib(this._delegate,e,y)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r.pb(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function C(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const i=r;return{next:e=>i(e&&T.getOrCreate(e)),error:t,complete:n}}function A(e,t){const n=function(e,t){const n=v();if(!n)return[];const i=r.w("persistence",e,t);switch(n.getItem(i)){case p.NONE:return[r.M];case p.LOCAL:return[r.N,r.B];case p.SESSION:return[r.B];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(r.N)||n.push(r.N),"undefined"!=typeof window)for(const e of[r.z,r.B])n.includes(e)||n.push(e);return n.includes(r.M)||n.push(r.M),n}
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
 */E.Persistence=p;class S{constructor(){this.providerId="phone",this._delegate=new r.i(b(t.a.auth()))}static credential(e,t){return r.i.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}S.PHONE_SIGN_IN_METHOD=r.i.PHONE_SIGN_IN_METHOD,S.PROVIDER_ID=r.i.PROVIDER_ID;
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
const R=r.p;class P{constructor(e,n,i=t.a.app()){var o;R(null===(o=i.options)||void 0===o?void 0:o.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r.l(e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
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
 */var N;(N=t.a).INTERNAL.registerComponent(new i.a("auth-compat",e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new E(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r.a.EMAIL_SIGNIN,PASSWORD_RESET:r.a.PASSWORD_RESET,RECOVER_EMAIL:r.a.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r.a.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r.a.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r.a.VERIFY_EMAIL}},EmailAuthProvider:r.c,FacebookAuthProvider:r.d,GithubAuthProvider:r.e,GoogleAuthProvider:r.f,OAuthProvider:r.h,SAMLAuthProvider:r.n,PhoneAuthProvider:S,PhoneMultiFactorGenerator:r.j,RecaptchaVerifier:P,TwitterAuthProvider:r.o,Auth:E,AuthCredential:r.b,Error:o.c}).setInstantiationMode("LAZY").setMultipleInstances(!1)),N.registerVersion("@firebase/auth-compat","0.2.14")}).call(this,n(9))},,,function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(28),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(9))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,o,a,s,c=1,u={},l=!1,d=e.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(e);h=h&&h.setTimeout?h:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){f(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){f(e.data)},r=function(e){o.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,r=function(e){var t=d.createElement("script");t.onreadystatechange=function(){f(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(f,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&f(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}),h.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return u[c]=i,r(c),c++},h.clearImmediate=p}function p(e){delete u[e]}function f(e){if(l)setTimeout(f,0,e);else{var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(9),n(16))},,function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},d=null,h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,i){u=n,d=i||{};var a=r(e,t);return f(a),function(t){for(var n=[],i=0;i<a.length;i++){var s=a[i];(c=o[s.id]).refs--,n.push(c)}t?f(a=r(e,t)):a=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}}function f(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(v(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(v(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function m(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(h){var i=c++;r=s||(s=m()),t=b.bind(null,r,i,!1),n=b.bind(null,r,i,!0)}else r=m(),t=_.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g,y=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function b(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function _(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}]]);