(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{26:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var a=t(11),l=t(12),r=t(14),c=t(13),o=t(15),u=t(0),s=t.n(u),i=(t(43),function(e){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(o.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{class:"loader"},s.a.createElement("div",{class:"l_main"},s.a.createElement("div",{class:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{class:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{class:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{class:"l_square"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))))}}]),n}(u.Component))},36:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(16),c=t.n(r),o=t(11),u=t(12),s=t(14),i=t(13),m=t(15),p=(t(42),t(24)),b=t(9),E=t(26),d=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(2),t.e(7),t.e(1),t.e(6)]).then(t.bind(null,151))}),h=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(16)]).then(t.bind(null,140))}),O=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(9)]).then(t.bind(null,141))}),f=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(12)]).then(t.bind(null,142))}),j=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,143))}),y=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(18)]).then(t.bind(null,152))}),v=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(19)]).then(t.bind(null,144))}),P=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(15)]).then(t.bind(null,154))}),_=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(13)]).then(t.bind(null,145))}),z=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(2),t.e(21),t.e(1),t.e(14)]).then(t.bind(null,146))}),g=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(22)]).then(t.bind(null,147))}),w=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,153))}),k=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(20)]).then(t.bind(null,148))}),q=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(17)]).then(t.bind(null,149))}),N=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,150))}),S=function(e){function n(){return Object(o.a)(this,n),Object(s.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement(a.Suspense,{fallback:l.a.createElement(E.a,{className:"page-loader"})},l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(b.d,null,l.a.createElement(b.b,{exact:!0,path:"/",component:d}),l.a.createElement(b.b,{path:"/speakers",component:h}),l.a.createElement(b.b,{path:"/sponsors/sponsors_heads",component:N}),l.a.createElement(b.b,{path:"/sponsors/yearwise",component:q}),l.a.createElement(b.b,{path:"/sponsors/:year",component:O}),l.a.createElement(b.b,{path:"/sponsors",component:function(){return l.a.createElement(b.a,{to:"/sponsors/2018"})}}),l.a.createElement(b.b,{path:"/events/:id",component:j}),l.a.createElement(b.b,{path:"/events",component:f}),l.a.createElement(b.b,{path:"/startups/:year/:id",component:v}),l.a.createElement(b.b,{path:"/startups",component:y}),l.a.createElement(b.b,{path:"/mentors",component:P}),l.a.createElement(b.b,{path:"/gallery/:name",component:z}),l.a.createElement(b.b,{path:"/gallery",component:_}),l.a.createElement(b.b,{path:"/register",component:g}),l.a.createElement(b.b,{path:"/caportal",component:w}),l.a.createElement(b.b,{path:"/team",component:k})))))}}]),n}(a.Component),C=(t(48),t(6)),x=t(27),D=t(33),I=t(23),J=t(34),T=t(35),X=t.n(T),A=t(28),B={loggedin:!1,first_name:"",last_name:""};t.d(n,"store",function(){return U});var L={key:"auth",storage:X.a,blacklist:[]},M=Object(C.c)({auth:Object(I.a)(L,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"update_user":return Object(A.a)({},e,n.payload);default:return e}})}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||C.d,U=Object(C.e)(M,{},R(Object(C.a)(D.a))),V=Object(I.b)(U);c.a.render(l.a.createElement(x.a,{store:U},l.a.createElement(J.a,{loading:"loading",persistor:V},l.a.createElement(S,null))),document.getElementById("root"))},37:function(e,n,t){e.exports=t(36)},42:function(e,n,t){},43:function(e,n,t){},48:function(e,n,t){}},[[37,4,5]]]);
//# sourceMappingURL=main.bc358bae.chunk.js.map