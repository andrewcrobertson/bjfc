import{g as t,a as s,b as e,c as a,d as r,e as n,f as o,S as l,i as c,s as u,h as f,t as h,k as i,l as p,m,n as d,p as g,v as $,w as b,x,K as j,z as v,A as w,B as E,C as k,D as y,E as A,F as L}from"./client.67af070e.js";import{d as z}from"./players.89d6b8bd.js";import{d as B}from"./teams.2ca8a807.js";import{m as C}from"./map.0e755dd5.js";function D(t,s,e){const a=t.slice();return a[2]=s[e],a}function F(t){let s,e,a,r,n=t[2]+"";return{c(){s=f("li"),e=f("a"),a=h(n),this.h()},l(t){s=i(t,"LI",{});var r=p(s);e=i(r,"A",{href:!0});var o=p(e);a=m(o,n),o.forEach(d),r.forEach(d),this.h()},h(){g(e,"href",r=t[2])},m(t,r){$(t,s,r),b(s,e),b(e,a)},p:x,d(t){t&&d(s)}}}function I(t){let s,e=t[0],a=[];for(let s=0;s<e.length;s+=1)a[s]=F(D(t,e,s));return{c(){s=f("ul");for(let t=0;t<a.length;t+=1)a[t].c()},l(t){s=i(t,"UL",{});var e=p(s);for(let t=0;t<a.length;t+=1)a[t].l(e);e.forEach(d)},m(t,e){$(t,s,e);for(let t=0;t<a.length;t+=1)a[t].m(s,null)},p(t,[r]){if(1&r){let n;for(e=t[0],n=0;n<e.length;n+=1){const o=D(t,e,n);a[n]?a[n].p(o,r):(a[n]=F(o),a[n].c(),a[n].m(s,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=e.length}},i:x,o:x,d(t){t&&d(s),j(a,t)}}}function K(t,s,e){let{state:a=null}=s;const r=a.links;return t.$$set=t=>{"state"in t&&e(1,a=t.state)},[r,a]}class N extends l{constructor(t){super(),c(this,t,K,I,u,{state:1})}}function S(t){let s,e;return s=new N({props:{state:t[0]}}),{c(){v(s.$$.fragment)},l(t){w(s.$$.fragment,t)},m(t,a){E(s,t,a),e=!0},p(t,[e]){const a={};1&e&&(a.state=t[0]),s.$set(a)},i(t){e||(k(s.$$.fragment,t),e=!0)},o(t){y(s.$$.fragment,t),e=!1},d(t){A(s,t)}}}function T(l,c){return((l,c)=>{const u=[];return u.push(t()),u.push(s()),u.push(e()),u.push(...C(z,(({footyWebNumber:t})=>a(t)))),u.push(...C(B,(({code:t})=>r(t)))),u.push(...C(B,(({code:t})=>n(t)))),u.push(...C(B,(({code:t})=>o(t)))),u.sort(),{state:{links:u}}})()}function U(t,s,e){let{state:a=null}=s;return L((()=>window.scrollTo(0,0))),t.$$set=t=>{"state"in t&&e(0,a=t.state)},[a]}export default class extends l{constructor(t){super(),c(this,t,U,S,u,{state:0})}}export{T as preload};
