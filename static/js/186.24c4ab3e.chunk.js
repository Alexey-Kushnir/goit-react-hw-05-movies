"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),o=t.n(c),u=t(689),s=t(791),i=t(636),l=t(184);n.default=function(){var e=(0,s.useState)(),n=(0,a.Z)(e,2),t=n[0],c=n[1],h=(0,u.UO)().movieId;return(0,s.useEffect)((function(){var e=new AbortController,n="movie/".concat(h,"/reviews?"),t=function(){var t=(0,r.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.C)(n,e);case 3:r=t.sent,c(r.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("IsError: ".concat(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}),[h]),(0,l.jsx)(l.Fragment,{children:Boolean(t)&&t.length>0?(0,l.jsx)("ul",{children:t.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h4",{children:["Author: ",n]}),(0,l.jsx)("p",{children:t})]},r)}))}):(0,l.jsx)("p",{children:"We don't have any reviews for this movie."})})}},636:function(e,n,t){t.d(n,{C:function(){return u}});var r=t(861),a=t(757),c=t.n(a),o=t(243),u=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a,u,s,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:"",a="1f93214cb1bbadcc143eeb01d552ab8c",u="".concat("https://api.themoviedb.org/3/").concat(n,"api_key=").concat(a,"&language=en-US").concat(r),e.next=6,o.Z.get(u,{signal:t.signal});case 6:return s=e.sent,e.abrupt("return",s.data);case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.24c4ab3e.chunk.js.map