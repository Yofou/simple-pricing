function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function i(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o,r,c,s){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(u){const r=f(n,e,o,s);t.p(r,u)}}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function g(){return $(" ")}function m(){return $("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t){return""===t?null:+t}function x(t){return Array.from(t.childNodes)}function v(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):h(n)}function w(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return $(n)}function E(t){return w(t," ")}function k(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function j(t,n){t.value=null==n?"":n}function A(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function N(t,n,e){t.classList[e?"add":"remove"](n)}let O;function L(t){O=t}function S(){if(!O)throw new Error("Function called outside component initialization");return O}function C(t){S().$$.on_mount.push(t)}function M(t){S().$$.after_update.push(t)}function T(t,n){S().$$.context.set(t,n)}function q(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const z=[],B=[],F=[],P=[],D=Promise.resolve();let G=!1;function H(t){F.push(t)}let I=!1;const J=new Set;function K(){if(!I){I=!0;do{for(let t=0;t<z.length;t+=1){const n=z[t];L(n),Q(n.$$)}for(L(null),z.length=0;B.length;)B.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];J.has(n)||(J.add(n),n())}F.length=0}while(z.length);for(;P.length;)P.pop()();G=!1,I=!1,J.clear()}}function Q(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const R=new Set;let U;function V(){U={r:0,c:[],p:U}}function W(){U.r||r(U.c),U=U.p}function X(t,n){t&&t.i&&(R.delete(t),t.i(n))}function Y(t,n,e,o){if(t&&t.o){if(R.has(t))return;R.add(t),U.c.push((()=>{R.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Z(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const s in o)s in e||(e[s]=void 0);return e}function tt(t){return"object"==typeof t&&null!==t?t:{}}function nt(t){t&&t.c()}function et(t,n){t&&t.l(n)}function ot(t,n,o,s){const{fragment:u,on_mount:i,on_destroy:f,after_update:a}=t.$$;u&&u.m(n,o),s||H((()=>{const n=i.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(H)}function rt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){-1===t.$$.dirty[0]&&(z.push(t),G||(G=!0,D.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function st(n,e,c,s,u,i,f=[-1]){const a=O;L(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&u(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&ct(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!s&&s(l.ctx),e.target){if(e.hydrate){const t=x(e.target);l.fragment&&l.fragment.l(t),t.forEach(p)}else l.fragment&&l.fragment.c();e.intro&&X(n.$$.fragment),ot(n,e.target,e.anchor,e.customElement),K()}L(a)}class ut{$destroy(){rt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=[];function ft(n,e=t){let o;const r=[];function c(t){if(s(n,t)&&(n=t,o)){const t=!it.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),it.push(t,n)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,u=t){const i=[s,u];return r.push(i),1===r.length&&(o=e(c)||t),s(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,V as B,ft as C,i as D,a as E,l as F,t as G,N as H,b as I,q as J,A as K,j as L,r as M,u as N,_ as O,ut as S,x as a,y as b,v as c,p as d,h as e,d as f,w as g,k as h,st as i,nt as j,g as k,m as l,et as m,E as n,ot as o,Z as p,tt as q,Y as r,s,$ as t,W as u,X as v,rt as w,T as x,M as y,C as z};
