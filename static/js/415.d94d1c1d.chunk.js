"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(t,e,n){n.r(e);var r=n(439),a=n(791),c=n(689),u=n(87),i=n(529),o=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1],p=(0,c.TH)();return(0,a.useEffect)((function(){(0,i.z5)().then((function(t){return t.json()})).then((function(t){s(t.results)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trend movies"}),(0,o.jsx)("ul",{children:n.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+t.backdrop_path,alt:t.title}),(0,o.jsx)("p",{children:t.title}),(0,o.jsx)(u.OL,{to:"/movies/".concat(t.id),state:{from:p},children:t.id})]},t.id)}))})]})}},529:function(t,e,n){function r(t,e,n,r,a,c,u){try{var i=t[c](u),o=i.value}catch(s){return void n(s)}i.done?e(o):Promise.resolve(o).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,c){var u=t.apply(e,n);function i(t){r(u,a,c,i,o,"next",t)}function o(t){r(u,a,c,i,o,"throw",t)}i(void 0)}))}}n.d(e,{HI:function(){return p},zv:function(){return v},TP:function(){return h},tx:function(){return m},z5:function(){return o}});var c=n(687),u=n.n(c),i="8ea73f499a52c9d06a5899ab37ef8d4c";function o(){return s.apply(this,arguments)}function s(){return(s=a(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=a(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=a(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=a(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=a(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.d94d1c1d.chunk.js.map