import{S as s,i as a,s as t,e as r,t as e,a as c,c as o,b as n,d as l,f as i,g as f,h,j as m,k as p,l as u,m as d,n as b,o as $,p as y,q as x,r as g,u as v,v as k,w,x as E,y as j,z as A,A as S}from"./client.6fcbeccd.js";import{t as T}from"./trimEnd.c5abf82f.js";function B(s){let a,t,g,v,k,w,E,j,A,S,T,B,C,q,z,D;return{c(){a=r("div"),t=r("a"),g=e("Teams"),k=c(),w=r("a"),E=e("Committee"),A=c(),S=r("a"),T=e("Search"),C=c(),q=r("a"),z=e("Birthdays"),this.h()},l(s){a=o(s,"DIV",{class:!0,style:!0});var r=n(a);t=o(r,"A",{class:!0,href:!0});var e=n(t);g=l(e,"Teams"),e.forEach(i),k=f(r),w=o(r,"A",{class:!0,href:!0});var c=n(w);E=l(c,"Committee"),c.forEach(i),A=f(r),S=o(r,"A",{class:!0,href:!0});var h=n(S);T=l(h,"Search"),h.forEach(i),C=f(r),q=o(r,"A",{class:!0,href:!0});var m=n(q);z=l(m,"Birthdays"),m.forEach(i),r.forEach(i),this.h()},h(){h(t,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),h(t,"href",v=m()),h(w,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),h(w,"href",j=p()),h(S,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),h(S,"href",B=u()),h(q,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),h(q,"href",D=d()),h(a,"class","container mx-auto xl:py-10"),b(a,"--background-url","url(/client/37714b73b8c126cf.png)")},m(s,r){$(s,a,r),y(a,t),y(t,g),y(a,k),y(a,w),y(w,E),y(a,A),y(a,S),y(S,T),y(a,C),y(a,q),y(q,z)},p:x,i:x,o:x,d(s){s&&i(a)}}}function C(s,a,t){return g.set("Home"),[null]}class q extends s{constructor(s){super(),a(this,s,C,B,t,{state:0})}get state(){return this.$$.ctx[0]}}function z(s){let a,t;return a=new q({props:{state:s[0]}}),{c(){v(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,r){w(a,s,r),t=!0},p(s,[t]){const r={};1&t&&(r.state=s[0]),a.$set(r)},i(s){t||(E(a.$$.fragment,s),t=!0)},o(s){j(a.$$.fragment,s),t=!1},d(s){A(a,s)}}}async function D(s,a){const t=await this.fetch(`${T(s.path,"/")}${"/"===s.path?"index":""}.json`);return{state:await t.json()}}function H(s,a,t){let{state:r=null}=a;return S((()=>window.scrollTo(0,0))),s.$$set=s=>{"state"in s&&t(0,r=s.state)},[r]}export default class extends s{constructor(s){super(),a(this,s,H,z,t,{state:0})}}export{D as preload};
