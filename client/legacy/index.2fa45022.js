import{_ as t,a as n,b as r,c as e,i as a,s as c,d as s,S as o,f,A as i,g as u,h as l,j as $,B as p,m,l as d,n as h,v as g,C as v,w as y,D as x,E as b,F as w,G as R,Q as j,U as D,V as E,t as T,k as C,R as S,L as A,ah as B,ai as I,y as M,z as P,H}from"./client.8cf8d71d.js";import{_ as O,t as V}from"./trimEnd.d587883d.js";import"./index.94dcd4dc.js";import{A as k,h as N}from"./theme.d329695d.js";import"./join.af080718.js";import{B as G,d as _,p as z}from"./index.52bd6a85.js";import{S as F}from"./index.e46d481f.js";import"./index.efe49176.js";import{T as L,a as Q,b as U,c as W}from"./index.f83af232.js";function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(e){var s=n(this).constructor;a=Reflect.construct(c,arguments,s)}else a=c.apply(this,arguments);return r(this,a)}}function J(t){var n,r,e,a,c,s,o,j,D;return r=new k({props:{colour:t[6],initials:t[2],text:t[3]}}),c=new F({props:{class:"self-end",iconClass:"text-"+t[6]+"-500",status:t[4],text:t[1].statusInfo}}),o=new G({props:{class:"self-end",iconClass:"text-"+t[6]+"-500",label:t[1].dateOfBirth+" (age: "+t[7]+")"}}),{c:function(){n=f("a"),i(r.$$.fragment),e=u(),a=f("span"),i(c.$$.fragment),s=u(),i(o.$$.fragment),this.h()},l:function(t){n=l(t,"A",{class:!0,href:!0});var f=$(n);p(r.$$.fragment,f),e=m(f),a=l(f,"SPAN",{class:!0});var i=$(a);p(c.$$.fragment,i),s=m(i),p(o.$$.fragment,i),i.forEach(d),f.forEach(d),this.h()},h:function(){h(a,"class","flex flex-col text-sm space-y-1"),h(n,"class",j=t[0]+" flex flex-col sm:flex-row sm:justify-between p-2"),h(n,"href",t[5])},m:function(t,f){g(t,n,f),v(r,n,null),y(n,e),y(n,a),v(c,a,null),y(a,s),v(o,a,null),D=!0},p:function(t,r){var e=x(r,1)[0],a={};2&e&&(a.text=t[1].statusInfo),c.$set(a);var s={};2&e&&(s.label=t[1].dateOfBirth+" (age: "+t[7]+")"),o.$set(s),(!D||1&e&&j!==(j=t[0]+" flex flex-col sm:flex-row sm:justify-between p-2"))&&h(n,"class",j)},i:function(t){D||(b(r.$$.fragment,t),b(c.$$.fragment,t),b(o.$$.fragment,t),D=!0)},o:function(t){w(r.$$.fragment,t),w(c.$$.fragment,t),w(o.$$.fragment,t),D=!1},d:function(t){t&&d(n),R(r),R(c),R(o)}}}function K(t,n,r){var e,a=n.class,c=void 0===a?"":a,s=n.player,o=s.initials,f="".concat(s.lastName,", ").concat(s.firstName),i=s.status,u=j(s.footyWebNumber),l=null!==(e=N[s.gender])&&void 0!==e?e:"gray",$=_(new Date,z(s.dateOfBirth));return t.$$set=function(t){"class"in t&&r(0,c=t.class),"player"in t&&r(1,s=t.player)},[c,s,o,f,i,u,l,$]}var X=function(n){t(f,o);var r=q(f);function f(t){var n;return e(this,f),n=r.call(this),a(s(n),t,K,J,c,{class:0,player:1}),n}return f}();function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(e){var s=n(this).constructor;a=Reflect.construct(c,arguments,s)}else a=c.apply(this,arguments);return r(this,a)}}function Z(t,n,r){var e=t.slice();return e[3]=n[r],e[5]=r,e}function tt(t){var n,r;return{c:function(){n=f("p"),r=T(t[2]),this.h()},l:function(e){n=l(e,"P",{class:!0});var a=$(n);r=C(a,t[2]),a.forEach(d),this.h()},h:function(){h(n,"class","p-4")},m:function(t,e){g(t,n,e),y(n,r)},p:function(t,n){4&n&&S(r,t[2])},d:function(t){t&&d(n)}}}function nt(t){var n,r;return n=new X({props:{class:"w-full "+(0===t[5]?"border-t":"")+" border-r border-b border-l border-gray-300",player:t[3]}}),{c:function(){i(n.$$.fragment)},l:function(t){p(n.$$.fragment,t)},m:function(t,e){v(n,t,e),r=!0},p:function(t,r){var e={};2&r&&(e.player=t[3]),n.$set(e)},i:function(t){r||(b(n.$$.fragment,t),r=!0)},o:function(t){w(n.$$.fragment,t),r=!1},d:function(t){R(n,t)}}}function rt(t){for(var n,r,e,a=t[1],c=[],s=0;s<a.length;s+=1)c[s]=nt(Z(t,a,s));var o=function(t){return w(c[t],1,1,(function(){c[t]=null}))},i=null;return a.length||(i=tt(t)),{c:function(){n=f("div");for(var t=0;t<c.length;t+=1)c[t].c();i&&i.c(),this.h()},l:function(t){n=l(t,"DIV",{class:!0});for(var r=$(n),e=0;e<c.length;e+=1)c[e].l(r);i&&i.l(r),r.forEach(d),this.h()},h:function(){h(n,"class",r=t[0]+" flex flex-wrap")},m:function(t,r){g(t,n,r);for(var a=0;a<c.length;a+=1)c[a].m(n,null);i&&i.m(n,null),e=!0},p:function(t,s){var f=x(s,1)[0];if(6&f){var u;for(a=t[1],u=0;u<a.length;u+=1){var l=Z(t,a,u);c[u]?(c[u].p(l,f),b(c[u],1)):(c[u]=nt(l),c[u].c(),b(c[u],1),c[u].m(n,null))}for(D(),u=a.length;u<c.length;u+=1)o(u);E(),!a.length&&i?i.p(t,f):a.length?i&&(i.d(1),i=null):((i=tt(t)).c(),i.m(n,null))}(!e||1&f&&r!==(r=t[0]+" flex flex-wrap"))&&h(n,"class",r)},i:function(t){if(!e){for(var n=0;n<a.length;n+=1)b(c[n]);e=!0}},o:function(t){c=c.filter(Boolean);for(var n=0;n<c.length;n+=1)w(c[n]);e=!1},d:function(t){t&&d(n),A(c,t),i&&i.d()}}}function et(t,n,r){var e=n.class,a=void 0===e?"":e,c=n.players,s=void 0===c?[]:c,o=n.emptyMessage,f=void 0===o?"":o;return t.$$set=function(t){"class"in t&&r(0,a=t.class),"players"in t&&r(1,s=t.players),"emptyMessage"in t&&r(2,f=t.emptyMessage)},[a,s,f]}var at=function(n){t(f,o);var r=Y(f);function f(t){var n;return e(this,f),n=r.call(this),a(s(n),t,et,rt,c,{class:0,players:1,emptyMessage:2}),n}return f}();function ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(e){var s=n(this).constructor;a=Reflect.construct(c,arguments,s)}else a=c.apply(this,arguments);return r(this,a)}}function st(t){var n;return{c:function(){n=T("Transferred")},l:function(t){n=C(t,"Transferred")},m:function(t,r){g(t,n,r)},d:function(t){t&&d(n)}}}function ot(t){var n;return{c:function(){n=T("Historical")},l:function(t){n=C(t,"Historical")},m:function(t,r){g(t,n,r)},d:function(t){t&&d(n)}}}function ft(t){var n,r,e,a;return n=new W({props:{class:"focus:outline-none inline-block rounded-t py-2 px-4",selectedClass:"border-b border-gray-300",$$slots:{default:[st]},$$scope:{ctx:t}}}),e=new W({props:{class:"focus:outline-none inline-block rounded-t py-2 px-4",selectedClass:"border-b border-gray-300",$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c:function(){i(n.$$.fragment),r=u(),i(e.$$.fragment)},l:function(t){p(n.$$.fragment,t),r=m(t),p(e.$$.fragment,t)},m:function(t,c){v(n,t,c),g(t,r,c),v(e,t,c),a=!0},p:function(t,r){var a={};64&r&&(a.$$scope={dirty:r,ctx:t}),n.$set(a);var c={};64&r&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i:function(t){a||(b(n.$$.fragment,t),b(e.$$.fragment,t),a=!0)},o:function(t){w(n.$$.fragment,t),w(e.$$.fragment,t),a=!1},d:function(t){R(n,t),t&&d(r),R(e,t)}}}function it(t){var n,r;return n=new at({props:{class:"mt-2",players:t[0].playersTransferred,emptyMessage:"There are no active players"}}),{c:function(){i(n.$$.fragment)},l:function(t){p(n.$$.fragment,t)},m:function(t,e){v(n,t,e),r=!0},p:function(t,r){var e={};1&r&&(e.players=t[0].playersTransferred),n.$set(e)},i:function(t){r||(b(n.$$.fragment,t),r=!0)},o:function(t){w(n.$$.fragment,t),r=!1},d:function(t){R(n,t)}}}function ut(t){var n,r;return n=new at({props:{class:"mt-2",players:t[0].playersHistorical,emptyMessage:"There are no recent players"}}),{c:function(){i(n.$$.fragment)},l:function(t){p(n.$$.fragment,t)},m:function(t,e){v(n,t,e),r=!0},p:function(t,r){var e={};1&r&&(e.players=t[0].playersHistorical),n.$set(e)},i:function(t){r||(b(n.$$.fragment,t),r=!0)},o:function(t){w(n.$$.fragment,t),r=!1},d:function(t){R(n,t)}}}function lt(t){var n,r,e,a,c,s;return n=new Q({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),e=new U({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),c=new U({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c:function(){i(n.$$.fragment),r=u(),i(e.$$.fragment),a=u(),i(c.$$.fragment)},l:function(t){p(n.$$.fragment,t),r=m(t),p(e.$$.fragment,t),a=m(t),p(c.$$.fragment,t)},m:function(t,o){v(n,t,o),g(t,r,o),v(e,t,o),g(t,a,o),v(c,t,o),s=!0},p:function(t,r){var a={};64&r&&(a.$$scope={dirty:r,ctx:t}),n.$set(a);var s={};65&r&&(s.$$scope={dirty:r,ctx:t}),e.$set(s);var o={};65&r&&(o.$$scope={dirty:r,ctx:t}),c.$set(o)},i:function(t){s||(b(n.$$.fragment,t),b(e.$$.fragment,t),b(c.$$.fragment,t),s=!0)},o:function(t){w(n.$$.fragment,t),w(e.$$.fragment,t),w(c.$$.fragment,t),s=!1},d:function(t){R(n,t),t&&d(r),R(e,t),t&&d(a),R(c,t)}}}function $t(t){var n,r,e,a,c,s,o,j,D,E,S,A,B;return e=new k({props:{colour:t[3],initials:t[1],text:t[2]}}),A=new L({props:{class:"w-full",$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c:function(){n=f("div"),r=f("div"),i(e.$$.fragment),a=u(),c=f("div"),s=f("a"),o=T("Current"),j=u(),D=f("a"),E=T("Officials"),S=u(),i(A.$$.fragment),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var f=$(n);r=l(f,"DIV",{class:!0});var i=$(r);p(e.$$.fragment,i),a=m(i),c=l(i,"DIV",{class:!0});var u=$(c);s=l(u,"A",{class:!0,href:!0});var h=$(s);o=C(h,"Current"),h.forEach(d),j=m(u),D=l(u,"A",{class:!0,href:!0});var g=$(D);E=C(g,"Officials"),g.forEach(d),u.forEach(d),i.forEach(d),S=m(f),p(A.$$.fragment,f),f.forEach(d),this.h()},h:function(){h(s,"class","border border-gray-300 px-3 py-1"),h(s,"href",t[4]),h(D,"class","border border-gray-300 px-3 py-1"),h(D,"href",t[5]),h(c,"class","flex justify-end space-x-2 items-center text-sm"),h(r,"class","flex flex-col sm:flex-row sm:justify-between pb-5"),h(n,"class","container mx-auto xl:py-10")},m:function(t,f){g(t,n,f),y(n,r),v(e,r,null),y(r,a),y(r,c),y(c,s),y(s,o),y(c,j),y(c,D),y(D,E),y(n,S),v(A,n,null),B=!0},p:function(t,n){var r=x(n,1)[0],e={};65&r&&(e.$$scope={dirty:r,ctx:t}),A.$set(e)},i:function(t){B||(b(e.$$.fragment,t),b(A.$$.fragment,t),B=!0)},o:function(t){w(e.$$.fragment,t),w(A.$$.fragment,t),B=!1},d:function(t){t&&d(n),R(e),R(A)}}}function pt(t,n,r){var e=n.state,a=e.ageGroupCode,c=e.name,s=N[e.teamGender],o=B(e.code),f=I(e.code);return M.set("Team"),t.$$set=function(t){"state"in t&&r(0,e=t.state)},[e,a,c,s,o,f]}var mt=function(n){t(f,o);var r=ct(f);function f(t){var n;return e(this,f),n=r.call(this),a(s(n),t,pt,$t,c,{state:0}),n}return f}();function dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(e){var s=n(this).constructor;a=Reflect.construct(c,arguments,s)}else a=c.apply(this,arguments);return r(this,a)}}function ht(t){var n,r;return n=new mt({props:{state:t[0]}}),{c:function(){i(n.$$.fragment)},l:function(t){p(n.$$.fragment,t)},m:function(t,e){v(n,t,e),r=!0},p:function(t,r){var e={};1&x(r,1)[0]&&(e.state=t[0]),n.$set(e)},i:function(t){r||(b(n.$$.fragment,t),r=!0)},o:function(t){w(n.$$.fragment,t),r=!1},d:function(t){R(n,t)}}}function gt(t,n){return vt.apply(this,arguments)}function vt(){return(vt=O(P.mark((function t(n,r){var e,a;return P.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("".concat(V(n.path,"/")).concat("/"===n.path?"index":"",".json"));case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.abrupt("return",{state:a});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function yt(t,n,r){var e=n.state,a=void 0===e?null:e;return H((function(){return window.scrollTo(0,0)})),t.$$set=function(t){"state"in t&&r(0,a=t.state)},[a]}var xt=function(n){t(f,o);var r=dt(f);function f(t){var n;return e(this,f),n=r.call(this),a(s(n),t,yt,ht,c,{state:0}),n}return f}();export default xt;export{gt as preload};
