import{S as e,i as a,s as l,u as t,v as n,w as i,q as o,o as r,x as s,h as c,j as f,c as m,b as u,k as d,d as p,e as g,f as h,g as $,m as v,p as y,y as M,A as N,t as x,l as G,z as U,n as b}from"./client.b0f61f3c.js";import{p as E,u as C,b as P}from"./theme.690bca52.js";import"./index.c31b6482.js";import{A as w}from"./index.af01a3f1.js";import"./index.2231d6b7.js";import{P as D,C as T,E as A}from"./index.fe812a6c.js";function B(e,a,l){const t=e.slice();return t[8]=a[l].type,t[9]=a[l].value,t}function H(e){let a,l;return a=new T({props:{type:e[8],value:e[9],colour:e[6]}}),{c(){t(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){i(a,e,t),l=!0},p(e,l){const t={};2&l&&(t.type=e[8]),2&l&&(t.value=e[9]),a.$set(t)},i(e){l||(o(a.$$.fragment,e),l=!0)},o(e){r(a.$$.fragment,e),l=!1},d(e){s(a,e)}}}function F(e){let a,l,N,x,G,U,b,E;N=new w({props:{class:"mb-4",colour:e[6],initials:e[3],text:e[4]+" "+e[5]}}),U=new D({props:{class:"mb-2",colour:e[6],text:e[2]}});let C=e[1].contacts,P=[];for(let a=0;a<C.length;a+=1)P[a]=H(B(e,C,a));const T=e=>r(P[e],1,1,(()=>{P[e]=null}));return{c(){a=c("div"),l=c("div"),t(N.$$.fragment),x=f(),G=c("div"),t(U.$$.fragment),b=f();for(let e=0;e<P.length;e+=1)P[e].c();this.h()},l(e){a=m(e,"DIV",{class:!0});var t=u(a);l=m(t,"DIV",{class:!0});var i=u(l);n(N.$$.fragment,i),x=d(i),G=m(i,"DIV",{class:!0});var o=u(G);n(U.$$.fragment,o),b=d(o);for(let e=0;e<P.length;e+=1)P[e].l(o);o.forEach(p),i.forEach(p),t.forEach(p),this.h()},h(){g(G,"class","flex flex-col -mb-3"),g(l,"class","border border-gray-300 p-4 lg:p-6"),g(a,"class",e[0])},m(e,t){h(e,a,t),$(a,l),i(N,l,null),$(l,x),$(l,G),i(U,G,null),$(G,b);for(let e=0;e<P.length;e+=1)P[e].m(G,null);E=!0},p(e,[l]){const t={};if(4&l&&(t.text=e[2]),U.$set(t),66&l){let a;for(C=e[1].contacts,a=0;a<C.length;a+=1){const t=B(e,C,a);P[a]?(P[a].p(t,l),o(P[a],1)):(P[a]=H(t),P[a].c(),o(P[a],1),P[a].m(G,null))}for(v(),a=C.length;a<P.length;a+=1)T(a);y()}(!E||1&l)&&g(a,"class",e[0])},i(e){if(!E){o(N.$$.fragment,e),o(U.$$.fragment,e);for(let e=0;e<C.length;e+=1)o(P[e]);E=!0}},o(e){r(N.$$.fragment,e),r(U.$$.fragment,e),P=P.filter(Boolean);for(let e=0;e<P.length;e+=1)r(P[e]);E=!1},d(e){e&&p(a),s(N),s(U),M(P,e)}}}function R(e,a,l){let{class:t=""}=a,{official:n={}}=a,{role:i=""}=a;const{initials:o,firstName:r,lastName:s,gender:c}=n,f=E[null!=c?c:C];return e.$$set=e=>{"class"in e&&l(0,t=e.class),"official"in e&&l(1,n=e.official),"role"in e&&l(2,i=e.role)},[t,n,i,o,r,s,f]}class j extends e{constructor(e){super(),a(this,e,R,F,l,{class:0,official:1,role:2})}}function k(e){let a,l,v,y,M,N,x,G,U,b,E;return v=new w({props:{class:"flex items-center mb-4",colour:e[2],initials:"TBD",text:"To Be Determined"}}),N=new D({props:{class:"mb-2",colour:e[2],text:e[1]}}),G=new A({props:{class:"mb-2"}}),b=new A({props:{class:"mb-2"}}),{c(){a=c("div"),l=c("div"),t(v.$$.fragment),y=f(),M=c("div"),t(N.$$.fragment),x=f(),t(G.$$.fragment),U=f(),t(b.$$.fragment),this.h()},l(e){a=m(e,"DIV",{class:!0});var t=u(a);l=m(t,"DIV",{class:!0});var i=u(l);n(v.$$.fragment,i),y=d(i),M=m(i,"DIV",{class:!0});var o=u(M);n(N.$$.fragment,o),x=d(o),n(G.$$.fragment,o),U=d(o),n(b.$$.fragment,o),o.forEach(p),i.forEach(p),t.forEach(p),this.h()},h(){g(M,"class","flex flex-col -mb-3"),g(l,"class","border border-gray-300 bg-gray-50 p-4 lg:p-6"),g(a,"class",e[0])},m(e,t){h(e,a,t),$(a,l),i(v,l,null),$(l,y),$(l,M),i(N,M,null),$(M,x),i(G,M,null),$(M,U),i(b,M,null),E=!0},p(e,[l]){const t={};2&l&&(t.text=e[1]),N.$set(t),(!E||1&l)&&g(a,"class",e[0])},i(e){E||(o(v.$$.fragment,e),o(N.$$.fragment,e),o(G.$$.fragment,e),o(b.$$.fragment,e),E=!0)},o(e){r(v.$$.fragment,e),r(N.$$.fragment,e),r(G.$$.fragment,e),r(b.$$.fragment,e),E=!1},d(e){e&&p(a),s(v),s(N),s(G),s(b)}}}function I(e,a,l){let{class:t=""}=a,{role:n=""}=a;const i=E[C];return e.$$set=e=>{"class"in e&&l(0,t=e.class),"role"in e&&l(1,n=e.role)},[t,n,i]}class K extends e{constructor(e){super(),a(this,e,I,k,l,{class:0,role:1})}}var V={U18G:{code:"U18G",ageGroupCode:"U18",name:"Under 18 Girls",teamGender:"Female",officials:[{role:"Head Coach",official:null},{role:"Assistant Coach",official:null},{role:"Team Manager",official:null},{role:"Trainer",official:null}]},"U17B-GOLD":{code:"U17B-GOLD",ageGroupCode:"U17",name:"Under 17 Boys (Gold)",teamGender:"Male",officials:[{role:"Head Coach",official:{initials:"JA",firstName:"Jarrod",lastName:"Amey",gender:"Male",contacts:[{type:"Phone",value:"0439 039 578"},{type:"Email",value:"jazznchaz01@gmail.com"}]}},{role:"Assistant Coach",official:{initials:"DP",firstName:"Danny",lastName:"Phillips",gender:"Male",contacts:[{type:"Phone",value:"0417 339 397"},{type:"Email",value:"danny.phillips@thermon.com"}]}},{role:"Team Manager",official:{initials:"DD",firstName:"Deanna",lastName:"Derham",gender:"Female",contacts:[{type:"Phone",value:"0414 952 117"},{type:"Email",value:"dderham@ldb.com.au"}]}},{role:"Trainer",official:{initials:"KP",firstName:"Kim",lastName:"Phillips",gender:"Female",contacts:[{type:"Phone",value:"0418 337 535"},{type:"Email",value:"littlekim.phillips@gmail.com"}]}}]},"U17B-GREEN":{code:"U17B-GREEN",ageGroupCode:"U16",name:"Under 17 Boys (Green)",teamGender:"Male",officials:[{role:"Head Coach",official:{initials:"LM",firstName:"Lachie",lastName:"McGuire",gender:"Male",contacts:[{type:"Phone",value:"0488 149 080"},{type:"Email",value:"lachlan.mcguire2@bigpond.com"}]}},{role:"Assistant Coach",official:{initials:"NM",firstName:"Nic",lastName:"Maxwell",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"nicmaxwell44@optusnet.com.au"}]}},{role:"Team Manager",official:{initials:"KM",firstName:"Kelly",lastName:"McGuire",gender:"Female",contacts:[{type:"Phone",value:null},{type:"Email",value:"lachlan.mcguire2@bigpond.com"}]}},{role:"Trainer",official:{initials:"RS",firstName:"Rob",lastName:"Scripps",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"rkscripps@gmail.com"}]}}]},U16G:{code:"U16G",ageGroupCode:"U16",name:"Under 16 Girls",teamGender:"Female",officials:[{role:"Head Coach",official:{initials:"MH",firstName:"Michael",lastName:"Hughson",gender:"Male",contacts:[{type:"Phone",value:"0401 995 003"},{type:"Email",value:"michael.hughson@trendwindows.com.au"}]}},{role:"Assistant Coach",official:null},{role:"Team Manager",official:{initials:"KC",firstName:"Kylie",lastName:"Cameron",gender:"Female",contacts:[{type:"Phone",value:"0409 017 724"},{type:"Email",value:"camscove@icloud.com"}]}},{role:"Trainer",official:null}]},U14B:{code:"U14B",ageGroupCode:"U14",name:"Under 14 Boys",teamGender:"Male",officials:[{role:"Head Coach",official:{initials:"AP",firstName:"Andrew",lastName:"Peters",gender:"Male",contacts:[{type:"Phone",value:"0409 794 180"},{type:"Email",value:"apeters@swin.edu.au"}]}},{role:"Assistant Coach",official:{initials:"SR",firstName:"Steve",lastName:"Roberts",gender:"Male",contacts:[{type:"Phone",value:"0474 221 909"},{type:"Email",value:"cbrsteve.roberts@gmail.com"}]}},{role:"Team Manager",official:{initials:"DD",firstName:"Deanna",lastName:"Derham",gender:"Female",contacts:[{type:"Phone",value:"0414 952 117"},{type:"Email",value:"dderham@ldb.com.au"}]}},{role:"Trainer",official:null}]},U14G:{code:"U14G",ageGroupCode:"U14",name:"Under 14 Girls",teamGender:"Female",officials:[{role:"Head Coach",official:{initials:"MR",firstName:"Matt",lastName:"Rennison",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"golfman05@live.com"}]}},{role:"Assistant Coach",official:null},{role:"Team Manager",official:null},{role:"Trainer",official:{initials:"DH",firstName:"Dragana",lastName:"Hindson",gender:"Female",contacts:[{type:"Phone",value:null},{type:"Email",value:"dragana@icircle.net"}]}}]},U12G:{code:"U12G",ageGroupCode:"U12",name:"Under 12 Girls",teamGender:"Female",officials:[{role:"Head Coach",official:{initials:"KM",firstName:"Kevin",lastName:"Maniscalchi",gender:"Male",contacts:[{type:"Phone",value:"0421 785 622"},{type:"Email",value:"kmaniscalchi@outlook.com"}]}},{role:"Assistant Coach",official:null},{role:"Team Manager",official:null},{role:"Trainer",official:null}]},U12B:{code:"U12B",ageGroupCode:"U12",name:"Under 12 Boys",teamGender:"Male",officials:[{role:"Head Coach",official:{initials:"AR",firstName:"Andrew",lastName:"Rippon",gender:"Male",contacts:[{type:"Phone",value:"0412 244 056"},{type:"Email",value:"chipsbricklaying@hotmail.com"}]}},{role:"Assistant Coach",official:{initials:"AP",firstName:"Andrew",lastName:"Parker",gender:null,contacts:[{type:"Phone",value:null},{type:"Email",value:null}]}},{role:"Team Manager",official:{initials:"BD",firstName:"Beccy",lastName:"Dawber",gender:"Female",contacts:[{type:"Phone",value:"0401 306 209"},{type:"Email",value:"beccydawber@bigpond.com"}]}},{role:"Trainer",official:null}]},U11M:{code:"U11M",ageGroupCode:"U11",name:"Under 11 Mixed",teamGender:"Mixed",officials:[{role:"Head Coach",official:{initials:"AG",firstName:"Alex",lastName:"Gunn",gender:"Male",contacts:[{type:"Phone",value:"0403 977 524"},{type:"Email",value:"algunn71@hotmail.com"}]}},{role:"Assistant Coach",official:null},{role:"Team Manager",official:{initials:"DP",firstName:"Deb",lastName:"Pearson",gender:"Female",contacts:[{type:"Phone",value:null},{type:"Email",value:"debbie_rob@optusnet.com.au"}]}},{role:"Trainer",official:null}]},U10M:{code:"U10M",ageGroupCode:"U10",name:"Under 10 Mixed",teamGender:"Mixed",officials:[{role:"Head Coach",official:{initials:"BB",firstName:"Ben",lastName:"Beveridge",gender:"Male",contacts:[{type:"Phone",value:"0411 105 440"},{type:"Email",value:"benbev35@gmail.com"}]}},{role:"Assistant Coach",official:{initials:"EC",firstName:"Erin",lastName:"Chamberlain",gender:"Female",contacts:[{type:"Phone",value:null},{type:"Email",value:null}]}},{role:"Team Manager",official:null},{role:"Trainer",official:null}]},U09M:{code:"U09M",ageGroupCode:"U9",name:"Under 9 Mixed",teamGender:"Mixed",officials:[{role:"Head Coach",official:{initials:"MH",firstName:"Mark",lastName:"Hindson",gender:"Male",contacts:[{type:"Phone",value:"0419 149 500"},{type:"Email",value:"mark@icircle.net"}]}},{role:"Assistant Coach",official:{initials:"RK",firstName:"Rob",lastName:"Kinstler",gender:"Male",contacts:[{type:"Phone",value:null},{type:"Email",value:"robertgk.66@gmail.com"}]}},{role:"Team Manager",official:null},{role:"Trainer",official:null}]},U08M:{code:"U08M",ageGroupCode:"U8",name:"Under 8 Mixed",teamGender:"Mixed",officials:[{role:"Head Coach",official:null},{role:"Assistant Coach",official:null},{role:"Team Manager",official:null},{role:"Trainer",official:null}]}};function S(e,a,l){const t=e.slice();return t[3]=a[l].role,t[4]=a[l].official,t}function z(e){let a,l;return{c(){a=c("p"),l=x("There are no officials"),this.h()},l(e){a=m(e,"P",{class:!0});var t=u(a);l=G(t,"There are no officials"),t.forEach(p),this.h()},h(){g(a,"class","p-4")},m(e,t){h(e,a,t),$(a,l)},d(e){e&&p(a)}}}function L(e){let a,l;return a=new j({props:{class:"md:w-1/2 w-full p-2 sm:p-4",role:e[3],official:e[4]}}),{c(){t(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){i(a,e,t),l=!0},p:b,i(e){l||(o(a.$$.fragment,e),l=!0)},o(e){r(a.$$.fragment,e),l=!1},d(e){s(a,e)}}}function O(e){let a,l;return a=new K({props:{class:"md:w-1/2 w-full p-2 sm:p-4",role:e[3]}}),{c(){t(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){i(a,e,t),l=!0},p:b,i(e){l||(o(a.$$.fragment,e),l=!0)},o(e){r(a.$$.fragment,e),l=!1},d(e){s(a,e)}}}function J(e){let a,l,t,n;const i=[O,L],s=[];return a=function(e,a){return null===e[4]?0:1}(e),l=s[a]=i[a](e),{c(){l.c(),t=N()},l(e){l.l(e),t=N()},m(e,l){s[a].m(e,l),h(e,t,l),n=!0},p(e,a){l.p(e,a)},i(e){n||(o(l),n=!0)},o(e){r(l),n=!1},d(e){s[a].d(e),e&&p(t)}}}function q(e){let a,l,N,U,b,E,C,P,D,T,A;N=new w({props:{class:"flex items-center space-x-2",colour:e[2],initials:e[1].ageGroupCode,text:e[1].name}});let B=e[1].officials,H=[];for(let a=0;a<B.length;a+=1)H[a]=J(S(e,B,a));const F=e=>r(H[e],1,1,(()=>{H[e]=null}));let R=null;return B.length||(R=z()),{c(){a=c("div"),l=c("div"),t(N.$$.fragment),U=f(),b=c("div"),E=c("a"),C=x("Players"),D=f(),T=c("div");for(let e=0;e<H.length;e+=1)H[e].c();R&&R.c(),this.h()},l(e){a=m(e,"DIV",{class:!0});var t=u(a);l=m(t,"DIV",{class:!0});var i=u(l);n(N.$$.fragment,i),U=d(i),b=m(i,"DIV",{class:!0});var o=u(b);E=m(o,"A",{class:!0,href:!0});var r=u(E);C=G(r,"Players"),r.forEach(p),o.forEach(p),i.forEach(p),D=d(t),T=m(t,"DIV",{class:!0});var s=u(T);for(let e=0;e<H.length;e+=1)H[e].l(s);R&&R.l(s),s.forEach(p),t.forEach(p),this.h()},h(){g(E,"class","text-sm border border-gray-300 px-3 py-3 mr-2"),g(E,"href",P="/teams/"+e[0]+"/players"),g(b,"class","flex justify-end items-center text-sm mr-2 py-1"),g(l,"class","flex flex-col sm:flex-row sm:justify-between pb-5"),g(T,"class","flex flex-wrap -m-4 sm:p-4"),g(a,"class","max-w-6xl mx-auto xl:py-24")},m(e,t){h(e,a,t),$(a,l),i(N,l,null),$(l,U),$(l,b),$(b,E),$(E,C),$(a,D),$(a,T);for(let e=0;e<H.length;e+=1)H[e].m(T,null);R&&R.m(T,null),A=!0},p(e,[a]){if((!A||1&a&&P!==(P="/teams/"+e[0]+"/players"))&&g(E,"href",P),2&a){let l;for(B=e[1].officials,l=0;l<B.length;l+=1){const t=S(e,B,l);H[l]?(H[l].p(t,a),o(H[l],1)):(H[l]=J(t),H[l].c(),o(H[l],1),H[l].m(T,null))}for(v(),l=B.length;l<H.length;l+=1)F(l);y(),B.length?R&&(R.d(1),R=null):R||(R=z(),R.c(),R.m(T,null))}},i(e){if(!A){o(N.$$.fragment,e);for(let e=0;e<B.length;e+=1)o(H[e]);A=!0}},o(e){r(N.$$.fragment,e),H=H.filter(Boolean);for(let e=0;e<H.length;e+=1)r(H[e]);A=!1},d(e){e&&p(a),s(N),M(H,e),R&&R.d()}}}function _(e,a,l){let{code:t=null}=a;const n=V[t],i=P[n.teamGender];return U.set("Officials"),e.$$set=e=>{"code"in e&&l(0,t=e.code)},[t,n,i]}class Q extends e{constructor(e){super(),a(this,e,_,q,l,{code:0})}}function W(e){let a,l;return a=new Q({props:{code:e[0]}}),{c(){t(a.$$.fragment)},l(e){n(a.$$.fragment,e)},m(e,t){i(a,e,t),l=!0},p(e,[l]){const t={};1&l&&(t.code=e[0]),a.$set(t)},i(e){l||(o(a.$$.fragment,e),l=!0)},o(e){r(a.$$.fragment,e),l=!1},d(e){s(a,e)}}}async function X(e,a){const{code:l}=e.params;return{code:l}}function Y(e,a,l){let{code:t=null}=a;return e.$$set=e=>{"code"in e&&l(0,t=e.code)},[t]}export default class extends e{constructor(e){super(),a(this,e,Y,W,l,{code:0})}}export{X as preload};
