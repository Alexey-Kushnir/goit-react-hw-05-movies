"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),o=n.n(c),s=n(689),i=n(791),u=n(636),l=n(184);t.default=function(){var e=(0,i.useState)(),t=(0,a.Z)(e,2),n=t[0],c=t[1],p=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var e=new AbortController,t="movie/".concat(p,"/credits?"),n=function(){var n=(0,r.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.C)(t,e);case 3:r=n.sent,console.log(r),c(r.cast),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("IsError: ".concat(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){return e.abort()}}),[p]),(0,l.jsx)(l.Fragment,{children:Boolean(n)&&(0,l.jsx)("ul",{children:n.map((function(e){var t=e.cast_id,n=e.character,r=e.name,a=e.profile_path;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:function(e){return e?"https://image.tmdb.org/t/p/original/".concat(e):"https://developersushant.files.wordpress.com/2015/02/no-image-available.png"}(a),alt:"",height:"150px"}),(0,l.jsx)("p",{children:r}),(0,l.jsxs)("p",{children:["Character: ",n]})]},t)}))})})}},636:function(e,t,n){n.d(t,{C:function(){return s}});var r=n(861),a=n(757),c=n.n(a),o=n(243),s=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a,s,i,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>2&&void 0!==u[2]?u[2]:"",a="1f93214cb1bbadcc143eeb01d552ab8c",s="".concat("https://api.themoviedb.org/3/").concat(t,"api_key=").concat(a,"&language=en-US").concat(r),e.next=6,o.Z.get(s,{signal:n.signal});case 6:return i=e.sent,e.abrupt("return",i.data);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.aea179c2.chunk.js.map