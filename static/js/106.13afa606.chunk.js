"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[106],{106:function(e,t,n){n.r(t);var r=n(439),a=n(791),c=n(689),i=n(87),o=n(529),u=n(184);t.default=function(){var e,t,n=(0,a.useState)(""),s=(0,r.Z)(n,2),p=s[0],f=s[1],h=(0,c.UO)().movieId,l=(0,c.TH)(),v=(0,a.useRef)(null!==(e=null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");console.log("ref",v);(0,a.useEffect)((function(){(0,o.TP)(h).then((function(e){return e.json()})).then((function(e){f(e)}))}),[h]);var d=p.original_title,m=p.poster_path,g=p.overview,x=p.vote_average,w=p.genres,k=p.release_date;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.OL,{to:v.current,children:"Go Back"}),(0,u.jsxs)("h2",{children:[d,"(",null===k||void 0===k?void 0:k.slice(0,4),")"]}),(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+m,alt:""}),(0,u.jsxs)("p",{children:["Overview: ",g]}),(0,u.jsxs)("p",{children:["User Score: ",x]}),(0,u.jsxs)("p",{children:["Genres: ",null===w||void 0===w?void 0:w.map((function(e){return e.name})).join(", ")]}),(0,u.jsx)(i.OL,{to:"credits",children:"To Credits"}),(0,u.jsx)(i.OL,{to:"reviews",children:" To Reviews"}),(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(c.j3,{})})]})}},529:function(e,t,n){function r(e,t,n,r,a,c,i){try{var o=e[c](i),u=o.value}catch(s){return void n(s)}o.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var i=e.apply(t,n);function o(e){r(i,a,c,o,u,"next",e)}function u(e){r(i,a,c,o,u,"throw",e)}o(void 0)}))}}n.d(t,{HI:function(){return p},zv:function(){return v},TP:function(){return h},tx:function(){return m},z5:function(){return u}});var c=n(687),i=n.n(c),o="8ea73f499a52c9d06a5899ab37ef8d4c";function u(){return s.apply(this,arguments)}function s(){return(s=a(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(o));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=a(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=a(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=a(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=a(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=106.13afa606.chunk.js.map