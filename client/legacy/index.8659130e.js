import{_ as t,h as e,i as a,j as n,k as r,s as i,l as o,S as l,D as s,E as c,F as f,H as u,I as m,J as h,n as d,o as p,p as v,q as g,v as y,u as $,w as N,z as M,A as b,G as E,Q as w,R as P,T as R,B as x,t as D,r as j,C,K as B}from"./client.506ec67e.js";import{m as G}from"./map.d988d994.js";import{A as S,p as A,u as F}from"./theme.919d8504.js";import"./index.7e9640bc.js";import{f as k}from"./find.1c4de7eb.js";import"./toInteger.4703179c.js";import{C as T}from"./index.bb4a6f14.js";import{P as I}from"./index.33526268.js";const V=[{role:"President",initials:"BD",firstName:"Beccy",lastName:"Dawber",gender:"Female",contactMethods:[{type:"Phone",value:"0401 306 209"},{type:"Email",value:"president@bayswaterjfc.com.au"}]},{role:"Vice President",initials:"SR",firstName:"Steve",lastName:"Roberts",gender:"Male",contactMethods:[{type:"Phone",value:"0474 221 909"},{type:"Email",value:"vicepresident@bayswaterjfc.com.au"}]},{role:"Secretary",initials:"MH",firstName:"Mark",lastName:"Hindson",gender:"Male",contactMethods:[{type:"Phone",value:"0419 149 500"},{type:"Email",value:"secretary@bayswaterjfc.com.au"}]},{role:"Treasurer",initials:"GP",firstName:"Gael",lastName:"Peters",gender:"Female",contactMethods:[{type:"Phone",value:"0409 809 611"},{type:"Email",value:"treasurer@bayswaterjfc.com.au"}]},{role:"Registrar",initials:"AR",firstName:"Andrew",lastName:"Robertson",gender:"Male",contactMethods:[{type:"Phone",value:"0425 807 059"},{type:"Email",value:"registrar@bayswaterjfc.com.au"}]},{role:"Auskick Coordinator",initials:"CB",firstName:"Chris",lastName:"Bartling",gender:"Male",contactMethods:[{type:"Email",value:"chrisbartling@hotmail.com"}]},{role:"Head Trainer",initials:"KP",firstName:"Kim",lastName:"Phillips",gender:"Female",contactMethods:[{type:"Email",value:"littlekim.phillips@gmail.com"}]},{role:"Merchandise & Grants Coordinator",initials:"WG",firstName:"Wendy",lastName:"Gielen",gender:"Female",contactMethods:[{type:"Email",value:"wendygielen11@gmail.com"}]},{role:"Website Administrator",initials:"DP",firstName:"Danny",lastName:"Phillips",gender:"Male",contactMethods:[{type:"Email",value:"danny.phillips@thermon.com"}]},{role:"Website Administrator",initials:"PB",firstName:"Peter",lastName:"Buchstaller",gender:"Male",contactMethods:[{type:"Email",value:"peterbuch1974@gmail.com"}]},{role:"Child Safety Officer",initials:"TB",firstName:"Tracey",lastName:"Bird",gender:"Female",contactMethods:[{type:"Email",value:"childsafetyofficer@bayswaterjfc.com.au"}]},{role:"School Liaison Officer",initials:"MW",firstName:"Mick",lastName:"Walker",gender:"Male",contactMethods:[{type:"Email",value:"schoolcontact@bayswaterjfc.com.au"}]},{role:"Facility Management",initials:"CP",firstName:"Colin",lastName:"Page",gender:"Male",contactMethods:[{type:"Email",value:"colinp71@hotmail.com"}]},{role:"Awards Coordinator",initials:"NM",firstName:"Nicky",lastName:"Maxwell",gender:"Female",contactMethods:[{type:"Email",value:"maxwell.n@optusnet.com.au"}]},{role:"General Committee",initials:"SJ",firstName:"Shaun",lastName:"Jones",gender:"Male",contactMethods:[{type:"Email",value:"sboy_99@hotmail.com"}]},{role:"General Committee",initials:"BK",firstName:"Brad",lastName:"Knight",gender:"Male",contactMethods:[{type:"Email",value:"bak1978@hotmail.com"}]},{role:"General Committee",initials:"MM",firstName:"Mandy",lastName:"Maggs",gender:"Female",contactMethods:[{type:"Email",value:"mandymaggs9@gmail.com"}]},{role:"General Committee",initials:"AN",firstName:"Adrian",lastName:"Nye",gender:"Male",contactMethods:[{type:"Email",value:"teamnye3@gmail.com"}]},{role:"General Committee",initials:"DR",firstName:"Danea",lastName:"Roberts",gender:"Female",contactMethods:[{type:"Email",value:"danea74@gmail.com"}]}];function W(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=e(t);if(n){var o=e(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return a(this,r)}}function K(t,e,a){var n=t.slice();return n[6]=e[a].type,n[7]=e[a].value,n}function H(t){var e,a;return e=new T({props:{class:"mt-2",type:t[6],value:t[7],colour:t[4]}}),{c:function(){s(e.$$.fragment)},l:function(t){c(e.$$.fragment,t)},m:function(t,n){f(e,t,n),a=!0},p:function(t,a){var n={};2&a&&(n.type=t[6]),2&a&&(n.value=t[7]),e.$set(n)},i:function(t){a||(u(e.$$.fragment,t),a=!0)},o:function(t){m(e.$$.fragment,t),a=!1},d:function(t){h(e,t)}}}function J(t){var e,a,n,r,i,o,l,x,D;n=new S({props:{colour:t[4],initials:t[2],text:t[3]}}),o=new I({props:{class:"mt-2",colour:t[4],text:t[1].role}});for(var j=t[1].contactMethods,C=[],B=0;B<j.length;B+=1)C[B]=H(K(t,j,B));var G=function(t){return m(C[t],1,1,(function(){C[t]=null}))};return{c:function(){e=d("div"),a=d("div"),s(n.$$.fragment),r=p(),i=d("div"),s(o.$$.fragment),l=p();for(var t=0;t<C.length;t+=1)C[t].c();this.h()},l:function(t){e=v(t,"DIV",{class:!0});var s=g(e);a=v(s,"DIV",{class:!0});var f=g(a);c(n.$$.fragment,f),r=y(f),i=v(f,"DIV",{class:!0});var u=g(i);c(o.$$.fragment,u),l=y(u);for(var m=0;m<C.length;m+=1)C[m].l(u);u.forEach($),f.forEach($),s.forEach($),this.h()},h:function(){N(i,"class","flex flex-col text-sm"),N(a,"class","border border-gray-300 p-4 lg:p-6"),N(e,"class",x=t[0]+" p-2 sm:p-4")},m:function(t,s){M(t,e,s),b(e,a),f(n,a,null),b(a,r),b(a,i),f(o,i,null),b(i,l);for(var c=0;c<C.length;c+=1)C[c].m(i,null);D=!0},p:function(t,a){var n=E(a,1)[0],r={};if(2&n&&(r.text=t[1].role),o.$set(r),18&n){var l;for(j=t[1].contactMethods,l=0;l<j.length;l+=1){var s=K(t,j,l);C[l]?(C[l].p(s,n),u(C[l],1)):(C[l]=H(s),C[l].c(),u(C[l],1),C[l].m(i,null))}for(w(),l=j.length;l<C.length;l+=1)G(l);P()}(!D||1&n&&x!==(x=t[0]+" p-2 sm:p-4"))&&N(e,"class",x)},i:function(t){if(!D){u(n.$$.fragment,t),u(o.$$.fragment,t);for(var e=0;e<j.length;e+=1)u(C[e]);D=!0}},o:function(t){m(n.$$.fragment,t),m(o.$$.fragment,t),C=C.filter(Boolean);for(var e=0;e<C.length;e+=1)m(C[e]);D=!1},d:function(t){t&&$(e),h(n),h(o),R(C,t)}}}function L(t,e,a){var n,r=e.class,i=void 0===r?"":r,o=e.member,l=o.initials,s="".concat(o.firstName," ").concat(o.lastName),c=A[null!==(n=o.gender)&&void 0!==n?n:F];return t.$$set=function(t){"class"in t&&a(0,i=t.class),"member"in t&&a(1,o=t.member)},[i,o,l,s,c]}var O=function(e){t(s,l);var a=W(s);function s(t){var e;return n(this,s),e=a.call(this),r(o(e),t,L,J,i,{class:0,member:1}),e}return s}();function _(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=e(t);if(n){var o=e(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return a(this,r)}}function q(t,e,a){var n=t.slice();return n[2]=e[a],n}function z(t){var e,a;return{c:function(){e=d("p"),a=D("There are no committee members"),this.h()},l:function(t){e=v(t,"P",{class:!0});var n=g(e);a=j(n,"There are no committee members"),n.forEach($),this.h()},h:function(){N(e,"class","p-4")},m:function(t,n){M(t,e,n),b(e,a)},d:function(t){t&&$(e)}}}function Q(t){var e,a;return e=new O({props:{class:"w-full md:w-1/2 lg:w-1/3 xl:w-1/4",member:t[2]}}),{c:function(){s(e.$$.fragment)},l:function(t){c(e.$$.fragment,t)},m:function(t,n){f(e,t,n),a=!0},p:x,i:function(t){a||(u(e.$$.fragment,t),a=!0)},o:function(t){m(e.$$.fragment,t),a=!1},d:function(t){h(e,t)}}}function U(t){for(var e,a,n,r=t[0],i=[],o=0;o<r.length;o+=1)i[o]=Q(q(t,r,o));var l=function(t){return m(i[t],1,1,(function(){i[t]=null}))},s=null;return r.length||(s=z()),{c:function(){e=d("div"),a=d("div");for(var t=0;t<i.length;t+=1)i[t].c();s&&s.c(),this.h()},l:function(t){e=v(t,"DIV",{class:!0});var n=g(e);a=v(n,"DIV",{class:!0});for(var r=g(a),o=0;o<i.length;o+=1)i[o].l(r);s&&s.l(r),r.forEach($),n.forEach($),this.h()},h:function(){N(a,"class","flex flex-wrap -m-4 sm:p-4"),N(e,"class","container mx-auto xl:py-10")},m:function(t,r){M(t,e,r),b(e,a);for(var o=0;o<i.length;o+=1)i[o].m(a,null);s&&s.m(a,null),n=!0},p:function(t,e){var n=E(e,1)[0];if(1&n){var o;for(r=t[0],o=0;o<r.length;o+=1){var c=q(t,r,o);i[o]?(i[o].p(c,n),u(i[o],1)):(i[o]=Q(c),i[o].c(),u(i[o],1),i[o].m(a,null))}for(w(),o=r.length;o<i.length;o+=1)l(o);P(),r.length?s&&(s.d(1),s=null):s||((s=z()).c(),s.m(a,null))}},i:function(t){if(!n){for(var e=0;e<r.length;e+=1)u(i[e]);n=!0}},o:function(t){i=i.filter(Boolean);for(var e=0;e<i.length;e+=1)m(i[e]);n=!1},d:function(t){t&&$(e),R(i,t),s&&s.d()}}}function X(t,e,a){var n=e.state,r=void 0===n?null:n,i=r.committeeList;return C.set("Committee"),t.$$set=function(t){"state"in t&&a(1,r=t.state)},[i,r]}var Y=function(e){t(s,l);var a=_(s);function s(t){var e;return n(this,s),e=a.call(this),r(o(e),t,X,U,i,{state:1}),e}return s}();function Z(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=e(t);if(n){var o=e(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return a(this,r)}}function tt(t){var e,a;return e=new Y({props:{state:t[0]}}),{c:function(){s(e.$$.fragment)},l:function(t){c(e.$$.fragment,t)},m:function(t,n){f(e,t,n),a=!0},p:function(t,a){var n={};1&E(a,1)[0]&&(n.state=t[0]),e.$set(n)},i:function(t){a||(u(e.$$.fragment,t),a=!0)},o:function(t){m(e.$$.fragment,t),a=!1},d:function(t){h(e,t)}}}function et(t,e){return{state:{committeeList:G(V,(t=>{return{role:t.role,initials:t.initials,firstName:t.firstName,lastName:t.lastName,gender:t.gender,contactMethods:(e=t.contactMethods,[null!==(a=k(e,(({type:t})=>"Phone"===t)))&&void 0!==a?a:{type:"Phone",value:null},null!==(n=k(e,(({type:t})=>"Email"===t)))&&void 0!==n?n:{type:"Email",value:null}])};var e,a,n}))}}}function at(t,e,a){var n=e.state,r=void 0===n?null:n;return B((function(){return window.scrollTo(0,0)})),t.$$set=function(t){"state"in t&&a(0,r=t.state)},[r]}var nt=function(e){t(s,l);var a=Z(s);function s(t){var e;return n(this,s),e=a.call(this),r(o(e),t,at,tt,i,{state:0}),e}return s}();export default nt;export{et as preload};
