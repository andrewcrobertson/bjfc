import{c as r,d as n,i as t,e,f as u,g as i,b as a,h as o}from"./map.0e755dd5.js";var f=function(r,n){var t=r.length;for(r.sort(n);t--;)r[t]=r[t].value;return r};var l=function(n,t){if(n!==t){var e=void 0!==n,u=null===n,i=n==n,a=r(n),o=void 0!==t,f=null===t,l=t==t,v=r(t);if(!f&&!v&&!a&&n>t||a&&o&&l&&!f&&!v||u&&o&&l||!e&&l||!i)return 1;if(!u&&!a&&!v&&n<t||v&&e&&i&&!u&&!a||f&&e&&i||!o&&i||!l)return-1}return 0};var v=function(r,n,t){for(var e=-1,u=r.criteria,i=n.criteria,a=u.length,o=t.length;++e<a;){var f=l(u[e],i[e]);if(f)return e>=o?f:f*("desc"==t[e]?-1:1)}return r.index-n.index};var c=function(r,l,c){l=l.length?n(l,(function(r){return t(r)?function(n){return e(n,1===r.length?r[0]:r)}:r})):[u];var s=-1;l=n(l,i(a));var d=o(r,(function(r,t,e){return{criteria:n(l,(function(n){return n(r)})),index:++s,value:r}}));return f(d,(function(r,n){return v(r,n,c)}))};var s=function(r,n,e,u){return null==r?[]:(t(n)||(n=null==n?[]:[n]),t(e=u?void 0:e)||(e=null==e?[]:[e]),c(r,n,e))};export{s as o};