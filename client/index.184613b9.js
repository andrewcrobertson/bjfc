import{S as s,i as t,s as a,e as r,t as e,a as c,c as o,b as n,d as l,f as i,g as h,h as f,j as m,k as p,l as u,m as d,n as b,o as $,p as y,q as x,r as g,u as v,v as k,w,x as E,y as j,z as A,A as S}from"./client.1fbb0159.js";import{t as T}from"./trimEnd.6eb23247.js";function B(s){let t,a,g,v,k,w,E,j,A,S,T,B,C,q,z,D;return{c(){t=r("div"),a=r("a"),g=e("Teams"),k=c(),w=r("a"),E=e("Committee"),A=c(),S=r("a"),T=e("Search"),C=c(),q=r("a"),z=e("Birthdays"),this.h()},l(s){t=o(s,"DIV",{class:!0,style:!0});var r=n(t);a=o(r,"A",{class:!0,href:!0});var e=n(a);g=l(e,"Teams"),e.forEach(i),k=h(r),w=o(r,"A",{class:!0,href:!0});var c=n(w);E=l(c,"Committee"),c.forEach(i),A=h(r),S=o(r,"A",{class:!0,href:!0});var f=n(S);T=l(f,"Search"),f.forEach(i),C=h(r),q=o(r,"A",{class:!0,href:!0});var m=n(q);z=l(m,"Birthdays"),m.forEach(i),r.forEach(i),this.h()},h(){f(a,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),f(a,"href",v=m()),f(w,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),f(w,"href",j=p()),f(S,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),f(S,"href",B=u()),f(q,"class","block items-center border border-gray-300 px-6 py-3 mt-2"),f(q,"href",D=d()),f(t,"class","container mx-auto xl:py-10"),b(t,"--background-url","url(/client/37714b73b8c126cf.png)")},m(s,r){$(s,t,r),y(t,a),y(a,g),y(t,k),y(t,w),y(w,E),y(t,A),y(t,S),y(S,T),y(t,C),y(t,q),y(q,z)},p:x,i:x,o:x,d(s){s&&i(t)}}}function C(s,t,a){return g.set("Home"),[null]}class q extends s{constructor(s){super(),t(this,s,C,B,a,{state:0})}get state(){return this.$$.ctx[0]}}function z(s){let t,a;return t=new q({props:{state:s[0]}}),{c(){v(t.$$.fragment)},l(s){k(t.$$.fragment,s)},m(s,r){w(t,s,r),a=!0},p(s,[a]){const r={};1&a&&(r.state=s[0]),t.$set(r)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){j(t.$$.fragment,s),a=!1},d(s){A(t,s)}}}async function D(s,t){const a=await this.fetch(`${T(s.path,"/")}${"/"===s.path?"index":""}.json`);return{state:await a.json()}}function H(s,t,a){let{state:r=null}=t;return S((()=>window.scrollTo(0,0))),s.$$set=s=>{"state"in s&&a(0,r=s.state)},[r]}export default class extends s{constructor(s){super(),t(this,s,H,z,a,{state:0})}}export{D as preload};
