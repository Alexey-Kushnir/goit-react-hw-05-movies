"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{691:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});var t,o,a=n(861),u=n(439),c=n(757),s=n.n(c),i=n(791),l=n(636),p=n(87),h=n(689),f=n(168),d=n(444),g=d.ZP.input(t||(t=(0,f.Z)(["\n  margin-right: 5px;\n  border: 2px solid grey;\n  border-radius: 3px;\n  height: 20px;\n  width: 300px;\n"]))),x=d.ZP.button(o||(o=(0,f.Z)(["\n  border: 2px solid grey;\n  border-radius: 3px;\n  height: 26px;\n  width: 100px;\n  cursor: pointer;\n  &:hover,\n  :focus {\n    background-color: #80808054;\n    border: 0;\n  }\n"]))),v=n(184),b=function(){var e=(0,i.useState)([]),r=(0,u.Z)(e,2),n=r[0],t=r[1],o=(0,p.lr)(),c=(0,u.Z)(o,2),f=c[0],d=c[1],b=(0,h.TH)(),m=f.get("query");(0,i.useEffect)((function(){if(m){var e=new AbortController,r="&query=".concat(m,"&page=1"),n=function(){var n=(0,a.Z)(s().mark((function n(){var o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.C)("search/movie?",e,r);case 3:o=n.sent,t(o),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("IsError: ".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){return e.abort()}}}),[m]);return(0,v.jsxs)("div",{children:[(0,v.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var r=e.target[0].value.trim();if(""===r)return d({});d({query:r}),e.target.reset()}(e)},children:[(0,v.jsx)(g,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"  Search movies"}),(0,v.jsx)(x,{type:"submit",children:"Search"})]}),(0,v.jsxs)(v.Fragment,{children:[Boolean(n.results)&&n.results.length>0&&(0,v.jsx)("ul",{children:n.results.map((function(e){var r=e.title,n=e.id;return(0,v.jsx)("li",{children:(0,v.jsx)(p.rU,{to:"".concat(n),state:{from:b},children:r})},n)}))}),Boolean(n.results)&&0===n.results.length&&1===n.page&&""!==m?(0,v.jsx)("p",{children:"No movies found, please change your query."}):null]})]})}},636:function(e,r,n){n.d(r,{C:function(){return c}});var t=n(861),o=n(757),a=n.n(o),u=n(243),c=function(){var e=(0,t.Z)(a().mark((function e(r,n){var t,o,c,s,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>2&&void 0!==i[2]?i[2]:"",o="1f93214cb1bbadcc143eeb01d552ab8c",c="".concat("https://api.themoviedb.org/3/").concat(r,"api_key=").concat(o,"&language=en-US").concat(t),e.next=6,u.Z.get(c,{signal:n.signal});case 6:return s=e.sent,e.abrupt("return",s.data);case 8:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=691.a7bb6758.chunk.js.map