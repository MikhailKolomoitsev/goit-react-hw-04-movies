(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{52:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u}));var c=n(54),a=n.n(c),i="6acc6746be8af475302214b8237b9c48";function s(e){var t="".concat("/trending/all/day?api_key=").concat(i);a.a.get(t).then((function(e){return e.data.results})).then(e).catch((function(e){return e.message}))}function o(e,t){var n="/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false");a.a.get(n).then((function(e){return e.data.results.length?e.data.results:alert("Nothing found")})).then(t).catch((function(e){return e.message}))}function r(e,t){var n="/movie/".concat(e,"?api_key=").concat(i,"&language=en-US");a.a.get(n).then((function(e){return e.data})).then(t).catch((function(e){return e.message}))}function l(e,t){var n="/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1");a.a.get(n).then((function(e){return e.data.results})).then(t).catch((function(e){return e.message}))}function u(e,t){console.log("id",e);var n="/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US");a.a.get(n).then((function(e){return e.data.cast})).then(t).catch((function(e){return e.message}))}a.a.defaults.baseURL="https://api.themoviedb.org/3"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var c=n(53),a=n(3),i=n(0),s=n(52),o=n(9),r=n(1);function l(e){var t=e.url,n=e.location;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Additional information"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.c,{to:{pathname:"".concat(t,"/cast"),state:{from:n.state.from}},className:"add_link",activeClassName:"active_link",children:"Cast"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.c,{to:{pathname:"".concat(t,"/reviews"),state:{from:n.state.from}},className:"add_link",activeClassName:"active_link",children:"Reviews"})})]})]})}var u=n(14),d=n.n(u);function j(e){var t=e.movie,n=e.goBack;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{type:"button",onClick:n,children:"Go Back"}),Object(r.jsxs)("div",{className:"movie-card",children:[Object(r.jsx)("img",{className:"movie-image",src:"https://image.tmdb.org/t/p/w342/".concat(t.poster_path),alt:""}),Object(r.jsx)("h3",{className:"",children:t.title}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"bold",children:"Genre:"})," ",t.genres.map((function(e){return e.name})).join(", ")]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"bold",children:"Overview:"})," ",t.overview]})]})]})}var h=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,90))})),b=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,87))}));function v(){var e=Object(a.h)().movieId,t=Object(a.g)(),n=Object(a.f)(),o=Object(a.i)().url,u=Object(i.useState)(null),v=Object(c.a)(u,2),f=v[0],m=v[1];Object(i.useEffect)((function(){Object(s.a)(e,m)}),[e]),console.log(n),console.log(t);return Object(r.jsxs)(r.Fragment,{children:[f&&Object(r.jsx)(j,{movie:f,goBack:function(){var e,c,a;n.push(null!==(e=null===t||void 0===t||null===(c=t.state)||void 0===c?void 0:c.from)&&void 0!==e?e:"/"),console.log(n),console.log(null===t||void 0===t||null===(a=t.state)||void 0===a?void 0:a.from)}}),Object(r.jsx)(l,{url:o,location:t}),Object(r.jsx)(i.Suspense,{fallback:d.a,children:Object(r.jsxs)(a.c,{children:[Object(r.jsx)(a.a,{path:"/movies/:movieId/cast",children:Object(r.jsx)(h,{})}),Object(r.jsx)(a.a,{path:"/movies/:movieId/reviews",children:Object(r.jsx)(b,{})})]})})]})}}}]);
//# sourceMappingURL=MovieDetailsView.e98115af.chunk.js.map