(this.webpackJsonpepic=this.webpackJsonpepic||[]).push([[3],{104:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),i=n.n(a),c=(n(104),n(16)),u=n(53),l=n.n(u),s=n(28),p=n(3),f=n(17),b=n(160),m=n(65),y=n(70);function h(){var e=Object(c.a)(["\nmargin-left: 10px;\n"]);return h=function(){return e},e}function O(){var e=Object(c.a)(["\n  margin-left: auto;\n"]);return O=function(){return e},e}function g(){var e=Object(c.a)(["\ntext-decoration: none;\ncolor: #fff;\nmargin-left: 30px;\n&.active{\nborder-bottom: 1px solid #fff;\n}\n"]);return g=function(){return e},e}function j(){var e=Object(c.a)(["\nheight: 30px;\n"]);return j=function(){return e},e}function v(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  padding: 10px 100px;\n  background-color: #F44336;\n  color: #fff;\n"]);return v=function(){return e},e}var d=f.a.header(v()),w=f.a.img(j()),U=Object(f.a)(s.b)(g()),E=f.a.div(O()),P=Object(f.a)(b.a)(h()),k=Object(y.a)((function(){var e=Object(m.a)(),t=e.UserStore,n=e.AuthStore,r=Object(p.f)();return o.a.createElement(d,null,o.a.createElement(w,{src:l.a,alt:l.a}),o.a.createElement("nav",null,o.a.createElement(U,{exact:!0,to:"/",activeClassName:"active"},"\u9996\u9875"),o.a.createElement(U,{exact:!0,to:"/history",activeClassName:"active"},"\u4e0a\u4f20\u5386\u53f2"),o.a.createElement(U,{exact:!0,to:"/about",activeClassName:"active"},"\u5173\u4e8e\u6211")),o.a.createElement(E,null,t.currentUser?o.a.createElement(o.a.Fragment,null,t.currentUser.attributes.username,o.a.createElement(P,{type:"primary",onClick:function(){n.logout()}},"\u6ce8\u9500")):o.a.createElement(o.a.Fragment,null,o.a.createElement(P,{type:"primary",onClick:function(){r.push("/login")}}," \u767b\u9646"),o.a.createElement(P,{type:"primary",onClick:function(){r.push("/register")}},"\u6ce8\u518c"))))}));function x(){var e=Object(c.a)(["\n  padding: 10px 100px;\n  text-align: center;\n  font-size: 12px;\n  color: #aaa;\n  margin-bottom: 20px;\n"]);return x=function(){return e},e}var z=f.a.footer(x());var F=function(){return o.a.createElement(z,null,o.a.createElement("p",null,"Footer"))};var D=function(){return o.a.createElement("p",null,"Loading...")},C=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(7),n.e(10)]).then(n.bind(null,340))})),I=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(6),n.e(9)]).then(n.bind(null,341))})),L=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,332))})),S=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,333))})),M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,334))}));var q=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null),o.a.createElement("main",null,o.a.createElement(r.Suspense,{fallback:o.a.createElement(D,null)},o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/",component:C,exact:!0}),o.a.createElement(p.a,{path:"/history",component:I}),o.a.createElement(p.a,{path:"/about",component:L}),o.a.createElement(p.a,{path:"/login",component:S}),o.a.createElement(p.a,{path:"/register",component:M})))),o.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(158);i.a.render(o.a.createElement(s.a,null,o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,n){e.exports=n.p+"static/media/logo.e87f64e8.svg"},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var r=n(0),o=n(8),a=n(18),i=n(19),c=n(2),u=(n(40),n(1)),l=n(13),s=n.n(l);s.a.init({appId:"23wBe6Q7zmMsGnhXBh5YM71G-gzGzoHsz",appKey:"tPIm3QslCu06HtwqJ1KvVqFE",serverURL:"https://23wbe6q7.lc-cn-n1-shared.com"});var p,f,b,m,y,h,O,g,j,v,d,w,U,E,P=function(e,t){var n=new l.User;return n.setUsername(e),n.setPassword(t),new Promise((function(e,t){n.signUp().then((function(t){return e(e)}),(function(e){return t(t)}))}))},k=function(e,t){return new Promise((function(n,r){s.a.User.logIn(e,t).then((function(e){return n(n)}),(function(e){return r(r)}))}))},x=function(){l.User.logOut()},z=function(){return l.User.current()},F=function(e,t){var n=new s.a.Object("Image"),r=new s.a.File(t,e);return n.set("filename",t),n.set("owner",s.a.User.current()),n.set("url",r),new Promise((function(e,t){n.save().then((function(t){return e(t)}),(function(e){return t(e)}))}))},D=function(e){var t=e.page,n=void 0===t?0:t,r=e.limit,o=void 0===r?10:r,a=new s.a.Query("Image");return a.include("owner"),a.limit(o),a.skip(n*o),a.descending("createdAt"),a.equalTo("owner",s.a.User.current()),new Promise((function(e,t){a.find().then((function(t){return e(t)})).catch((function(e){return t(e)}))}))},C=new(p=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"currentUser",f,this)}return Object(i.a)(e,[{key:"pullUser",value:function(){this.currentUser=z()}},{key:"resetUser",value:function(){this.currentUser=null}}]),e}(),f=Object(c.a)(p.prototype,"currentUser",[u.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(c.a)(p.prototype,"pullUser",[u.f],Object.getOwnPropertyDescriptor(p.prototype,"pullUser"),p.prototype),Object(c.a)(p.prototype,"resetUser",[u.f],Object.getOwnPropertyDescriptor(p.prototype,"resetUser"),p.prototype),p),I=new(b=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"list",m,this),Object(o.a)(this,"isLoading",y,this),Object(o.a)(this,"hasMore",h,this),Object(o.a)(this,"page",O,this),this.limit=10}return Object(i.a)(e,[{key:"append",value:function(e){this.list=this.list.concat(e)}},{key:"find",value:function(){var e=this;this.isLoading=!0,D({page:this.page,limit:this.limit}).then((function(t){console.log(t),e.append(t),e.page++,t.length<e.limit&&(e.hasMore=!1)})).catch().finally((function(){e.isLoading=!1}))}},{key:"reset",value:function(){this.list=[],this.isLoading=!1,this.hasMore=!0,this.page=0}}]),e}(),m=Object(c.a)(b.prototype,"list",[u.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=Object(c.a)(b.prototype,"isLoading",[u.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),h=Object(c.a)(b.prototype,"hasMore",[u.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),O=Object(c.a)(b.prototype,"page",[u.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(c.a)(b.prototype,"append",[u.f],Object.getOwnPropertyDescriptor(b.prototype,"append"),b.prototype),Object(c.a)(b.prototype,"find",[u.f],Object.getOwnPropertyDescriptor(b.prototype,"find"),b.prototype),Object(c.a)(b.prototype,"reset",[u.f],Object.getOwnPropertyDescriptor(b.prototype,"reset"),b.prototype),b),L=n(161),S=new(g=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"filename",j,this),Object(o.a)(this,"file",v,this),Object(o.a)(this,"isUpoading",d,this),Object(o.a)(this,"serverFile",w,this)}return Object(i.a)(e,[{key:"setFilename",value:function(e){this.filename=e}},{key:"setFile",value:function(e){this.file=e}},{key:"upload",value:function(){var e=this;return this.isUpoading=!0,this.serverFile=null,new Promise((function(t,n){F(e.file,e.filename).then((function(n){e.serverFile=n,t(n)})).catch((function(e){L.a.error("\u4e0a\u4f20\u5931\u8d25"),n(e)})).finally((function(){e.isUpoading=!1}))}))}},{key:"reset",value:function(){this.isUpoading=!1,this.serverFile=null}}]),e}(),j=Object(c.a)(g.prototype,"filename",[u.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),v=Object(c.a)(g.prototype,"file",[u.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=Object(c.a)(g.prototype,"isUpoading",[u.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),w=Object(c.a)(g.prototype,"serverFile",[u.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(c.a)(g.prototype,"setFilename",[u.f],Object.getOwnPropertyDescriptor(g.prototype,"setFilename"),g.prototype),Object(c.a)(g.prototype,"setFile",[u.f],Object.getOwnPropertyDescriptor(g.prototype,"setFile"),g.prototype),Object(c.a)(g.prototype,"upload",[u.f],Object.getOwnPropertyDescriptor(g.prototype,"upload"),g.prototype),Object(c.a)(g.prototype,"reset",[u.f],Object.getOwnPropertyDescriptor(g.prototype,"reset"),g.prototype),g),M=new(U=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"values",E,this)}return Object(i.a)(e,[{key:"setUsername",value:function(e){this.values.username=e}},{key:"setPassword",value:function(e){this.values.password=e}},{key:"login",value:function(){var e=this;return new Promise((function(t,n){k(e.values.username,e.values.password).then((function(e){console.log("\u767b\u9646\u6210\u529f"),C.pullUser(),t(e)})).catch((function(e){console.log("\u767b\u9646\u5931\u8d25"),L.a.error("\u767b\u9646\u5931\u8d25"),C.resetUser(),n(e)}))}))}},{key:"register",value:function(){var e=this;return new Promise((function(t,n){P(e.values.username,e.values.password).then((function(e){C.pullUser(),t(e)})).catch((function(e){C.resetUser(),L.a.error("\u6ce8\u518c\u5931\u8d25"),n(e)}))}))}},{key:"logout",value:function(){x(),C.resetUser(),I.reset(),S.reset()}}]),e}(),E=Object(c.a)(U.prototype,"values",[u.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{username:"",password:""}}}),Object(c.a)(U.prototype,"setUsername",[u.f],Object.getOwnPropertyDescriptor(U.prototype,"setUsername"),U.prototype),Object(c.a)(U.prototype,"setPassword",[u.f],Object.getOwnPropertyDescriptor(U.prototype,"setPassword"),U.prototype),Object(c.a)(U.prototype,"login",[u.f],Object.getOwnPropertyDescriptor(U.prototype,"login"),U.prototype),Object(c.a)(U.prototype,"register",[u.f],Object.getOwnPropertyDescriptor(U.prototype,"register"),U.prototype),Object(c.a)(U.prototype,"logout",[u.f],Object.getOwnPropertyDescriptor(U.prototype,"logout"),U.prototype),U),q=Object(r.createContext)({AuthStore:M,UserStore:C,ImageStore:S,HistoryStore:I}),B=function(){return Object(r.useContext)(q)}},99:function(e,t,n){e.exports=n(159)}},[[99,4,5]]]);
//# sourceMappingURL=main.330d8050.chunk.js.map