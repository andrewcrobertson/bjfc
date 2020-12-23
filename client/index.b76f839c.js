import{S as t,i as e,s as n,G as a,k as r,l as i,n as o,p as s,v as u,w as l,x as c,z as d,A as f,B as h,C as m,D as g,E as v,t as w,m as p,H as b}from"./client.40ef246f.js";import{t as y,s as M}from"./map.0e755dd5.js";import{S as D,C as k}from"./index.48b38ad4.js";import{_ as x,a as T,L as S}from"./theme.d43d054b.js";import{_ as C}from"./_baseFindIndex.6ee7d5bf.js";function N(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function j(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function W(t){j(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var $={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function P(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var E={date:P({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:P({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:P({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},X={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function F(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;a=t.values[u]||t.values[s]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function U(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=a.match(o);if(!s)return null;var u,l=s[0],c=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(c)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(c,(function(t){return t.test(l)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(c,(function(t){return t.test(l)})),u=t.valueCallback?t.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(l.length)}}}var A,z={code:"en-US",formatDistance:function(t,e,n){var a;return n=n||{},a="string"==typeof $[t]?$[t]:1===e?$[t].one:$[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:E,formatRelative:function(t,e,n,a){return X[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:F({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:F({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:F({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:F({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:F({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(A={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(A.matchPattern);if(!r)return null;var i=r[0],o=n.match(A.parsePattern);if(!o)return null;var s=A.valueCallback?A.valueCallback(o[0]):o[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(i.length)}}),era:U({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:U({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:U({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:U({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:U({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Y(t){return t.getTime()%6e4}function B(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+Y(e))%6e4:Y(e))}const I="Unknown";function H(t,e){j(2,arguments);var n=W(t),a=W(e),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}function O(t,e){j(2,arguments);var n=W(t),a=W(e),r=n.getFullYear()-a.getFullYear(),i=n.getMonth()-a.getMonth();return 12*r+i}function R(t,e){j(2,arguments);var n=W(t),a=W(e);return n.getTime()-a.getTime()}function q(t,e){j(2,arguments);var n=W(t),a=W(e),r=H(n,a),i=Math.abs(O(n,a));n.setMonth(n.getMonth()-r*i);var o=H(n,a)===-r,s=r*(i-o);return 0===s?0:s}function J(t,e){j(2,arguments);var n=R(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}function Z(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})e.hasOwnProperty(n)&&(t[n]=e[n]);return t}({},t)}function V(t,e,n){j(2,arguments);var a=n||{},r=a.locale||z;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=H(t,e);if(isNaN(i))throw new RangeError("Invalid time value");var o,s,u=Z(a);u.addSuffix=Boolean(a.addSuffix),u.comparison=i,i>0?(o=W(e),s=W(t)):(o=W(t),s=W(e));var l,c=J(s,o),d=(B(s)-B(o))/1e3,f=Math.round((c-d)/60);if(f<2)return a.includeSeconds?c<5?r.formatDistance("lessThanXSeconds",5,u):c<10?r.formatDistance("lessThanXSeconds",10,u):c<20?r.formatDistance("lessThanXSeconds",20,u):c<40?r.formatDistance("halfAMinute",null,u):c<60?r.formatDistance("lessThanXMinutes",1,u):r.formatDistance("xMinutes",1,u):0===f?r.formatDistance("lessThanXMinutes",1,u):r.formatDistance("xMinutes",f,u);if(f<45)return r.formatDistance("xMinutes",f,u);if(f<90)return r.formatDistance("aboutXHours",1,u);if(f<1440){var h=Math.round(f/60);return r.formatDistance("aboutXHours",h,u)}if(f<2520)return r.formatDistance("xDays",1,u);if(f<43200){var m=Math.round(f/1440);return r.formatDistance("xDays",m,u)}if(f<86400)return l=Math.round(f/43200),r.formatDistance("aboutXMonths",l,u);if((l=q(s,o))<12){var g=Math.round(f/43200);return r.formatDistance("xMonths",g,u)}var v=l%12,w=Math.floor(l/12);return v<3?r.formatDistance("aboutXYears",w,u):v<9?r.formatDistance("overXYears",w,u):r.formatDistance("almostXYears",w+1,u)}var L={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Q=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,_=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,G=/^([+-])(\d{2})(?::?(\d{2}))?$/;function K(t,e){j(1,arguments);var n=e||{},a=null==n.additionalDigits?2:N(n.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var r,i=tt(t);if(i.date){var o=et(i.date,a);r=nt(o.restDateString,o.year)}if(isNaN(r)||!r)return new Date(NaN);var s,u=r.getTime(),l=0;if(i.time&&(l=rt(i.time),isNaN(l)||null===l))return new Date(NaN);if(!i.timezone){var c=new Date(u+l),d=new Date(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds());return d.setFullYear(c.getUTCFullYear()),d}return s=ot(i.timezone),isNaN(s)?new Date(NaN):new Date(u+l+s)}function tt(t){var e,n={},a=t.split(L.dateTimeDelimiter);if(a.length>2)return n;if(/:/.test(a[0])?(n.date=null,e=a[0]):(n.date=a[0],e=a[1],L.timeZoneDelimiter.test(n.date)&&(n.date=t.split(L.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var r=L.timezone.exec(e);r?(n.time=e.replace(r[1],""),n.timezone=r[1]):n.time=e}return n}function et(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(n);if(!a)return{year:null};var r=a[1]&&parseInt(a[1]),i=a[2]&&parseInt(a[2]);return{year:null==i?r:100*i,restDateString:t.slice((a[1]||a[2]).length)}}function nt(t,e){if(null===e)return null;var n=t.match(Q);if(!n)return null;var a=!!n[4],r=at(n[1]),i=at(n[2])-1,o=at(n[3]),s=at(n[4]),u=at(n[5])-1;if(a)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,s,u)?function(t,e,n){var a=new Date(0);a.setUTCFullYear(t,0,4);var r=a.getUTCDay()||7,i=7*(e-1)+n+1-r;return a.setUTCDate(a.getUTCDate()+i),a}(e,s,u):new Date(NaN);var l=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(st[e]||(ut(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(ut(t)?366:365)}(e,r)?(l.setUTCFullYear(e,i,Math.max(r,o)),l):new Date(NaN)}function at(t){return t?parseInt(t):1}function rt(t){var e=t.match(_);if(!e)return null;var n=it(e[1]),a=it(e[2]),r=it(e[3]);return function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,a,r)?36e5*n+6e4*a+1e3*r:NaN}function it(t){return t&&parseFloat(t.replace(",","."))||0}function ot(t){if("Z"===t)return 0;var e=t.match(G);if(!e)return 0;var n="+"===e[1]?-1:1,a=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,r)?n*(36e5*a+6e4*r):NaN}var st=[31,null,31,30,31,30,31,31,30,31,30,31];function ut(t){return t%400==0||t%4==0&&t%100}const lt=t=>null===t?null:function(t,e){return j(1,arguments),V(t,Date.now(),e)}(K(t),{addSuffix:!0});var ct=function(t){return t!=t};var dt=function(t,e,n){for(var a=n-1,r=t.length;++a<r;)if(t[a]===e)return a;return-1};var ft=function(t,e,n){return e==e?dt(t,e,n):C(t,ct,n)};var ht=function(t,e){for(var n=t.length;n--&&ft(e,t[n],0)>-1;);return n};var mt=function(t,e){for(var n=-1,a=t.length;++n<a&&ft(e,t[n],0)>-1;);return n},gt=/^\s+|\s+$/g;var vt=function(t,e,n){if((t=y(t))&&(n||void 0===e))return t.replace(gt,"");if(!t||!(e=M(e)))return t;var a=x(t),r=x(e),i=mt(a,r),o=ht(a,r)+1;return T(a,i,o).join("")};const wt=t=>{var e,n,a;switch(t.status){case"Insured":return"Insured";case"Registered":return"Registered";case"Recent":return vt(`Recent ${null!==(e=lt(t.lastTransactionDate))&&void 0!==e?e:""}`);case"Transferred":return vt(`${t.club} ${null!==(n=lt(t.lastTransferDate))&&void 0!==n?n:""}`);case"Historical":return vt(`Historical ${null!==(a=lt(t.lastTransactionDate))&&void 0!==a?a:""}`);case I:default:return"Unknown"}};function pt(t){let e,n;return{c(){e=a("svg"),n=a("path"),this.h()},l(t){e=r(t,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0},1);var a=i(e);n=r(a,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),i(n).forEach(o),a.forEach(o),this.h()},h(){s(n,"stroke-linecap","round"),s(n,"stroke-linejoin","round"),s(n,"stroke-width","2"),s(n,"d","M13 5l7 7-7 7M5 5l7 7-7 7"),s(e,"class",t[0]),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"fill","none"),s(e,"viewBox","0 0 24 24"),s(e,"stroke","currentColor")},m(t,a){u(t,e,a),l(e,n)},p(t,[n]){1&n&&s(e,"class",t[0])},i:c,o:c,d(t){t&&o(e)}}}function bt(t,e,n){let{class:a=""}=e;return t.$$set=t=>{"class"in t&&n(0,a=t.class)},[a]}class yt extends t{constructor(t){super(),e(this,t,bt,pt,n,{class:0})}}function Mt(t){let e,n;return{c(){e=a("svg"),n=a("path"),this.h()},l(t){e=r(t,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0},1);var a=i(e);n=r(a,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),i(n).forEach(o),a.forEach(o),this.h()},h(){s(n,"stroke-linecap","round"),s(n,"stroke-linejoin","round"),s(n,"stroke-width","2"),s(n,"d","M9 5l7 7-7 7"),s(e,"class",t[0]),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"fill","none"),s(e,"viewBox","0 0 24 24"),s(e,"stroke","currentColor")},m(t,a){u(t,e,a),l(e,n)},p(t,[n]){1&n&&s(e,"class",t[0])},i:c,o:c,d(t){t&&o(e)}}}function Dt(t,e,n){let{class:a=""}=e;return t.$$set=t=>{"class"in t&&n(0,a=t.class)},[a]}class kt extends t{constructor(t){super(),e(this,t,Dt,Mt,n,{class:0})}}function xt(t){let e,n;return{c(){e=a("svg"),n=a("path"),this.h()},l(t){e=r(t,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0},1);var a=i(e);n=r(a,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),i(n).forEach(o),a.forEach(o),this.h()},h(){s(n,"stroke-linecap","round"),s(n,"stroke-linejoin","round"),s(n,"stroke-width","2"),s(n,"d","M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"),s(e,"class",t[0]),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"fill","none"),s(e,"viewBox","0 0 24 24"),s(e,"stroke","currentColor")},m(t,a){u(t,e,a),l(e,n)},p(t,[n]){1&n&&s(e,"class",t[0])},i:c,o:c,d(t){t&&o(e)}}}function Tt(t,e,n){let{class:a=""}=e;return t.$$set=t=>{"class"in t&&n(0,a=t.class)},[a]}class St extends t{constructor(t){super(),e(this,t,Tt,xt,n,{class:0})}}function Ct(t){let e,n;return{c(){e=a("svg"),n=a("path"),this.h()},l(t){e=r(t,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0},1);var a=i(e);n=r(a,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),i(n).forEach(o),a.forEach(o),this.h()},h(){s(n,"stroke-linecap","round"),s(n,"stroke-linejoin","round"),s(n,"stroke-width","2"),s(n,"d","M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"),s(e,"class",t[0]),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"fill","none"),s(e,"viewBox","0 0 24 24"),s(e,"stroke","currentColor")},m(t,a){u(t,e,a),l(e,n)},p(t,[n]){1&n&&s(e,"class",t[0])},i:c,o:c,d(t){t&&o(e)}}}function Nt(t,e,n){let{class:a=""}=e;return t.$$set=t=>{"class"in t&&n(0,a=t.class)},[a]}class jt extends t{constructor(t){super(),e(this,t,Nt,Ct,n,{class:0})}}function Wt(t){let e;return{c(){e=w(t[2])},l(n){e=p(n,t[2])},m(t,n){u(t,e,n)},p(t,n){4&n&&b(e,t[2])},d(t){t&&o(e)}}}function $t(t){let e,n;return e=new S({props:{icon:t[3],class:t[0],iconClass:t[1],$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){d(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){h(e,t,a),n=!0},p(t,[n]){const a={};1&n&&(a.class=t[0]),2&n&&(a.iconClass=t[1]),68&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Pt(t,e,n){let{class:a=""}=e,{iconClass:r=""}=e,{status:i=I}=e,{text:o=null}=e;const s={Insured:D,Registered:k,Recent:kt,Historical:yt,Transferred:jt,[I]:St}[null!=i?i:I];return t.$$set=t=>{"class"in t&&n(0,a=t.class),"iconClass"in t&&n(1,r=t.iconClass),"status"in t&&n(4,i=t.status),"text"in t&&n(2,o=t.text)},[a,r,o,s,i]}class Et extends t{constructor(t){super(),e(this,t,Pt,$t,n,{class:0,iconClass:1,status:4,text:2})}}export{Et as S,ft as _,N as a,wt as b,H as c,vt as d,B as g,z as l,K as p,j as r,W as t};
