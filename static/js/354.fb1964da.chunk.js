"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[354],{866:function(e,n,t){var r=t(643),a=t(184);n.Z=function(){return(0,a.jsx)(r.p2,{height:"50",width:"50",color:"#d1d1d1",ariaLabel:"circles-loading",wrapperStyle:{marginLeft:"auto",marginRight:"auto"},wrapperClass:"",visible:!0})}},354:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),i=t.n(c),s=t(689),u=t(87),o=t(791),l=t(390),p=t(909),d=t(866),f=t(184);n.default=function(){var e,n,t=(0,s.UO)().movieId,c=(0,o.useState)(null),v=(0,a.Z)(c,2),h=v[0],x=v[1],m=(0,o.useState)(!1),g=(0,a.Z)(m,2),w=g[0],j=g[1],Z=(0,s.TH)();return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,l.Z.findDetails(t);case 4:n=e.sent,x(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.rU,{to:null!==(e=null===Z||void 0===Z||null===(n=Z.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies",children:(0,f.jsx)("button",{className:p.Z.btn_go,type:"button",children:"<= Go back"})}),w&&(0,f.jsx)(d.Z,{}),h&&(0,f.jsxs)("div",{className:p.Z.container,children:[(0,f.jsx)("img",{width:"300px",src:"https://image.tmdb.org/t/p/w500"+h.poster_path,alt:h.original_title}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h1",{children:[h.title," (",h.release_date.slice(0,4),")"]}),(0,f.jsxs)("p",{children:["User score: ",h.popularity]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:h.overview}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("ul",{className:p.Z.list,children:h.genres.map((function(e){return(0,f.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,f.jsxs)("div",{className:p.Z.container,children:[(0,f.jsx)("h2",{children:"Additional information"}),(0,f.jsxs)("ul",{className:p.Z.list,children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{className:p.Z.item,to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{className:p.Z.item,to:"review",children:"Review"})})]}),(0,f.jsx)(s.j3,{})]})]})}},390:function(e,n,t){var r=t(861),a=t(757),c=t.n(a),i=t(263),s="4327815596da5129cea06268029b0666",u="https://api.themoviedb.org/3",o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(n,"&include_adult=false"),{params:{page:"".concat(t)}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v={findTrendingMovies:o,findByKeyword:l,findActors:d,findDetails:p,findReview:f};n.Z=v}}]);
//# sourceMappingURL=354.fb1964da.chunk.js.map