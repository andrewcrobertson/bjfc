import{S as t,i as e,s,u as n,v as l,w as r,x as a,y as o,z as c,e as f,a as m,c as i,b as u,g as h,f as $,h as p,o as g,p as d,K as x,L as v,D as w,q as b,t as j,d as y,r as E,A as D}from"./client.b61fbb49.js";import{t as I}from"./trimEnd.964240f7.js";import{A as V,p as T,u as A}from"./theme.1302b6c6.js";import"./join.22ae3f0e.js";import{C as B}from"./index.e79fad0f.js";import"./index.53a1f36c.js";import{P as C}from"./index.0e4789a3.js";function L(t,e,s){const n=t.slice();return n[6]=e[s].type,n[7]=e[s].value,n}function M(t){let e,s;return e=new B({props:{class:"mt-2",type:t[6],value:t[7],colour:t[4]}}),{c(){n(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){r(e,t,n),s=!0},p(t,s){const n={};2&s&&(n.type=t[6]),2&s&&(n.value=t[7]),e.$set(n)},i(t){s||(a(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}function N(t){let e,s,b,j,y,E,D,I,T;b=new V({props:{colour:t[4],initials:t[2],text:t[3]}}),E=new C({props:{class:"mt-2",colour:t[4],text:t[1].role}});let A=t[1].contactMethods,B=[];for(let e=0;e<A.length;e+=1)B[e]=M(L(t,A,e));const N=t=>o(B[t],1,1,(()=>{B[t]=null}));return{c(){e=f("div"),s=f("div"),n(b.$$.fragment),j=m(),y=f("div"),n(E.$$.fragment),D=m();for(let t=0;t<B.length;t+=1)B[t].c();this.h()},l(t){e=i(t,"DIV",{class:!0});var n=u(e);s=i(n,"DIV",{class:!0});var r=u(s);l(b.$$.fragment,r),j=h(r),y=i(r,"DIV",{class:!0});var a=u(y);l(E.$$.fragment,a),D=h(a);for(let t=0;t<B.length;t+=1)B[t].l(a);a.forEach($),r.forEach($),n.forEach($),this.h()},h(){p(y,"class","flex flex-col text-sm"),p(s,"class","border border-gray-300 p-4 lg:p-6"),p(e,"class",I=t[0]+" p-2 sm:p-4")},m(t,n){g(t,e,n),d(e,s),r(b,s,null),d(s,j),d(s,y),r(E,y,null),d(y,D);for(let t=0;t<B.length;t+=1)B[t].m(y,null);T=!0},p(t,[s]){const n={};if(2&s&&(n.text=t[1].role),E.$set(n),18&s){let e;for(A=t[1].contactMethods,e=0;e<A.length;e+=1){const n=L(t,A,e);B[e]?(B[e].p(n,s),a(B[e],1)):(B[e]=M(n),B[e].c(),a(B[e],1),B[e].m(y,null))}for(x(),e=A.length;e<B.length;e+=1)N(e);v()}(!T||1&s&&I!==(I=t[0]+" p-2 sm:p-4"))&&p(e,"class",I)},i(t){if(!T){a(b.$$.fragment,t),a(E.$$.fragment,t);for(let t=0;t<A.length;t+=1)a(B[t]);T=!0}},o(t){o(b.$$.fragment,t),o(E.$$.fragment,t),B=B.filter(Boolean);for(let t=0;t<B.length;t+=1)o(B[t]);T=!1},d(t){t&&$(e),c(b),c(E),w(B,t)}}}function P(t,e,s){var n;let{class:l=""}=e,{member:r}=e;const a=r.initials,o=`${r.firstName} ${r.lastName}`,c=T[null!==(n=r.gender)&&void 0!==n?n:A];return t.$$set=t=>{"class"in t&&s(0,l=t.class),"member"in t&&s(1,r=t.member)},[l,r,a,o,c]}class q extends t{constructor(t){super(),e(this,t,P,N,s,{class:0,member:1})}}function z(t,e,s){const n=t.slice();return n[2]=e[s],n}function K(t){let e,s;return{c(){e=f("p"),s=j("There are no committee members"),this.h()},l(t){e=i(t,"P",{class:!0});var n=u(e);s=y(n,"There are no committee members"),n.forEach($),this.h()},h(){p(e,"class","p-4")},m(t,n){g(t,e,n),d(e,s)},d(t){t&&$(e)}}}function S(t){let e,s;return e=new q({props:{class:"w-full md:w-1/2 lg:w-1/3 xl:w-1/4",member:t[2]}}),{c(){n(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){r(e,t,n),s=!0},p:b,i(t){s||(a(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}function k(t){let e,s,n,l=t[0],r=[];for(let e=0;e<l.length;e+=1)r[e]=S(z(t,l,e));const c=t=>o(r[t],1,1,(()=>{r[t]=null}));let m=null;return l.length||(m=K()),{c(){e=f("div"),s=f("div");for(let t=0;t<r.length;t+=1)r[t].c();m&&m.c(),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=u(e);s=i(n,"DIV",{class:!0});var l=u(s);for(let t=0;t<r.length;t+=1)r[t].l(l);m&&m.l(l),l.forEach($),n.forEach($),this.h()},h(){p(s,"class","flex flex-wrap -m-4 sm:p-4"),p(e,"class","container mx-auto xl:py-10")},m(t,l){g(t,e,l),d(e,s);for(let t=0;t<r.length;t+=1)r[t].m(s,null);m&&m.m(s,null),n=!0},p(t,[e]){if(1&e){let n;for(l=t[0],n=0;n<l.length;n+=1){const o=z(t,l,n);r[n]?(r[n].p(o,e),a(r[n],1)):(r[n]=S(o),r[n].c(),a(r[n],1),r[n].m(s,null))}for(x(),n=l.length;n<r.length;n+=1)c(n);v(),l.length?m&&(m.d(1),m=null):m||(m=K(),m.c(),m.m(s,null))}},i(t){if(!n){for(let t=0;t<l.length;t+=1)a(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)o(r[t]);n=!1},d(t){t&&$(e),w(r,t),m&&m.d()}}}function F(t,e,s){let{state:n=null}=e;const l=n.committeeList;return E.set("Committee"),t.$$set=t=>{"state"in t&&s(1,n=t.state)},[l,n]}class G extends t{constructor(t){super(),e(this,t,F,k,s,{state:1})}}function H(t){let e,s;return e=new G({props:{state:t[0]}}),{c(){n(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){r(e,t,n),s=!0},p(t,[s]){const n={};1&s&&(n.state=t[0]),e.$set(n)},i(t){s||(a(e.$$.fragment,t),s=!0)},o(t){o(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}async function J(t,e){const s=await this.fetch(`${I(t.path,"/")}${"/"===t.path?"index":""}.json`);return{state:await s.json()}}function O(t,e,s){let{state:n=null}=e;return D((()=>window.scrollTo(0,0))),t.$$set=t=>{"state"in t&&s(0,n=t.state)},[n]}export default class extends t{constructor(t){super(),e(this,t,O,H,s,{state:0})}}export{J as preload};
