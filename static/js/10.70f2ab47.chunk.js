(this.webpackJsonpepic=this.webpackJsonpepic||[]).push([[10],{340:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(16),u=n(65),c=n(70),i=n(6),o=n(335),d=n(161),s=n(230),g=n(339),m=n(17);function p(){var e=Object(l.a)(["\nmargin-top: 5px;\n  margin-right: 10px;\n  border-radius: 4px;\n"]);return p=function(){return e},e}function h(){var e=Object(l.a)(["\n  max-width: 300px;\n"]);return h=function(){return e},e}function f(){var e=Object(l.a)(["\n  margin: 20px 0;\n  text-align: center;\n"]);return f=function(){return e},e}function E(){var e=Object(l.a)(["\n  margin-top: 30px;\n  border: 1px dashed #ccc;\n  padding: 20px;\n"]);return E=function(){return e},e}var b=m.a.div(E()),v=m.a.h1(f()),j=m.a.img(h()),x=m.a.input(p()),w=o.a.Dragger,O=Object(c.a)((function(){var e=Object(u.a)(),t=e.ImageStore,n=e.UserStore,l=Object(i.d)((function(){return{width:null,setWidth:function(e){l.width=e},get widthStr(){return l.width?"/w/".concat(l.width):""},height:null,setHeight:function(e){l.height=e},get heightStr(){return l.height?"/h/".concat(l.height):""},get fullStr(){return t.serverFile.attributes.url.attributes.url+"?imageView2/0"+l.widthStr+l.heightStr}}})),c=Object(r.useRef)(),o=Object(r.useRef)(),m={showUploadList:!1,beforeUpload:function(e){return t.setFile(e),t.setFilename(e.name),null===n.currentUser?(d.a.warning("\u8bf7\u5148\u767b\u5f55\u518d\u4e0a\u4f20\uff01"),!1):/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(e.type)?e.size>1048576?(d.a.error("\u56fe\u7247\u6700\u59271M"),!1):(t.upload().then((function(e){console.log("\u4e0a\u4f20\u6210\u529f"),console.log(e)})).catch((function(){console.log("\u4e0a\u4f20\u5931\u8d25")})),!1):(d.a.error("\u53ea\u80fd\u4e0a\u4f20png/svg/jpg/gif\u683c\u5f0f\u7684\u56fe\u7247"),!1)}};return a.a.createElement("div",null,a.a.createElement(s.a,{tip:"\u4e0a\u4f20\u4e2d",spinning:t.isUpoading},a.a.createElement(w,m,a.a.createElement("p",{className:"ant-upload-drag-icon"},a.a.createElement(g.a,null)),a.a.createElement("p",{className:"ant-upload-text"},"\u70b9\u51fb\u6216\u8005\u62d6\u62fd\u4e0a\u4f20\u56fe\u7247"),a.a.createElement("p",{className:"ant-upload-hint"},"\u4ec5\u652f\u6301.png/.gif/.jpg/.svg\u683c\u5f0f\u7684\u56fe\u7247\uff0c\u56fe\u7247\u6700\u59271M"))),t.serverFile?a.a.createElement(b,null,a.a.createElement(v,null,"\u4e0a\u4f20\u7ed3\u679c"),a.a.createElement("dl",null,a.a.createElement("dt",null,"\u7ebf\u4e0a\u5730\u5740:"),a.a.createElement("dd",null,a.a.createElement("a",{href:t.serverFile.attributes.url.attributes.url},t.serverFile.attributes.url.attributes.url)),a.a.createElement("dt",null,"\u6587\u4ef6\u540d"),a.a.createElement("dd",null,t.filename),a.a.createElement("dt",null,"\u56fe\u7247\u9884\u89c8"),a.a.createElement("dd",null,a.a.createElement(j,{target:"_blank",src:t.serverFile.attributes.url.attributes.url})),a.a.createElement("dt",null,"\u66f4\u591a\u5c3a\u5bf8"),a.a.createElement("dd",null,a.a.createElement(x,{ref:c,onChange:function(){l.setWidth(c.current.value)},placeholder:"\u6700\u5927\u5bbd\u5ea6\uff08\u53ef\u9009\uff09"}),a.a.createElement(x,{ref:o,onChange:function(){l.setHeight(o.current.value)},placeholder:"\u6700\u5927\u9ad8\u5ea6\uff08\u53ef\u9009\uff09"})),a.a.createElement("dt",null,"\u4fee\u6539\u540e\u7684\u5730\u5740:"),a.a.createElement("dd",null,a.a.createElement("a",{target:"_blank",href:l.fullStr},l.fullStr)))):null)}));function S(){var e=Object(l.a)(["\n  background: orange;\n  padding: 10px;\n  margin: 30px 0;\n  color: #fff;\n  border-radius: 4px;\n"]);return S=function(){return e},e}var F=m.a.div(S()),U=Object(c.a)((function(e){var t=e.children,n=Object(u.a)().UserStore;return a.a.createElement(F,null,n.currentUser?null:a.a.createElement("div",null," ",t))}));t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,"\u8bf7\u5148\u767b\u5f55\u518d\u4e0a\u4f20!!!"),a.a.createElement(O,null))}}}]);
//# sourceMappingURL=10.70f2ab47.chunk.js.map