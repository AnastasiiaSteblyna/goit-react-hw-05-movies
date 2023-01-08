"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[166],{866:function(e,t,n){var r=n(643),a=n(184);t.Z=function(){return(0,a.jsx)(r.p2,{height:"50",width:"50",color:"#d1d1d1",ariaLabel:"circles-loading",wrapperStyle:{marginLeft:"auto",marginRight:"auto"},wrapperClass:"",visible:!0})}},166:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(866),s=n(471),o=n(791),f=n(87),p=n(390),l=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,o.useState)(!1),d=(0,a.Z)(v,2),h=d[0],m=d[1],g=(0,f.lr)({}),w=(0,a.Z)(g,2),x=w[0],y=w[1],Z=x.get("query");return(0,o.useEffect)((function(){if(Z){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,p.Z.findByKeyword(Z);case 4:t=e.sent,c(t),console.log(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[Z]),(0,l.jsxs)("main",{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({query:e.target.elements.query.value.toLowerCase()})},children:[(0,l.jsx)("input",{type:"text",name:"query",autoFocus:!0}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),h&&(0,l.jsx)(i.Z,{}),n&&(0,l.jsx)(s.Z,{films:n})]})}},471:function(e,t,n){var r=n(689),a=n(87),c=n(909),u=n(184);t.Z=function(e){var t=e.films,n=(0,r.TH)();return(0,u.jsx)("ul",{className:c.Z.list,children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{className:c.Z.item,to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},390:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),u=n(263),i="4327815596da5129cea06268029b0666",s="https://api.themoviedb.org/3",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&include_adult=false"),{params:{page:"".concat(n)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={findTrendingMovies:o,findByKeyword:f,findActors:l,findDetails:p,findReview:v};t.Z=d}}]);
//# sourceMappingURL=166.b5b5f16c.chunk.js.map