"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[847],{388:function(e,n,t){var r=t(184);n.Z=function(){return(0,r.jsx)("h2",{children:".....Loading"})}},847:function(e,n,t){t.r(n);var r=t(439),i=t(388),s=t(791),c=t(73),l=t(689),o=t(87),a=t(503),u=t(184);n.default=function(){var e,n,t=(0,l.UO)().movieId,h=(0,l.TH)(),d=(0,s.useState)({}),f=(0,r.Z)(d,2),j=f[0],x=f[1],p=(0,s.useState)(!1),v=(0,r.Z)(p,2),m=v[0],w=v[1],g=(0,s.useState)(""),k=(0,r.Z)(g,2),y=k[0],_=k[1],S=(0,s.useRef)(null!==(e=null===(n=h.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,s.useEffect)((function(){y&&(0,c.Am)(y)}),[y]),(0,s.useEffect)((function(){w(!0),_(""),(0,a.Z)(t).then((function(e){x(e)})).catch((function(e){_(e)})).finally((function(){w(!1)}))}),[t]),(0,u.jsxs)("div",{children:[m&&(0,u.jsx)(i.Z,{}),(0,u.jsx)(o.rU,{to:S.current,children:"Go back"}),(0,u.jsxs)("div",{style:{display:"flex"},children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(j.poster_path),alt:"",style:{width:300}}),(0,u.jsxs)("ul",{style:{listStyle:"none"},children:[(0,u.jsx)("li",{children:(0,u.jsx)("h2",{children:j.title})}),(0,u.jsx)("li",{children:(0,u.jsxs)("p",{children:["User Score ",j.vote_average]})}),(0,u.jsx)("li",{children:(0,u.jsx)("h3",{children:"Overwiev"})}),(0,u.jsx)("li",{children:(0,u.jsx)("p",{children:j.overview})}),(0,u.jsx)("li",{children:(0,u.jsx)("h4",{children:"Genres"})})]})]}),(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("ul",{style:{listStyle:"none"},children:[(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(l.j3,{})]})}},503:function(e,n,t){var r=t(861),i=t(757),s=t.n(i),c=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(n,"?api_key=").concat("f8560092a6f6e40fc22fba47f695da5a","&language=en-US&append_to_response=credits")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something went wrong"))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.Z=c}}]);
//# sourceMappingURL=847.c2fc4c6f.chunk.js.map