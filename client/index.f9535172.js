import{S as e,i as a,s as t,u as l,v as n,w as s,q as r,o as i,x as o,h as m,j as c,c as u,b as f,k as p,d as h,e as g,f as d,g as y,m as v,p as N,y as $,n as b,t as P,l as E,z as w}from"./client.f70ebcd9.js";import{p as M,u as x}from"./theme.690bca52.js";import"./index.beaf87bd.js";import{A as C}from"./index.64a19198.js";import{C as j}from"./index.f4f3539e.js";import{P as B}from"./index.3b75a9be.js";function D(e,a,t){const l=e.slice();return l[8]=a[t].type,l[9]=a[t].value,l}function G(e){let a,t;return a=new j({props:{class:"mb-2",type:e[8],value:e[9],colour:e[6]}}),{c(){l(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,l){s(a,e,l),t=!0},p(e,t){const l={};2&t&&(l.type=e[8]),2&t&&(l.value=e[9]),a.$set(l)},i(e){t||(r(a.$$.fragment,e),t=!0)},o(e){i(a.$$.fragment,e),t=!1},d(e){o(a,e)}}}function k(e){let a,t,b,P,E,w,M,x,j;b=new C({props:{class:"mb-4",colour:e[6],initials:e[2],text:e[3]+" "+e[4]}}),w=new B({props:{class:"mb-2",colour:e[6],text:e[5]}});let k=e[1].contacts,A=[];for(let a=0;a<k.length;a+=1)A[a]=G(D(e,k,a));const F=e=>i(A[e],1,1,(()=>{A[e]=null}));return{c(){a=m("div"),t=m("div"),l(b.$$.fragment),P=c(),E=m("div"),l(w.$$.fragment),M=c();for(let e=0;e<A.length;e+=1)A[e].c();this.h()},l(e){a=u(e,"DIV",{class:!0});var l=f(a);t=u(l,"DIV",{class:!0});var s=f(t);n(b.$$.fragment,s),P=p(s),E=u(s,"DIV",{class:!0});var r=f(E);n(w.$$.fragment,r),M=p(r);for(let e=0;e<A.length;e+=1)A[e].l(r);r.forEach(h),s.forEach(h),l.forEach(h),this.h()},h(){g(E,"class","flex flex-col -mb-3"),g(t,"class","border border-gray-300 p-4 lg:p-6"),g(a,"class",x=e[0]+" p-2 sm:p-4")},m(e,l){d(e,a,l),y(a,t),s(b,t,null),y(t,P),y(t,E),s(w,E,null),y(E,M);for(let e=0;e<A.length;e+=1)A[e].m(E,null);j=!0},p(e,[t]){if(66&t){let a;for(k=e[1].contacts,a=0;a<k.length;a+=1){const l=D(e,k,a);A[a]?(A[a].p(l,t),r(A[a],1)):(A[a]=G(l),A[a].c(),r(A[a],1),A[a].m(E,null))}for(v(),a=k.length;a<A.length;a+=1)F(a);N()}(!j||1&t&&x!==(x=e[0]+" p-2 sm:p-4"))&&g(a,"class",x)},i(e){if(!j){r(b.$$.fragment,e),r(w.$$.fragment,e);for(let e=0;e<k.length;e+=1)r(A[e]);j=!0}},o(e){i(b.$$.fragment,e),i(w.$$.fragment,e),A=A.filter(Boolean);for(let e=0;e<A.length;e+=1)i(A[e]);j=!1},d(e){e&&h(a),o(b),o(w),$(A,e)}}}function A(e,a,t){let{class:l=""}=a,{member:n={}}=a;const s=n.initials,r=n.firstName,i=n.lastName,o=n.gender,m=n.role,c=M[null!=o?o:x];return e.$$set=e=>{"class"in e&&t(0,l=e.class),"member"in e&&t(1,n=e.member)},[l,n,s,r,i,m,c]}class F extends e{constructor(e){super(),a(this,e,A,k,t,{class:0,member:1})}}var S=[{role:"President",initials:"BD",firstName:"Beccy",lastName:"Dawber",gender:"Female",contacts:[{type:"Phone",value:"0401 306 209"},{type:"Email",value:"president@bayswaterjfc.com.au"}]},{role:"Vice President",initials:"SR",firstName:"Steve",lastName:"Roberts",gender:"Male",contacts:[{type:"Phone",value:"0474 221 909"},{type:"Email",value:"vicepresident@bayswaterjfc.com.au"}]},{role:"Secretary",initials:"MH",firstName:"Mark",lastName:"Hindson",gender:"Male",contacts:[{type:"Phone",value:"0419 149 500"},{type:"Email",value:"secretary@bayswaterjfc.com.au"}]},{role:"Treasurer",initials:"GP",firstName:"Gael",lastName:"Peters",gender:"Female",contacts:[{type:"Phone",value:"0409 809 611"},{type:"Email",value:"treasurer@bayswaterjfc.com.au"}]},{role:"Registrar",initials:"AR",firstName:"Andrew",lastName:"Robertson",gender:"Male",contacts:[{type:"Phone",value:"0425 807 059"},{type:"Email",value:"registrar@bayswaterjfc.com.au"}]},{role:"Auskick Coordinator",initials:"CB",firstName:"Chris",lastName:"Bartling",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"chrisbartling@hotmail.com"}]},{role:"Head Trainer",initials:"KP",firstName:"Kim",lastName:"Phillips",gender:"Female",contacts:[{type:"Phone",value:null},{type:"Email",value:"littlekim.phillips@gmail.com"}]},{role:"Merchandise & Grants Coordinator",initials:"WG",firstName:"Wendy",lastName:"Gielen",gender:"Female",contacts:[{type:"Phone",value:null},{type:"Email",value:"wendygielen11@gmail.com"}]},{role:"Website Administrator",initials:"DP",firstName:"Danny",lastName:"Phillips",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"danny.phillips@thermon.com"}]},{role:"Website Administrator",initials:"PB",firstName:"Peter",lastName:"Buchstaller",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"peterbuch1974@gmail.com"}]},{role:"Child Safety Officer",initials:"TB",firstName:"Tracey",lastName:"Bird",gender:"Female",contacts:[{type:"Phone",value:null},{type:"Email",value:"childsafetyofficer@bayswaterjfc.com.au"}]},{role:"School Liaison Officer",initials:"MW",firstName:"Mick",lastName:"Walker",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"schoolcontact@bayswaterjfc.com.au"}]},{role:"Facility Management",initials:"CP",firstName:"Colin",lastName:"Page",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"colinp71@hotmail.com"}]},{role:"Awards Coordinator",initials:"NM",firstName:"Nicky",lastName:"Maxwell",gender:"Female",contacts:[{type:"Phone",value:null},{type:"Email",value:"maxwell.n@optusnet.com.au"}]},{role:"General Committee",initials:"SJ",firstName:"Shaun",lastName:"Jones",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"sboy_99@hotmail.com"}]},{role:"General Committee",initials:"BK",firstName:"Brad",lastName:"Knight",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"bak1978@hotmail.com"}]},{role:"General Committee",initials:"MM",firstName:"Mandy",lastName:"Maggs",gender:"Female",contacts:[{type:"Phone",value:null},{type:"Email",value:"mandymaggs9@gmail.com"}]},{role:"General Committee",initials:"AN",firstName:"Adrian",lastName:"Nye",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"teamnye3@gmail.com"}]},{role:"General Committee",initials:"DR",firstName:"Danea",lastName:"Roberts",gender:"Female",contacts:[{type:"Phone",value:null},{type:"Email",value:"danea74@gmail.com"}]}];function R(e,a,t){const l=e.slice();return l[0]=a[t],l}function T(e){let a,t;return{c(){a=m("p"),t=P("There are no committee members"),this.h()},l(e){a=u(e,"P",{class:!0});var l=f(a);t=E(l,"There are no committee members"),l.forEach(h),this.h()},h(){g(a,"class","p-4")},m(e,l){d(e,a,l),y(a,t)},d(e){e&&h(a)}}}function V(e){let a,t;return a=new F({props:{class:"w-full md:w-1/2 lg:w-1/3 xl:w-1/4",member:e[0]}}),{c(){l(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,l){s(a,e,l),t=!0},p:b,i(e){t||(r(a.$$.fragment,e),t=!0)},o(e){i(a.$$.fragment,e),t=!1},d(e){o(a,e)}}}function W(e){let a,t,l,n=S,s=[];for(let a=0;a<n.length;a+=1)s[a]=V(R(e,n,a));const o=e=>i(s[e],1,1,(()=>{s[e]=null}));let c=null;return n.length||(c=T()),{c(){a=m("div"),t=m("div");for(let e=0;e<s.length;e+=1)s[e].c();c&&c.c(),this.h()},l(e){a=u(e,"DIV",{class:!0});var l=f(a);t=u(l,"DIV",{class:!0});var n=f(t);for(let e=0;e<s.length;e+=1)s[e].l(n);c&&c.l(n),n.forEach(h),l.forEach(h),this.h()},h(){g(t,"class","flex flex-wrap -m-4 sm:p-4"),g(a,"class","container mx-auto xl:py-10")},m(e,n){d(e,a,n),y(a,t);for(let e=0;e<s.length;e+=1)s[e].m(t,null);c&&c.m(t,null),l=!0},p(e,[a]){if(0&a){let l;for(n=S,l=0;l<n.length;l+=1){const i=R(e,n,l);s[l]?(s[l].p(i,a),r(s[l],1)):(s[l]=V(i),s[l].c(),r(s[l],1),s[l].m(t,null))}for(v(),l=n.length;l<s.length;l+=1)o(l);N(),n.length?c&&(c.d(1),c=null):c||(c=T(),c.c(),c.m(t,null))}},i(e){if(!l){for(let e=0;e<n.length;e+=1)r(s[e]);l=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)i(s[e]);l=!1},d(e){e&&h(a),$(s,e),c&&c.d()}}}function I(e){return w.set("Committee"),[]}class K extends e{constructor(e){super(),a(this,e,I,W,t,{})}}function H(e){let a,t;return a=new K({}),{c(){l(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,l){s(a,e,l),t=!0},p:b,i(e){t||(r(a.$$.fragment,e),t=!0)},o(e){i(a.$$.fragment,e),t=!1},d(e){o(a,e)}}}export default class extends e{constructor(e){super(),a(this,e,null,H,t,{})}}
