"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[845],{866:function(e,n,t){var r=t(643),a=t(184);n.Z=function(){return(0,a.jsx)(r.p2,{height:"50",width:"50",color:"#d1d1d1",ariaLabel:"circles-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClass:"",visible:!0})}},845:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(866),s=t(791),o=t(689),p=t(390),f=t(909),l=t(184);n.default=function(){var e=(0,o.UO)(null).movieId,n=(0,s.useState)([]),t=(0,a.Z)(n,2),c=t[0],d=t[1],v=(0,s.useState)(!1),h=(0,a.Z)(v,2),g=h[0],w=h[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),n.prev=1,n.next=4,p.Z.findReview(e);case 4:t=n.sent,console.log(t),d(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:return n.prev=12,w(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,l.jsxs)(l.Fragment,{children:[g&&(0,l.jsx)(i.Z,{}),c&&(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:f.Z.list,children:c.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h3",{children:["Author: ",e.author]}),(0,l.jsx)("p",{children:e.content})]},e.id)}))})}),0===c.length&&(0,l.jsx)("h3",{className:f.Z.container,children:"We don't have any reviews for this movie"})]})}},390:function(e,n,t){var r=t(861),a=t(757),c=t.n(a),u=t(263),i="4327815596da5129cea06268029b0666",s="https://api.themoviedb.org/3",o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&include_adult=false"),{params:{page:"".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v={findTrendingMovies:o,findByKeyword:p,findActors:l,findDetails:f,findReview:d};n.Z=v}}]);
//# sourceMappingURL=845.b588f468.chunk.js.map