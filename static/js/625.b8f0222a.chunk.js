"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[625],{625:function(n,e,t){t.r(e);var r=t(861),a=t(439),c=t(757),i=t.n(c),u=t(791),s=t(390),o=t(866),p=t(471),f=t(909),l=t(184);e.default=function(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],d=(0,u.useState)(!1),v=(0,a.Z)(d,2),h=v[0],g=v[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),n.prev=1,n.next=4,s.Z.findTrendingMovies();case 4:e=n.sent,c(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,g(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{className:f.Z.caption,children:"Trending today:"}),h&&(0,l.jsx)(o.Z,{}),t&&(0,l.jsx)(p.Z,{films:t})]})}},866:function(n,e,t){var r=t(643),a=t(184);e.Z=function(){return(0,a.jsx)(r.p2,{height:"50",width:"50",color:"#d1d1d1",ariaLabel:"circles-loading",wrapperStyle:{marginLeft:"auto",marginRight:"auto"},wrapperClass:"",visible:!0})}},471:function(n,e,t){var r=t(689),a=t(87),c=t(909),i=t(184);e.Z=function(n){var e=n.films,t=(0,r.TH)();return(0,i.jsx)("ul",{className:c.Z.list,children:e.map((function(n){return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{className:c.Z.item,to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},390:function(n,e,t){var r=t(861),a=t(757),c=t.n(a),i=t(263),u="4327815596da5129cea06268029b0666",s="https://api.themoviedb.org/3",o=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(e,"&include_adult=false"),{params:{page:"".concat(t)}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v={findTrendingMovies:o,findByKeyword:p,findActors:l,findDetails:f,findReview:d};e.Z=v}}]);
//# sourceMappingURL=625.b8f0222a.chunk.js.map